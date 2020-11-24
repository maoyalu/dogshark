import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module'

import { HomeComponent } from './components/home/home.component';
import { UIComponent } from './components/ui/ui.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ControlComponent } from './components/control/control.component';
import { AboutComponent } from './components/about/about.component';
import { LinksComponent } from './components/links/links.component';
import { LiveRoomComponent } from './components/live-room/live-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UIComponent,
    ToDoListComponent,
    ControlComponent,
    AboutComponent,
    LinksComponent,
    LiveRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
