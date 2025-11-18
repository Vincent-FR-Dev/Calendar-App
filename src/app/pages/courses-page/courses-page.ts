import { Component, inject, signal } from '@angular/core';
import { CourseGrid } from '../../components/course-grid/course-grid';
import { RouterModule } from '@angular/router';
import { CourseService } from '../../core/services/course-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses-page',
  imports: [CourseGrid, RouterModule, CommonModule],
  templateUrl: './courses-page.html',
  styleUrl: './courses-page.scss',
})
export class CoursesPage {

  private readonly _courseService = inject(CourseService);
  noCourseToday = signal(false);
  courses = signal(this._courseService.getCourses());

  goToTodayCourse() {
    console.log('Bouton clic !');
    
    //j'ignore l'heure en mettant la date du jour à minuit
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todayCourse = this.courses().find(c => {
      const courseDate = new Date(c.date);
      courseDate.setHours(0, 0, 0, 0);
      
      return courseDate.getTime() === today.getTime() && c.name.trim() !== '';
    });
    
    //je vérifie que tout est ok dans la console du navigateur
    console.log('📅 Date du jour:', today);
    console.log('🎯 Cours trouvé:', todayCourse);

    if (todayCourse) {
      this.noCourseToday.set(false);
      setTimeout(() => {
        const el = document.getElementById('course-' + todayCourse.id);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
      console.log('✅ Cours trouvé:', todayCourse.name);
    } else {
      this.noCourseToday.set(true);
      console.log('❌ Pas de cours aujourd\'hui');
    }
  }
}