import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubCompComponent } from './sub-comp/sub-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { SubComp2Component } from './sub-comp2/sub-comp2.component';
import { SubComp3Component } from './sub-comp3/sub-comp3.component';



@NgModule({
  declarations: [
    AppComponent,
    SubCompComponent,
    SubComp2Component,
    SubComp3Component,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
