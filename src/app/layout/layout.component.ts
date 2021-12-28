import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type MenuItem = { label: string, link: string };

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menuItems: MenuItem[] = [{ label: 'About me', link: '/about-me' }, { label: 'Contact', link: '/contact' }];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // navigate(link: string) {
  //   this.router.navigate([link]);
  //   console.log('there');
  // }

}
