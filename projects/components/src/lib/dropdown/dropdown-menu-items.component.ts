import { Component, OnChanges, ViewEncapsulation, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ow-dropdown-menu-items',
  template: `
    <a class="dropdown-item" *ngFor="let item of items" (click)="clickedItem(item)">
      {{ item.label }}
    </a>
  `,
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'dropdown-menu' }
})
export class DropdownMenuItemsComponent  implements OnChanges {
  @Input() public items: any[];
  @Output() public selected = new EventEmitter<any>();

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      console.log('Opts: ', this.items);
    }
  }

  public clickedItem(item: any) {
    this.selected.emit(item);
  }
}
