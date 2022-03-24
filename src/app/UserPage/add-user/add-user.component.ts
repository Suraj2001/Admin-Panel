import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/users.models';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { UserListService } from '../../services/user-list.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  user?: User;
  constructor(private router: Router, private userService: UserListService) {
    this.user = new User();
  }

  userForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
  });
  ngOnInit(): void {
    this.userForm;
  }
  addUser() {
    this.userService.save(this.userForm.value).subscribe((result) => {
      this.gotoUserList();
    });
    this.userForm.reset();
  }
  gotoUserList() {
    this.router.navigate(['/users/userList']);
  }
}
