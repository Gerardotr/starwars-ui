import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './features/films/films.component';
import { CharactersComponent } from './features/characters/characters.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'films', component: FilmsComponent },
    { path: 'characters', component: CharactersComponent },
    { path: '**', redirectTo: '' } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}