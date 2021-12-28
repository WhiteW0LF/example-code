import { Component, OnInit } from '@angular/core';

const FAKE_API_RESPONCE = {
  firstname: 'Oleh',
  lastname: 'Syniak',
  bith: '1995-09-03T00:00:00.000Z',
  jobPosition: 'Front end developer',

}

@Component({
  selector: 'app-short-info',
  templateUrl: './short-info.component.html',
  styleUrls: ['./short-info.component.scss']
})
export class ShortInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
