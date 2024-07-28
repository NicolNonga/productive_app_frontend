import { CommonModule } from '@angular/common';
import {
  Component,
  EnvironmentInjector,
  Signal,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { UsersHttpService } from '../../services/hptt/users-http.service';
import { ResponseUsers } from '../../model/user.model';
import { CreateOrEditUsersComponent } from '../create-or-edit-users/create-or-edit-users.component';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule, CreateOrEditUsersComponent],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css',
})
export class ListUsersComponent {
  public users: Signal<ResponseUsers>;
  private userHttpService = inject(UsersHttpService);
  private environmentInjector = inject(EnvironmentInjector);
  constructor() {
    this.users = this.userHttpService.toSignalUsers();
  }

  public realoadUser() {

    runInInjectionContext(this.environmentInjector, () => {
      this.users = this.userHttpService.toSignalUsers();
    });
  }
} 
