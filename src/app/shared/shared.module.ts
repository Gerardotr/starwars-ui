import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FilterComponent } from './components/filter/filter.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';

@NgModule({
    declarations: [
        CardComponent,
        NavbarComponent,
        PaginationComponent,
        FilterComponent,
        LoadingComponent,
        DarkModeToggleComponent
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        CardComponent,
        NavbarComponent,
        PaginationComponent,
        FilterComponent,
        LoadingComponent,
        DarkModeToggleComponent
    ],
    providers: [],
})
export class SharedModule {}