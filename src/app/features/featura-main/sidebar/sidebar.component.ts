import { Component, Injector, OnInit } from '@angular/core';
import { AuthenticationModel } from '../../../core/model/user-authentication.model';
import { setLocalStoreService } from '../../../core/services/authentication/auth.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports : [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  implements OnInit{
  public currentuser!: AuthenticationModel
  private authService = this.injectorService.get(setLocalStoreService)
  menuOpen: { [key: string]: boolean } = {};
  constructor(private injectorService : Injector){}

  ngOnInit(): void {

     this.currentuser = this.authService.currentUser
    /* this.currentuser = this.authService.currentUser
    console.log(this.currentuser.user.username)
  } */
  }

  toggleMenu(key: string): void {
    this.menuOpen[key] = !this.menuOpen[key];
  }
}
