import { Component, Injector, OnInit } from '@angular/core';
import { AuthenticationModel } from '../../../core/model/user-authentication.model';
import { setLocalStoreService } from '../../../core/services/authentication/auth.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports : [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  implements OnInit{
  public currentuser!: AuthenticationModel
  private authService = this.injectorService.get(setLocalStoreService)
  constructor(private injectorService : Injector){}
  ngOnInit(): void {
    this.currentuser = this.authService.currentUser
    console.log(this.currentuser.user.username)
  }
  
}
