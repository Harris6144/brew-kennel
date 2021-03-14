import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {BrewsModule} from './brews/brews.module';

import {AppComponent} from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, CoreModule, BrewsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
