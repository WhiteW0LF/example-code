import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent implements OnInit {

  tabs: {link: string, label: string}[] = [{label: 'Short info', link: '/short-info'}, {label: 'Skills', link: 'skills'}];

  activeLink: string = '/short-info'

  constructor() { }

  ngOnInit(): void {
  }

}
