import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventComponent } from './create-event.component';
import { Route, Routes } from '@angular/router';

const routes: Routes=[{path: "create", component:CreateEventComponent}];

@NgModule({
  declarations: [

    CreateEventComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CreateEventModule { }
