import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonsItemComponent } from './pokemons-item/pokemons-item.component';
import { PokemonsTypesComponent } from './pokemons-types/pokemons-types.component';

import { ApiService } from './shared/api.service';
import { FilterService } from './shared/filter.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    PokemonsItemComponent,
    PokemonsTypesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService,FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
