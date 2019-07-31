import { ContentChild, Directive, TemplateRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'ow-dropdown-menu-options'
})
export class DropdownMenuOptionsDirective {
  @ContentChild(TemplateRef, { static: false })
  public template!: TemplateRef<any>;
}
