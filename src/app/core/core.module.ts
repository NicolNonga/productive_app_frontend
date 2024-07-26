import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//import { AuthenticationService } from './services/authentication/auth.service';
//import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SharedModule } from "../share/shared.module";

@NgModule({
  declarations: [
    //MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [HttpClientModule, FormsModule, SharedModule, ReactiveFormsModule],
  providers: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error(
        "you should import core module only in thye root  module",
      );
    }
  }
}
