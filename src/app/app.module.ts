import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FocusWithinModule } from "./focus-within/focus-within.module";
import { TestComponentComponent } from "./components/test-component/test-component.component";

@NgModule({
  imports: [BrowserModule, FormsModule, FocusWithinModule],
  declarations: [AppComponent, TestComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}