import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BrewsComponent} from './brews.component';
import {BrewListComponent} from './brew-list/brew-list.component';

const routes: Routes = [
    {path: 'brews', component: BrewsComponent, children: [
        {path: '', redirectTo: 'list/1', pathMatch: 'full'},
        {path: 'list/:page', component: BrewListComponent}
    ]}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrewsRoutingModule {

}
