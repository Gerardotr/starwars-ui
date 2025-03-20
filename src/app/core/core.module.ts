import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsService } from './services/star-wars.service';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [StarWarsService],
})
export class CoreModule {}