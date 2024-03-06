import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/types/pokemon.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  constructor() {}

  ngOnInit(): void {
    this.getPokemon();
  }

  async getPokemon() {
    try {
      for (let pokemon = 1; pokemon <= 201; pokemon++) {
        const fetc = await fetch(environment.url_api + pokemon);
        const json = await fetc.json();
        this.pokemonList.push(json);
      }
    } catch (error) {
      console.error(error);
    }
  }

  formatPokemonId(id: number): string {
    let pokeId = id.toString();
    if (pokeId.length === 1) {
      pokeId = '00' + pokeId;
    } else if (pokeId.length === 2) {
      pokeId = '0' + pokeId;
    }
    return pokeId;
  }
}
