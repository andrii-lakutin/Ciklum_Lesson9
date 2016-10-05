import { Component } from '@angular/core';
import { ApiService } from './shared/api.service';
import { FilterService } from './shared/filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  
  filters: any;
  pokemons: any;
  filteredPokemons: any;

  constructor( private apiService: ApiService, private filterService: FilterService) {
  	this.pokemons = apiService.pokemons;
  	this.filters = filterService.filters;
  	this.filteredPokemons = [];
  }

  ngOnInit(){
  	this.initialLoad();
  	this.loadFilters();
  }

  initialLoad(){
  	this.apiService.getPokemons().then(data => {
  		data.objects.forEach((item) => {
  			this.apiService.pokemons.push({
				name  : item.name,
				imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/${item.pkdx_id}.png`,
				types : item.types,
  			});
  		});
  	});
  }

  loadFilters(){
  	this.filterService.loadFilters().then(data => {
  		data.objects.forEach((item) => {
  			this.filterService.filters.push(item.name);
  		});
  	});
  }

  loadMore(){
  	console.log(this.filteredPokemons);
  	this.apiService.loadMore().then(data => {
  		data.objects.forEach((item) => {
  			this.apiService.pokemons.push({
				name  : item.name,
				imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/${item.pkdx_id}.png`,
				types : item.types,
  			});
  		});
  	});
  }

  ngDoCheck(){
  	if (this.pokemons !== this.filteredPokemons) {
  		console.log('changes');
  		this.filteredPokemons = this.apiService.pokemons.filter((item) => {
      		let check = {name: 'no value'};
    		
      		if (item.types[1]) {
      		  check = item.types[1];
      		}
			
      		if(this.filterService.currentFilter === 'All' ||
      		  item.types[0].name.indexOf(this.filterService.currentFilter.toLowerCase()) !== -1 ||
      		  check.name.indexOf(this.filterService.currentFilter.toLowerCase()) !== -1){
      		  return true;
      		} else return false;
    	});
  	}
  }
}
