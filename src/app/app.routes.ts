import { Routes } from '@angular/router';
import { CourseGrid } from './components/course-grid/course-grid';
import { CoursesPage } from './pages/courses-page/courses-page';
import { AttendancesPage } from './pages/attendances-page/attendances-page/attendances-page';

export const routes: Routes = [

    {
         path: '', redirectTo: 'courses', pathMatch: 'full' 
    },
    
    {
        path: 'courses',
        component: CoursesPage
    },

    {
        path: 'attendance',
        component: AttendancesPage
    }
];
