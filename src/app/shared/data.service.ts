import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { URLSearchParams, Jsonp } from '@angular/http';
import { TwitchChannel } from '../home/home.component';

const twitchApiBase: string = 'https://api.twitch.tv/kraken';

@Injectable()
export class DataService {
    
    constructor(private _jsonp: Jsonp) { }
    
    getTwitchDetails(user: string): Observable<TwitchChannel> {
        let url = `${twitchApiBase}/channels/${user}?callback=JSONP_CALLBACK`;
        console.log(`Using URL: ${url}`);
        return this._jsonp.request(url, { method: 'GET' }).map((response) => response.json());
    }
}