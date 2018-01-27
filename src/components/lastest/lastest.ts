import { Component } from '@angular/core';

@Component({
  selector: 'lastest',
  templateUrl: 'lastest.html'
})
export class LastestComponent {

  sections;
  items;

  constructor() {
    this.sections = ['Culture 1', 'Culture 2', 'Culture 3']
    this.items = [[0, 1, 2],[0, 1, 2],[0, 1, 2]]
  }

}
