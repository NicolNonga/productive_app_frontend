import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [FormsModule, ReactiveFormsModule, ToastrModule.forRoot(), BrowserModule, CommonModule],
  exports : [
       FormsModule,
       ReactiveFormsModule,
       ToastrModule,
       HttpClientModule,
       BrowserModule
  ]
})
export class SharedModule {}
