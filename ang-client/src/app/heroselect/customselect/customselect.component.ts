import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'custom-select',
  templateUrl: './customselect.component.html',
  styleUrls: ['./customselect.component.css']
})
export class CustomselectComponent implements OnInit {

  @Output() onItemAdded = new EventEmitter();
  items: string[] = ['HTML', 'CSS', 'Javascript', 'angular', 'Nodejs'];


  ngOnInit() {

  }

  addItemGroup() {
    let promp = prompt('what is the name of your new item?');
    if (promp && promp.trim()) {
      this.onItemAdded.emit(promp);
      this.items.push(promp)
    }

  }

  selectItem() {
    // awesome code goes here
  }

  search() {
    // fast search code goes here
  }

}
