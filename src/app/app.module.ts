import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LunchListComponent } from './lunch-list/lunch-list.component';
import { AddLunchComponent } from './add-lunch/add-lunch.component';
import {NgxsModule} from "@ngxs/store";
import {LunchState} from "./store/lunch-store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {LunchService} from "./services/lunch.service";
import {LunchSortPipe} from "./pipes/lunch-sort-pipe";

@NgModule({
  declarations: [
    AppComponent,
    LunchListComponent,
    AddLunchComponent,
    LunchSortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([]),
    NgxsModule.forFeature([ LunchState ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [
    LunchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
