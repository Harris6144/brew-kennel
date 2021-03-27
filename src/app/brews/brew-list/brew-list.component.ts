import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Brew} from '../shared/brew.model';
import {BrewService} from '../shared/brew.service';

@Component({
    selector: 'app-brew-list',
    templateUrl: './brew-list.component.html'
})
export class BrewListComponent implements OnInit {
    page: number;
    pageCount: number;
    perPage: number;
    brews: Brew[];

    constructor(private activatedRoute: ActivatedRoute, private brewService: BrewService) {
        this.page = 1;
        this.pageCount = 13;
        this.perPage = 25;
        this.brews = [];
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            this.page = +params.get('page');
            this.brewService.getBrews(this.page, this.perPage).subscribe(data => this.brews = data);
        });
    }
}
