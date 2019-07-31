import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[owDropdownMenu]'
})
export class DropdownMenuDirective {
  @HostBinding('style.display') public display = 'none';
  public get element() {
    return this.host.nativeElement;
  }
  public constructor(public host: ElementRef) {}
}
