import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';


import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }

  getHeroes(): Promise<Hero[]> {
    heroesUrl = 'api/heroes';  // URL to web api

    return this.http.get('api/heroes')
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
