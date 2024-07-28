import { Component } from '@angular/core';
import { setLocalStoreService } from '../../../core/services/authentication/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(private authService: setLocalStoreService, private router : Router){

}

public logOut(){
    this.authService.logout()
    this.router.navigate(["login"])
}

}
