import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, AsyncPipe, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  // H2: @Output emits course id to parent
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;
  enrolledIds$: Observable<number[]>;

  constructor(private store: Store) {
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  // H2: ngOnChanges logs previous and current course input
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('CourseCard ngOnChanges:', changes['course'].previousValue, '→', changes['course'].currentValue);
    }
  }

  // H3: getter keeps template clean — computed CSS classes
  get cardClasses() {
    return {
      'card--enrolled': !!this.course?.enrolled,
      'card--full': this.course?.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  // H3: border colour driven by gradeStatus
  get borderStyle() {
    const colours: Record<string, string> = { passed: 'green', failed: 'red', pending: '#9e9e9e' };
    return { 'border-left-color': colours[this.course?.gradeStatus] ?? '#ccc' };
  }

  toggleExpand(): void { this.isExpanded = !this.isExpanded; }

  // H9: dispatch NgRx action instead of calling service directly
  onEnroll(ids: number[]): void {
    if (ids.includes(this.course.id)) {
      this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
    } else {
      this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
      this.enrollRequested.emit(this.course.id);
    }
  }
}
