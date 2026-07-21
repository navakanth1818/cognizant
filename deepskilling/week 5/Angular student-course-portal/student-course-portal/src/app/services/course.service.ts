import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  // Fallback in-memory data used when JSON Server is offline (Hands-On 1-7)
  private courses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Algorithms', code: 'CS102', credits: 3, gradeStatus: 'pending' },
    { id: 3, name: 'Angular Development', code: 'WD201', credits: 4, gradeStatus: 'failed' },
    { id: 4, name: 'Database Systems', code: 'CS201', credits: 3, gradeStatus: 'passed' },
    { id: 5, name: 'Operating Systems', code: 'CS301', credits: 4, gradeStatus: 'pending' },
  ];

  constructor(private http: HttpClient) {}

  // H8: HTTP GET with RxJS operators (map, tap, retry, catchError)
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      tap(courses => console.log('Courses loaded:', courses.length)),
      map(courses => courses.filter(c => c.credits > 0)),
      retry(2),
      catchError(err => {
        console.error('Failed to load from API, using local data', err);
        return of(this.courses);
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => {
        const found = this.courses.find(c => c.id === id);
        return of(found ?? this.courses[0]);
      })
    );
  }

  // H8: POST, PUT, DELETE
  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Used by NgRx effects and EnrollmentService internally
  getCoursesLocal(): Course[] { return this.courses; }
  getCourseByIdLocal(id: number): Course | undefined { return this.courses.find(c => c.id === id); }
  addCourse(course: Course): void { this.courses.push(course); }
}
