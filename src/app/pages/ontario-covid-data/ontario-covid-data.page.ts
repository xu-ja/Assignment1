import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatashareService } from 'src/app/datashare.service';

@Component({
  selector: 'app-ontario-covid-data',
  templateUrl: './ontario-covid-data.page.html',
  styleUrls: ['./ontario-covid-data.page.scss'],
})
export class OntarioCovidDataPage implements OnInit {

  vaccineData: any;
  message: any;

  constructor(private activatedRoute: ActivatedRoute, private sharedService: DatashareService) { 
    this.activatedRoute.queryParams.subscribe((res) => {
    console.log(res),
    this.vaccineData = res});
  }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.sharedService.setMessage(this.message);
  }

}
