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
    details: any = [];

    constructor(private dataService: DataService) { }

    ngOnInit() { }

    getTwitchChannel() {
        this.channelDetails = this.dataService.getTwitchDetails(this.userName)
        .subscribe(details => {
            debugger;
            console.log(details);
            this.details = details;
        }, error => console.log(error));
    }
}