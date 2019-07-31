// tslint:disable-next-line: max-line-length
import {
  Component,
  OnDestroy,
  AfterContentInit,
  ViewEncapsulation,
  TemplateRef,
  ViewChild,
  ContentChild,
  Input,
  HostListener,
  ElementRef,
  Renderer2 } from '@angular/core';

import Popper, { Placement } from 'popper.js';
import { Subscription } from 'rxjs';

import { DropdownMenuOptionsDirective } from './dropdown-menu-options.directive';
import { DropdownMenuOriginDirective } from './dropdown-menu-origin.directive';
import { DropdownMenuDirective } from './dropdown-menu.directive';

@Component({
  selector: 'ow-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'dropdown' }
})
export class DropdownMenuComponent implements AfterContentInit, OnDestroy {
  @ContentChild(DropdownMenuOptionsDirective, { static: false }) public optionsDirective: DropdownMenuOptionsDirective;
  @ContentChild(DropdownMenuOriginDirective, { static: false }) public origin: DropdownMenuOriginDirective;
  @ContentChild(DropdownMenuDirective, { static: false }) public dropdown: DropdownMenuDirective;
  @Input() public placement: Placement = 'bottom-start';
  @ViewChild('emptyTemplate', { static: false }) public emptyTemplate: any;
  @HostListener('document:click', ['$event.target'])
  public click(target) {
    if (!(this.host.nativeElement as HTMLElement).contains(target)) {
      this.close();
    }
  }

  public get actionTemplate(): TemplateRef<any> {
    return (this.optionsDirective && this.optionsDirective.template) || this.emptyTemplate;
  }

  private _popper: Popper;
  private _originSub: Subscription;
  private _open = false;

  public constructor(private host: ElementRef, private renderer: Renderer2) {}

  public open() {
    this.renderer.appendChild(this.host.nativeElement, this.dropdown.element);
    this._popper = new Popper(this.origin.element, this.dropdown.element, this._getOptions());
  }
  public close() {
    this._open = false;
    // tslint:disable-next-line: no-unused-expression
    this._popper && this._popper.destroy();
    this._toggleDropdown(false);
  }

  public ngAfterContentInit(): void {
    const click$ = this.origin.click;
    this._originSub = click$.subscribe(() => {
      this._open = !this._open;
      if (this._open) {
        this.open();
      } else {
        this.close();
      }
    });
  }
  public ngOnDestroy(): void {
    // tslint:disable-next-line: no-unused-expression
    this._originSub && this._originSub.unsubscribe();
    this.close();
  }

  private _getOptions() {
    return {
      placement: this.placement,
      modifiers: {
        applyStyle: {
          onLoad: () => {
            this._toggleDropdown();
          },
          gpuAcceleration: false
        }
      }
    };
  }

  private _toggleDropdown(show = true) {
    const display = show ? 'block' : 'none';
    this.renderer.setStyle(this.dropdown.element, 'display', display);
  }
}
