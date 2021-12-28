import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';;
import { delay, map, of, Subject, takeUntil, tap } from 'rxjs';
import { Chart, ChartConfiguration, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip, LinearScale } from 'chart.js';


const FAKE_API_RESPONCE = {
  skills: {
    HTML: 5,
    CSS: 5,
    TS: 5,
    Angular: 5,
    React: 3,
    NodeJS: 1,
    Docker: 2,
  }
}

type Dataset = {
  axis: string,
  label: string,
  data: number[],
  fill: boolean,
  backgroundColor: string[],
}

type ChartData = { datasets: Dataset[], labels: string[] };

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
  @ViewChild('myChart', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  chart: any;
  loading = true;

  private destroy = new Subject<void>();

  constructor() {
    Chart.register(BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip, LinearScale);
  }

  ngOnInit(): void {
    of(FAKE_API_RESPONCE).pipe(
      delay(700),
      takeUntil(this.destroy),
      map(r => this.mapQueryResult(r)),
      tap(r => {
        this.loading = false;
        this.makeChart(r);
      })
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  private mapQueryResult(result: typeof FAKE_API_RESPONCE): ChartData {
    const skills = Object.keys(result.skills);
    const data = Object.values(result.skills);

    return {
      datasets: [{
        data,
        axis: 'y',
        fill: true,
        label: "Level",
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ]
      }],
      labels: skills,
    }
  }

  private makeChart(chartData: ChartData): void {
    const { datasets, labels } = chartData;
    const config = {
      type: 'bar',
      data: {
        datasets,
        labels,
      },
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    };

    this.chart = new Chart(
      this.canvas.nativeElement,
      <ChartConfiguration>config,
    )
  }

}
