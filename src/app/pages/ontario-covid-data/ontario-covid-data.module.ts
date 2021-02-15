import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OntarioCovidDataPageRoutingModule } from './ontario-covid-data-routing.module';

import { OntarioCovidDataPage } from './ontario-covid-data.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OntarioCovidDataPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OntarioCovidDataPage]
})
export class OntarioCovidDataPageModule {}
