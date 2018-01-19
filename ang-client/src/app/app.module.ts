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
import { CustomselectComponent } from './heroselect/customselect/customselect.component';
import { HeroselectComponent } from './heroselect/heroselect.component';
import { BlockComponent } from './block/block.component';
import { HomeComponent } from './home/home.component';

// routes config
const APPROUTES: Routes = [
  { path: 'custom-select', component: HeroselectComponent },
  {path:'', component: HomeComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    CustomselectComponent,
    HeroselectComponent,
    BlockComponent,
    HomeComponent
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
