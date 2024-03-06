import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModule } from './presentation/screens/pokemon/pokemon.module';
import { ComponentsModule } from './presentation/components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
     PokemonModule, 
     ComponentsModule,
     AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
