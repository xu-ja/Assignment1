import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/getdata.service';
import { CanadaData } from 'src/app/canadaData';

@Component({
  selector: 'app-key-covid-updates',
  templateUrl: './key-covid-updates.component.html',
  styleUrls: ['./key-covid-updates.component.scss'],
})
export class KeyCovidUpdatesComponent implements OnInit {

  canadaData: CanadaData;

  constructor(private ldData: GetdataService) { }

  loadMyData() : void {
    this.canadaData = this.ldData.loadDataCanada();
  }

  ngOnInit() {
    this.loadMyData();
  }

}
