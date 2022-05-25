import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GroupChat } from './group.service';
import { Users } from './user.component';
import { CreateGroup } from './creategrp.service';

@NgModule({
  declarations: [
    AppComponent,Users
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [GroupChat,CreateGroup],
  bootstrap: [AppComponent]
})
export class AppModule { }
