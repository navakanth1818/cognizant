import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Course } from '../../models/course.model';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, CreditLabelPipe],
  templateUrl: './student-profile.component.html'
})
export class StudentProfileComponent implements OnInit {
  enrolledCourses$: Observable<Course[]>;

  constructor(private store: Store) {
    // H6/H9: cross-slice selector combines course + enrollment state
    this.enrolledCourses$ = this.store.select(selectEnrolledCourses);
  }

  ngOnInit(): void {}
}
