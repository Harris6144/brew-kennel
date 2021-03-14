import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BrewService {
    rootEndpoint: string;

    constructor(private httpClient: HttpClient) {
        this.rootEndpoint = 'https://api.punkapi.com/v2/';
    }
}
