import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIService } from './../core/services/api.service';
import { LoaderService } from '../shared/services/loader.service';


@Component({
    selector: 'admin-component',
    templateUrl: 'admin.component.html'
  
})

export class AdminComponent implements OnInit {     
    constructor(private apiService: APIService,
        private loaderService: LoaderService) {

    }

    ngOnInit() {
        
    }
}
