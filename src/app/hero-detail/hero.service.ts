import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import {Hero} from './hero';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http: Http) {}

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  getHeroes(): Promise<Hero[]> {
    // heroesUrl = 'api/heroes';  // URL to web api
    return this.http.get('api/heroes')
      .toPromise()
      .then(response => response.json() as Hero[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
