import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sideNav;
  title = 'Hosam';

  clicked() {
    console.log('dfgdfgdgf')
  }

  toggleSidebar() {
    this.sideNav.opened = !this.sideNav.opened
  }
}
