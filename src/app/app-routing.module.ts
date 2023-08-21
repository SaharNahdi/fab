import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateEventComponent } from "./main/create-event/create-event.component";
import { ShoweventComponent } from "./main/showevent/showevent.component";

const appRoutes: Routes=[
   
 
  { path: 'create', component: CreateEventComponent },
  {path:'show', component: ShoweventComponent},
   

]

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, {
        scrollPositionRestoration: "enabled", // Add options right here
        relativeLinkResolution: "legacy",
      }),
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }