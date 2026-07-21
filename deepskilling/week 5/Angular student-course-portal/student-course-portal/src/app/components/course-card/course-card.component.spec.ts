import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { CourseCardComponent } from './course-card.component';
import { Course } from '../../models/course.model';

const mockCourse: Course = { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' };

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      providers: [provideMockStore({ initialState: { enrollment: { enrolledCourseIds: [] }, course: { courses: [], loading: false, error: null } } })]
    }).compileComponents();
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  // H10 Task1 test 1
  it('should create', () => expect(component).toBeTruthy());

  // H10 Task1 test 2 — @Input rendering
  it('should display the course name', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    const h3 = fixture.debugElement.query(By.css('h3'))?.nativeElement.textContent;
    expect(h3).toContain('Data Structures');
  });

  // H10 Task1 test 3 — @Output emit
  it('should emit enrollRequested on enroll click when not enrolled', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    spyOn(component.enrollRequested, 'emit');
    // directly call onEnroll with empty ids (not enrolled)
    component.onEnroll([]);
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  // H10 Task1 test 4 — ngOnChanges
  it('should log on ngOnChanges', () => {
    component.course = mockCourse;
    spyOn(console, 'log');
    component.ngOnChanges({ course: new SimpleChange(undefined, mockCourse, true) });
    expect(console.log).toHaveBeenCalled();
  });

  // H10 Task1 test 5 — card classes getter
  it('should apply card--full class when credits >= 4', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    expect(component.cardClasses['card--full']).toBeTrue();
  });
});
