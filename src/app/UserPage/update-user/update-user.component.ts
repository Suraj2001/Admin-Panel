import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Models/users.models';
import { UserListService } from 'src/app/services/user-list.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserListService,
    private router: Router
  ) {}
  userRoute?: Subscription;
  userId?: number;
  user?: User;
  userForm1 = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
  });

  ngOnInit(): void {
    this.userRoute = this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    this.userService.getUser(this.userId).subscribe((data) => {
      this.user = data;
      this.getUserDetails(this.user);
    });
  }

  getUserDetails(user: User) {
    this.userForm1 = new FormGroup({
      firstName: new FormControl(user.firstName),
      lastName: new FormControl(user.lastName),
      email: new FormControl(user.email),
      contact: new FormControl(user.contact),
    });
  }

  updateUser() {
    this.userService
      .updateUser(this.userForm1.value, this.user?.id)
      .subscribe((result) => {
        this.gotoUserList();
      });
  }

  gotoUserList() {
    this.router.navigate(['/display/users/userList']);
  }
}
