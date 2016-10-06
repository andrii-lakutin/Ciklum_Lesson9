import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})

export class AdditionalInfoComponent implements OnInit {
  
  pokemon :any;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  	this.pokemon = {
  		attack   : '',
  		defense  : '',
  		exp      : '',
  		happiness: '',
  		hp       : '',
  		weight   : '',
      types    : '',
  		imgUrl   : '',
  		isExist  : false
  	};
  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {

        let id = params['id'];

        if(id !== 'unknownPokemon') {
          this.apiService.getExactPokemon(id)
           .then(data => {
           	  data === undefined ? console.log('There is no pokemon') :
              console.log(data);
           	  this.pokemon.attack    = data.attack,
           	  this.pokemon.defense   = data.defense,
           	  this.pokemon.exp       = data.exp,
           	  this.pokemon.happiness = data.happiness,
           	  this.pokemon.hp        = data.hp,
           	  this.pokemon.weight    = data.weight,
              this.pokemon.types     = data.types,
           	  this.pokemon.isExist   = true,
           	  this.pokemon.imgUrl    = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/${data.pkdx_id}.png`
           })
        } 

	});
  }

}
