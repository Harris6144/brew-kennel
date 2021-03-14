import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrewsRoutingModule} from './brews-routing.module';

import {BrewsComponent} from './brews.component';

@NgModule({
    declarations: [BrewsComponent],
    imports: [CommonModule, BrewsRoutingModule]
})
export class BrewsModule {

}
