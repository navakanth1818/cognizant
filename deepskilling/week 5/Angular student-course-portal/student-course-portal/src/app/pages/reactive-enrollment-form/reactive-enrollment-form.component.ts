import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

// H5: custom sync validator — disallows course codes starting with 'XX'
function noCourseCode(control: AbstractControl): ValidationErrors | null {
  return control.value?.toString().startsWith('XX') ? { noCourseCode: true } : null;
}

// H5: custom async validator — simulates email uniqueness check
function simulateEmailCheck(control: AbstractControl): Observable<ValidationErrors | null> {
  return of(control.value?.includes('test@') ? { emailTaken: true } : null).pipe(delay(800));
}

// H7: CanDeactivate — warns on dirty form navigation
@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './reactive-enrollment-form.component.html'
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  // Getter keeps template clean — avoids casting FormArray in template
  get additionalCourses(): FormArray { return this.enrollForm.get('additionalCourses') as FormArray; }

  addCourse(): void { this.additionalCourses.push(new FormControl('', Validators.required)); }
  removeCourse(i: number): void { this.additionalCourses.removeAt(i); }

  onSubmit(): void {
    if (this.enrollForm.valid) {
      // enrollForm.value excludes disabled controls; getRawValue() includes all
      console.log('value:', this.enrollForm.value, 'raw:', this.enrollForm.getRawValue());
      this.submitted = true;
    }
  }

  // H7: CanDeactivate guard checks this
  canDeactivate(): boolean { return !this.enrollForm.dirty; }
}
