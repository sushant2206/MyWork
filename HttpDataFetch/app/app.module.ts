import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubCompComponent } from './sub-comp/sub-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';



@NgModule({
  declarations: [
    AppComponent,
    SubCompComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
