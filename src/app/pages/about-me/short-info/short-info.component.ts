import { Component, OnInit } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

const FAKE_API_RESPONCE = {
  developer: {
    firstname: 'Oleh',
    lastname: 'Syniak',
    bith: '1995-09-03T00:00:00.000Z',
    jobPosition: 'Front end developer',
  }
}

type ShortInfo = { name: string, bith: string, position: string };

@Component({
  selector: 'app-short-info',
  templateUrl: './short-info.component.html',
  styleUrls: ['./short-info.component.scss']
})
export class ShortInfoComponent implements OnInit {

  shortInfoData$: Observable<ShortInfo> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.shortInfoData$ = of(FAKE_API_RESPONCE).pipe(
      delay(700),
      map(r => this.mapQueryResult(r)),
    );
  }

  private loadData() {
  }

  private mapQueryResult(result: typeof FAKE_API_RESPONCE): ShortInfo {
    const { firstname, lastname, bith, jobPosition } = result.developer;

    return {
      name: `${firstname} ${lastname}`,
      bith,
      position: jobPosition,
    };
  }

}
