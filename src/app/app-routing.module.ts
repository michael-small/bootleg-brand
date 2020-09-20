import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AboutUsComponent } from "../app/components/about-us/about-us.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "aboutUs", component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
