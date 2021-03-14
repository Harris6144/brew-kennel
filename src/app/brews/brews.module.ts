import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrewsRoutingModule} from './brews-routing.module';

import {BrewsComponent} from './brews.component';
import {BrewListComponent} from './brew-list/brew-list.component';

@NgModule({
    declarations: [BrewsComponent, BrewListComponent],
    imports: [CommonModule, BrewsRoutingModule]
})
export class BrewsModule {

}
