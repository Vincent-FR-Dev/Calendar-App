import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  private readonly _planning = 
  
  `14-11-25;vendredi;
15-11-25;samedi;
16-11-25;dimanche;
17-11-25;lundi;Web Statique;1/203
18-11-25;mardi;Web Statique;1/203
19-11-25;mercredi;
20-11-25;jeudi;Web Statique;1/203
21-11-25;vendredi;
22-11-25;samedi;
23-11-25;dimanche;
24-11-25;lundi;Web Statique;1/203
25-11-25;mardi;Web Statique;1/203
26-11-25;mercredi;
27-11-25;jeudi;Web Statique;1/203
28-11-25;vendredi;
29-11-25;samedi;
30-11-25;dimanche;
01-12-25;lundi;Web Statique;1/203
02-12-25;mardi;Web Statique;1/203
03-12-25;mercredi;
04-12-25;jeudi;Web Statique;1/203
05-12-25;vendredi;
06-12-25;samedi;
07-12-25;dimanche;
08-12-25;lundi;Web Statique;1/203
09-12-25;mardi;
10-12-25;mercredi;
11-12-25;jeudi;Web Statique;1/203
12-12-25;vendredi;
13-12-25;samedi;
14-12-25;dimanche;
15-12-25;lundi;Web Statique;1/203
16-12-25;mardi;
17-12-25;mercredi;
18-12-25;jeudi;Web Statique;1/203
19-12-25;vendredi;
20-12-25;samedi;
21-12-25;dimanche;
22-12-25;lundi;
23-12-25;mardi;
24-12-25;mercredi;
25-12-25;jeudi;
26-12-25;vendredi;
27-12-25;samedi;
28-12-25;dimanche;
29-12-25;lundi;
30-12-25;mardi;
31-12-25;mercredi;
01-01-26;jeudi;
02-01-26;vendredi;
03-01-26;samedi;
04-01-26;dimanche;
05-01-26;lundi;Web Statique;1/203
06-01-26;mardi;UI/UX Design;1/202
07-01-26;mercredi;
08-01-26;jeudi;
09-01-26;vendredi;
10-01-26;samedi;
11-01-26;dimanche;
12-01-26;lundi;Web Statique;1/203
13-01-26;mardi;UI/UX Design;1/202
14-01-26;mercredi;
15-01-26;jeudi;Initiation Programmation;1/202
16-01-26;vendredi;
17-01-26;samedi;
18-01-26;dimanche;
19-01-26;lundi;Web Statique;1/203
20-01-26;mardi;UI/UX Design;1/202
21-01-26;mercredi;
22-01-26;jeudi;Initiation Programmation;1/202
23-01-26;vendredi;
24-01-26;samedi;
25-01-26;dimanche;
26-01-26;lundi;Web Statique;1/203
27-01-26;mardi;UI/UX Design;1/202
28-01-26;mercredi;
29-01-26;jeudi;Initiation Programmation;Distanciel
30-01-26;vendredi;
31-01-26;samedi;
01-02-26;dimanche;
02-02-26;lundi;Web Statique;1/203
03-02-26;mardi;UI/UX Design;1/202
04-02-26;mercredi;
05-02-26;jeudi;Initiation Programmation;Distanciel
06-02-26;vendredi;
07-02-26;samedi;
08-02-26;dimanche;
09-02-26;lundi;Web Statique;1/203
10-02-26;mardi;UI/UX Design;1/202
11-02-26;mercredi;
12-02-26;jeudi;Initiation Programmation;1/202
13-02-26;vendredi;
14-02-26;samedi;
15-02-26;dimanche;
16-02-26;lundi;
17-02-26;mardi;
18-02-26;mercredi;
19-02-26;jeudi;
20-02-26;vendredi;
21-02-26;samedi;
22-02-26;dimanche;
23-02-26;lundi;
24-02-26;mardi;
25-02-26;mercredi;
26-02-26;jeudi;
27-02-26;vendredi;
28-02-26;samedi;
01-03-26;dimanche;
02-03-26;lundi;Web Statique;1/203
03-03-26;mardi;UI/UX Design;1/202
04-03-26;mercredi;
05-03-26;jeudi;Initiation Programmation;1/202
06-03-26;vendredi;
07-03-26;samedi;
08-03-26;dimanche;
09-03-26;lundi;Web Statique;1/203
10-03-26;mardi;UI/UX Design;1/202
11-03-26;mercredi;
12-03-26;jeudi;Initiation Programmation;Distanciel
13-03-26;vendredi;
14-03-26;samedi;
15-03-26;dimanche;
16-03-26;lundi;Web Statique;1/203
17-03-26;mardi;UI/UX Design;1/202
18-03-26;mercredi;
19-03-26;jeudi;Initiation Programmation;Distanciel
20-03-26;vendredi;
21-03-26;samedi;
22-03-26;dimanche;
23-03-26;lundi;Web Statique;1/203
24-03-26;mardi;UI/UX Design;1/202
25-03-26;mercredi;
26-03-26;jeudi;Initiation Programmation;1/202
27-03-26;vendredi;
28-03-26;samedi;
29-03-26;dimanche;
30-03-26;lundi;Web Statique;1/203
31-03-26;mardi;UI/UX Design;1/202
01-04-26;mercredi;
02-04-26;jeudi;
03-04-26;vendredi;
04-04-26;samedi;
05-04-26;dimanche;
06-04-26;lundi;
07-04-26;mardi;UI/UX Design;1/202
08-04-26;mercredi;
09-04-26;jeudi;Web Statique;1/203
10-04-26;vendredi;
11-04-26;samedi;
12-04-26;dimanche;
13-04-26;lundi;Web Statique;1/203
14-04-26;mardi;UI/UX Design;1/202
15-04-26;mercredi;
16-04-26;jeudi;Web Statique;1/203
17-04-26;vendredi;
18-04-26;samedi;
19-04-26;dimanche;
20-04-26;lundi;Web Statique;1/203
21-04-26;mardi;UI/UX Design;1/202
22-04-26;mercredi;
23-04-26;jeudi;Web Statique;1/203
24-04-26;vendredi;
25-04-26;samedi;
26-04-26;dimanche;
27-04-26;lundi;
28-04-26;mardi;
29-04-26;mercredi;
30-04-26;jeudi;
01-05-26;vendredi;
02-05-26;samedi;
03-05-26;dimanche;
04-05-26;lundi;
05-05-26;mardi;
06-05-26;mercredi;
07-05-26;jeudi;
08-05-26;vendredi;
09-05-26;samedi;
10-05-26;dimanche;
11-05-26;lundi;Web Statique;1/203
12-05-26;mardi;UI/UX Design;1/202
13-05-26;mercredi;
14-05-26;jeudi;
15-05-26;vendredi;
16-05-26;samedi;
17-05-26;dimanche;
18-05-26;lundi;Web Statique;1/203
19-05-26;mardi;UI/UX Design;1/202
20-05-26;mercredi;
21-05-26;jeudi;Web Statique;1/203
22-05-26;vendredi;
23-05-26;samedi;
24-05-26;dimanche;
25-05-26;lundi;
26-05-26;mardi;UI/UX Design;1/202
27-05-26;mercredi;
28-05-26;jeudi;Web Statique;1/203
29-05-26;vendredi;
30-05-26;samedi;
31-05-26;dimanche;
01-06-26;lundi;Web Statique;1/203
02-06-26;mardi;UI/UX Design;1/202
03-06-26;mercredi;
04-06-26;jeudi;
05-06-26;vendredi;
06-06-26;samedi;
07-06-26;dimanche;
08-06-26;lundi;Web Statique;1/203
09-06-26;mardi;UI/UX Design;1/202
10-06-26;mercredi;
11-06-26;jeudi;Initiation Programmation;1/202
12-06-26;vendredi;
13-06-26;samedi;
14-06-26;dimanche;
15-06-26;lundi;Web Statique;1/203
16-06-26;mardi;UI/UX Design;1/202
17-06-26;mercredi;
18-06-26;jeudi;
19-06-26;vendredi;
20-06-26;samedi;
21-06-26;dimanche;
22-06-26;lundi;
23-06-26;mardi;
24-06-26;mercredi;
25-06-26;jeudi;
26-06-26;vendredi;
27-06-26;samedi;
28-06-26;dimanche;
29-06-26;lundi;
30-06-26;mardi;`.trim(); 

  //on prend le string _planning et on le découpe en lignes
  calendar = this._planning.split(/\r?\n/); // regex
  
  //pour chaque ligne, on utilise split(';') pour découper en colonnes
  parseLines(): string[][] {
  return this.calendar.map(line => line.split(';'));
}

//cette fonction transforme une ligne découpée en colonnes en objet Course
mapToCourse(cols: string[], index: number): Course {
  const [dateStr, day, name = '', local = ''] = cols;

  const [dd, mm, yy] = dateStr.split('-');
  const date = new Date(Number(`20${yy}`), Number(mm) - 1, Number(dd));

  return {
    id: index,
    name: name,
    local: local,
    date
  };
  
}

getCourses(): Course[] {
  const saved = localStorage.getItem('courses');
  if (saved) {
    return JSON.parse(saved);
  }

  //si rien dans localStorage, parser le planning initial
  const rows = this.parseLines();
  const courses = rows.map((cols, index) => this.mapToCourse(cols, index));
  
  localStorage.setItem('courses', JSON.stringify(courses));
  return courses;
}

setPresence(courseId: number, present: boolean) {
  const courses = this.getCourses();

  const course = courses.find(c => c.id === courseId);

  if (course) {
    course.present = present;
  }

  localStorage.setItem('courses', JSON.stringify(courses));
}

attendanceCourseRate(courseName:string): number {
  const today = new Date();
  const courses = this.getCourses();
  const course = courses.filter(c => c.name == courseName && c.date <= today);
  if (!course.length) return 0;

  const presentCount = course.filter(c => c.present).length;
  return (presentCount / course.length) * 100;


}

  
}
