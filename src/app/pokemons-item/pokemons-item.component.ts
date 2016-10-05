import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-pokemons-item',
  templateUrl: './pokemons-item.component.html',
  styleUrls: ['./pokemons-item.component.scss']
})
export class PokemonsItemComponent implements OnInit {

  @Input() pokemon: any;
  
  constructor(private apiService: ApiService) { 
  }

  ngOnInit() {
  }

}
