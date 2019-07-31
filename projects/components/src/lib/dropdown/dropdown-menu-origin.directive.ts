import { Directive, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[owDropdownMenuOrigin]'
})
export class DropdownMenuOriginDirective {
  public click = fromEvent<any>(this.element, 'click');

  public get element() {
    return this.host.nativeElement;
  }
  public constructor(public host: ElementRef) {}
}
