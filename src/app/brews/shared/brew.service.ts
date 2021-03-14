import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Brew} from './brew.model';

@Injectable({
    providedIn: 'root'
})
export class BrewService {
    rootEndpoint: string;

    constructor(private httpClient: HttpClient) {
        this.rootEndpoint = 'https://api.punkapi.com/v2/';
    }

    getBrews(): Observable<Brew[]> {
        return this.httpClient.get<Brew[]>(this.rootEndpoint + 'beers');
    }
}
