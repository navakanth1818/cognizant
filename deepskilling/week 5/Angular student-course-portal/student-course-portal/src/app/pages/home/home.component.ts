import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  // H2: interpolation
  portalName = 'Student Course Portal';
  // H2: property binding
  isPortalActive = true;
  // H2: event binding result
  message = '';
  // H2: two-way binding with ngModel
  searchTerm = '';
  // H6: live course count from service
  courseCount = 0;

  constructor(private courseService: CourseService) {}

  // H2: ngOnInit — use for data fetch, not constructor (inputs not set yet)
  ngOnInit(): void {
    this.courseCount = this.courseService.getCoursesLocal().length;
    console.log('HomeComponent initialised — courses loaded');
  }

  // H2: ngOnDestroy — critical for cleanup to avoid memory leaks
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void { this.message = 'Enrollment opened!'; }
}
