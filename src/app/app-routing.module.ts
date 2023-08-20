import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes=[
   
   { path:'create',
      loadChildren:()=>import("./main/create-event/create-event.module").then((m)=>m.CreateEventModule),
   } 

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