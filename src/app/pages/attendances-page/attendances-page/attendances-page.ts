import { Component, OnInit, inject } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { CourseService } from '../../../core/services/course-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attendances-page',
  standalone: true,
  imports: [NgChartsModule, CommonModule, RouterLink],
  templateUrl: './attendances-page.html',
  styleUrls: ['./attendances-page.scss']
})
export class AttendancesPage implements OnInit {

  private readonly _courseService = inject(CourseService);

  courseNames = ['Web Statique', 'UI/UX Design', 'Initiation Programmation'];
  attendanceRates: number[] = [];

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label;   
            const value = context.raw;     
            return `${label} : ${value}%`;
          }
        }
      }
    }
  };

  public pieChartColors = [
    { backgroundColor: ['#4A90E2', '#F5A623'] }
  ];

  ngOnInit(): void {
    this.attendanceRates = this.courseNames.map(name =>
      Math.round(this._courseService.attendanceCourseRate(name))
    );
  }

  getChartData(index: number): ChartDataset<'pie', number[]> {
    return {
      data: [
        this.attendanceRates[index],
        100 - this.attendanceRates[index]
      ],
      label: 'Présence (%)'
    };
  }

  getChartLabels(index: number): string[] {
    return ['Présent', 'Absent'];
  }
}
