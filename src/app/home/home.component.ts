import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { DataService } from '../shared/data.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    
    projectName: string;
    userName: string;
    channelDetails: any;
    details: TwitchChannel = new TwitchChannel();

    constructor(private dataService: DataService) { }

    ngOnInit() { }

    getTwitchChannel() {
        this.channelDetails = this.dataService.getTwitchDetails(this.userName)
        .subscribe(details => {
            console.log(details);
            this.details = details;
        }, error => console.log(error));
    }
}

export class TwitchChannel {
    display_name: string;
    logo: string;
    status: string;
    game: string;
    partner: boolean;
    views: number;
    followers: number;
}