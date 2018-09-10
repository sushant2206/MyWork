import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 
import { AppComponent } from './app.component';

import { MatFormFieldModule,MatButtonModule, MatIcon, MatIconModule } from '@angular/material';     //New 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,MatIconModule,
        MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
