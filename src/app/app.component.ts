import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ow-component';

  menus = [
    { label: 'Apple', value: 'Vitamin B1' },
    { label: 'Blackberries', value: 'Vitamin B2' },
    { label: 'Cherries', value: 'Vitamin B6' },
    { label: 'Grapes', value: 'Vitamin A' }
  ];


  select(evt) {
    console.log('Selected: ', evt);
  }
}
