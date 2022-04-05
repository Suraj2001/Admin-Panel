import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { User } from 'src/app/Models/users.models';
import { UserListService } from 'src/app/services/user-list.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userExist?: Boolean;
  userDetails?: User;
  alert?: String;
  showToast = false;
  submitted = false;

  userAuth = new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
    ]),
    password: new FormControl(null, Validators.required),
  });
  constructor(
    private authService: AuthenticationService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.userAuth;
  }

  onSubmit() {
    if (
      this.userAuth.value.username != '' &&
      this.userAuth.value.password != ''
    ) {
      this.authService.generateToken(this.userAuth.value).subscribe(
        (data: any) => {
          this.authService.loginUser(data.token);
          this.userDetails = data.User;
          if (this.userDetails != null) {
            this.authService.setUserDetails(this.userDetails);
          }
          this.route.navigate(['/display']);
        },
        (error) => {
          this.showToast = true;
          this.alert = error.error.msg;
          console.error(error.error.msg);
        }
      );
    }
    this.showToast = false;
  }
}
