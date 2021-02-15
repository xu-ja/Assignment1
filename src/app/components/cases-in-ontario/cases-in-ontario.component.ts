import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/getdata.service';
import { OntarioData } from 'src/app/ontarioData';

@Component({
  selector: 'app-cases-in-ontario',
  templateUrl: './cases-in-ontario.component.html',
  styleUrls: ['./cases-in-ontario.component.scss'],
})
export class CasesInOntarioComponent implements OnInit {

  ontarioData: OntarioData;

  constructor(private ldData: GetdataService) { }

  loadMyData(): void {
    this.ontarioData = this.ldData.loadDataOntario();
  }

  ngOnInit() {
    this.loadMyData();
  }

}
