import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent implements OnInit {

  tabs: {link: string, label: string}[] = [{label: 'Short info', link: 'short-info'}, {label: 'Skills', link: 'skills'}];

  activeLink: string = '/short-info';

  constructor(private router: Router) { }

  ngOnInit(): void {
    const currentLink = this.router.url.split('/').pop();
    if (currentLink) {
      this.activeLink = currentLink;
    }
  }
}
