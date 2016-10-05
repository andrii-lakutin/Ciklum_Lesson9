import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent implements OnInit {

  @Input() pokemons: any; 	

  constructor(private apiService: ApiService) { 
  }

  ngOnInit() {
  }

}
