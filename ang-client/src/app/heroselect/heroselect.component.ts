import { Component, OnInit } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './heroselect.component.html',
  styleUrls: ['./heroselect.component.css']
})
export class HeroselectComponent implements OnInit {

  constructor() { }

 
  name = 'Custom Select Box';
  hideSelectors: boolean = true;
  itemsGroup: string[] = [];
  
  ngOnInit() {
  }

  changeVisibility(visible: boolean = false) {
    this.hideSelectors = visible
  }
  addNewItem(item) {
    this.itemsGroup.push(item);
    this.changeVisibility(true)
  }
}
