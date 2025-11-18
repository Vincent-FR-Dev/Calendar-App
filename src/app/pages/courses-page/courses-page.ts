import { Component } from '@angular/core';
import { CourseGrid } from '../../components/course-grid/course-grid';

@Component({
  selector: 'app-courses-page',
  imports: [CourseGrid],
  templateUrl: './courses-page.html',
  styleUrl: './courses-page.scss',
})
export class CoursesPage {

}
