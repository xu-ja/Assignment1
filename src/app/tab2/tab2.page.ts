import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  dates: any;
  message: any;

  constructor(private router: Router, private sharedService: DatashareService) {}

  ngOnInit() {
    fetch('../assets/data/vaccine_doses.json').then(day => day.json()).then(json => {
      console.log('date: ', json);
      this.dates = json;
    });
    this.sharedService.sharedMessage.subscribe(message => this.message = message);
  }

  public sendData(item) {
    this.router.navigate(['ontario-covid-data'], {queryParams: item});
  }

}
