import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FocusWithinModule } from "./focus-within/focus-within.module";
import { TestComponentComponent } from "./components/test-component/test-component.component";
import { Router, RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import { routes } from "./app.routes";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  imports: [BrowserAnimationsModule, BrowserModule, FormsModule, FocusWithinModule, RouterOutlet, RouterLink, RouterModule.forRoot(routes)],
  declarations: [AppComponent, TestComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}