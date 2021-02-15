import { Injectable } from '@angular/core';
import { CanadaData } from '../app/canadaData';
import { CANADADATAFEB14 } from '../assets/data/canadaData';
import { OntarioData } from '../app/ontarioData';
import { ONTARIODATAFEB14 } from '../assets/data/ontarioData';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor() { }

  loadDataCanada(): CanadaData {
    return CANADADATAFEB14;
  }

  loadDataOntario() : OntarioData {
    return ONTARIODATAFEB14;
  }
}
