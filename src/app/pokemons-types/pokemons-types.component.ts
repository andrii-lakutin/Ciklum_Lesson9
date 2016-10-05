import { Component, OnInit, Input } from '@angular/core';
import { FilterService } from '../shared/filter.service';

@Component({
  selector: 'app-pokemons-types',
  templateUrl: './pokemons-types.component.html',
  styleUrls: ['./pokemons-types.component.scss'],
})
export class PokemonsTypesComponent implements OnInit {

  @Input()
  filters: any;
  currentFilter: string;

  constructor(private filterService: FilterService) {
  	this.currentFilter = 'All';
  }

  ngOnInit() {
  }

  selectFilter(event){
  	this.currentFilter = event.target.innerText;
  	this.filterService.setCurrentFilter(this.currentFilter);
  }

}
