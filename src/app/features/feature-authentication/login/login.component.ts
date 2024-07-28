import { CommonModule, NgClass, NgIf } from "@angular/common";
import { Component, Inject, Injector, OnInit, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { LoginForm } from "../interfaces/login-form.interface";
import { setLocalStoreService } from "../../../core/services/authentication/auth.service";
import { Router } from "@angular/router";
import { HttpAuthenticationService } from "../../services/http/authentication.service";
import { LoginResponseInterface } from "../../../core/interface/login.interface";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public isSubmitted: boolean = false;
  public inputPasswordType = "password";

  // private httpAuthService = this.injectService(HttpAuthenticationService);
  constructor(
    private httpAuthService: HttpAuthenticationService,
    private route: Router,
    public autheService: setLocalStoreService,
  ) {}
  ngOnInit(): void {
    if (this.autheService.isAuthenticated()) {
      this.route.navigate([""]);
    }
    this.createFormGroup();
  }

  public onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

      if(this.loginForm.get("username")!.value == "admin" && this.loginForm.get("password")?.value === "123"){
        this.route.navigate(["/"])
      }
/*     this.httpAuthService
      .loginUser(this.loginForm.value)
      .subscribe((res: LoginResponseInterface) => {
        this.autheService.setItemToLocalStore(res.data);
        this.route.navigate(["/"]);
      }); */
  }

  createFormGroup() {
    this.loginForm = new FormGroup<LoginForm>({
      username: new FormControl("", { nonNullable: true }),
      password: new FormControl("", { nonNullable: true }),
    });
  }
  get control() {
    return this.loginForm.controls;
  }

  visualizePassword() {
    if (this.inputPasswordType === "password") {
      this.inputPasswordType = "text";
      return;
    }

    this.inputPasswordType = "password";
  }
}
