import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AuthInterceptor } from 'interceptors/http-interceptor';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  users: UserModel[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  getUsersList(): void {
    this.userService.getAllUsers().subscribe(
      data => {
        console.log(data);
        data.forEach(element => {
          this.users.push(element);
        });
      }
    )
  }


}
