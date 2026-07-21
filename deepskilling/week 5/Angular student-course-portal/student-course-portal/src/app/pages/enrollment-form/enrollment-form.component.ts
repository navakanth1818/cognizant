import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

// H4: template-driven form
@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {
  submitted = false;

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form value:', form.value, 'Valid:', form.valid);
      this.submitted = true;
    }
  }
}
