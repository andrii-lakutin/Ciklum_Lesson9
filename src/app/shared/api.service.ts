import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable() 
export class ApiService {

  paging :number;
  pokemons: any;

  constructor(private http: Http) {
    this.pokemons = [];
  	this.paging = 12;
  }

  getPokemons(){
   	return this.http.get(`http://pokeapi.co/api/v1/pokemon/?limit=12`)
   		.toPromise()
   		.then(res => res.json())
  }

  loadMore(){
  	return this.http.get(`http://pokeapi.co/api/v1/pokemon/?limit=12&offset=${this.paging += 12}`)
   		.toPromise()
   		.then(res => res.json())
  }

}
