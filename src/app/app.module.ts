import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Material modules
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule, MatCardModule } from "@angular/material";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [AppComponent, AboutUsComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
