import { Routes } from '@angular/router';
import { CourseGrid } from './components/course-grid/course-grid';

export const routes: Routes = [

    {
         path: '', redirectTo: 'courses', pathMatch: 'full' 
    },
    
    {
        path: 'courses',
        component: CourseGrid
    }
];
