import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownMenuOriginDirective } from './dropdown-menu-origin.directive';
import { DropdownMenuOptionsDirective } from './dropdown-menu-options.directive';
import { DropdownMenuComponent } from './dropdown-menu.component';
import { DropdownMenuItemsComponent } from './dropdown-menu-items.component';

@NgModule({
  declarations: [
    DropdownMenuDirective,
    DropdownMenuOriginDirective,
    DropdownMenuOptionsDirective,
    DropdownMenuItemsComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownMenuDirective,
    DropdownMenuOriginDirective,
    DropdownMenuOptionsDirective,
    DropdownMenuItemsComponent,
    DropdownMenuComponent
  ]
})
export class DropdownModule { }
