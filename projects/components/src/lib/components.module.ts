import { NgModule } from '@angular/core';
import { DropdownModule } from './dropdown/dropdown.module';



@NgModule({
  imports: [DropdownModule],
  exports: [DropdownModule]
})
export class ComponentsModule { }
