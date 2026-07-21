import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

const mockCourses: Course[] = [
  { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
  { id: 2, name: 'Algorithms', code: 'CS102', credits: 3, gradeStatus: 'pending' }
];

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  // H10 Task2 test 1 — getCourses success
  it('should fetch courses via GET', () => {
    service.getCourses().subscribe(courses => expect(courses.length).toBe(2));
    httpMock.expectOne('http://localhost:3000/courses').flush(mockCourses);
  });

  // H10 Task2 test 2 — error handling falls back to local data
  it('should fall back to local data on 500 error', () => {
    service.getCourses().subscribe({
      next: courses => expect(courses.length).toBeGreaterThan(0),
      error: () => fail('should have fallen back to local data')
    });
    // retry(2) means 3 total requests before catchError kicks in
    for (let i = 0; i < 3; i++) {
      httpMock.expectOne('http://localhost:3000/courses').flush('error', { status: 500, statusText: 'Server Error' });
    }
  });
});
