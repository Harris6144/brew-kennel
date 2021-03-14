import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BrewsComponent} from './brews.component';

const routes: Routes = [
    {path: 'brews', component: BrewsComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrewsRoutingModule {

}
