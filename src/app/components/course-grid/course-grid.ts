import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../../core/services/course-service';
import { Course } from '../../core/models/course.model';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-grid',
  imports: [FormsModule,CommonModule],
  templateUrl: './course-grid.html',
  styleUrl: './course-grid.scss',
})
export class CourseGrid implements OnInit {

  private readonly _courseService = inject(CourseService)

  courses: Course[] = [];

   ngOnInit() {
    this.courses = this._courseService.getCourses();
  }

  togglePresence(course: Course) {
    course.present = !course.present;
    this._courseService.setPresence(course.id, course.present!);
  }

  getAttendance(courseName: string): number {
    return this._courseService.attendanceCourseRate(courseName);
  }
}
