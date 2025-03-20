import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';
import { CharactersComponent } from './characters/characters.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FilmsComponent, CharactersComponent],
  imports: [CommonModule, SharedModule],
  exports: [],
  providers: [],
})
export class FeatureModule {}
