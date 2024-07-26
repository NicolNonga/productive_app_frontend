import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LayoutMainComponent } from "./features/featura-main/layout-main/layout-main.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [ LayoutMainComponent]
})
export class AppComponent {
  title = "frontend";

  
  getAllUser() {}
}
