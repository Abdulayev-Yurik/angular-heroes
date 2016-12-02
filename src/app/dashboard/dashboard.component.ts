import { Component, OnInit } from '@angular/core';

import {Hero} from "../hero-detail/hero";
import {HeroService} from "../hero-detail/hero.service";

@Component({
  selector: 'hero-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  moduleId: module.id.toString()
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
