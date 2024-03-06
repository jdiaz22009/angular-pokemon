import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './presentation/screens/pokemon/list-pokemon/list-pokemon.component';

const routes: Routes = [
  {
    path: 'pokemon',
    children: [
      {
        path: 'list',
        component: ListPokemonComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
