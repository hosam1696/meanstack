import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';


// Material Components
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

// App Component
import { AppComponent } from './app.component';
import { CustomselectComponent } from './customselect/customselect.component';

// routes config
const APPROUTES: Routes = [
  { path: 'custom-select', component: CustomselectComponent },
  
]

@NgModule({
  declarations: [
    AppComponent,
    CustomselectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APPROUTES, {enableTracing:true}),
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
