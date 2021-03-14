import {Component, OnInit} from '@angular/core';

import {Brew} from '../shared/brew.model';
import {BrewService} from '../shared/brew.service';

@Component({
    selector: 'app-brew-list',
    templateUrl: './brew-list.component.html'
})
export class BrewListComponent implements OnInit {
    brews: Brew[];

    constructor(private brewService: BrewService) {
        this.brews = [];
    }

    ngOnInit(): void {
        this.brewService.getBrews().subscribe(data => this.brews = data);
    }
}
