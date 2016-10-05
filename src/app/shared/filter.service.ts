import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from './api.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FilterService {
  
  currentFilter: string;
  filters: any;

  constructor(private http: Http, private apiService: ApiService) { 
    this.filters = ['All'];
  	this.currentFilter = 'All';
  }

  loadFilters(){
  	return this.http.get(`http://pokeapi.co/api/v1/type/?limit=999`)
   	.toPromise()
   	.then(res => res.json())
  }

  setCurrentFilter(newFilter){
  	this.currentFilter = newFilter;
  }

}
