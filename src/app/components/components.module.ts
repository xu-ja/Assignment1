import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesInOntarioComponent } from './cases-in-ontario/cases-in-ontario.component';
import { KeyCovidUpdatesComponent } from './key-covid-updates/key-covid-updates.component';

@NgModule({
  declarations: [CasesInOntarioComponent, KeyCovidUpdatesComponent],
  imports: [
    CommonModule
  ],
  exports: [CasesInOntarioComponent, KeyCovidUpdatesComponent]
})
export class ComponentsModule { }
