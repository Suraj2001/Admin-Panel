import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss'],
})
export class ForgotPassComponent implements OnInit {
  alert?: String;
  showToast = false;
  type?: String;
  showOtp = false;

  forgotPass = new FormGroup({
    mail: new FormControl(null, Validators.required),
  });
  otpForm = new FormGroup({
    otp: new FormControl(null, Validators.required),
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.forgotPass;
    this.otpForm;
  }

  onForgotPassSubmit() {
    this.authService.forgotPassword(this.forgotPass.value).subscribe(
      (data: any) => {
        this.showToast = true;
        this.type = 'bg-success text-light';
        this.alert = data.msg;
        this.forgotPass.disable();
        this.showOtp = true;
      },
      (error) => {
        this.showToast = true;
        this.type = 'bg-danger text-light';
        this.alert = error.error.msg;
      }
    );
    this.showToast = false;
  }

  otpSubmit() {
    this.authService.verifyOtp(this.otpForm.value).subscribe(
      (data: any) => {
        this.router.navigate([
          '/authentication/resetPass/',
          this.forgotPass.value.mail,
        ]);
      },
      (error) => {
        this.showToast = true;
        this.type = 'bg-danger text-light';
        this.alert = error.error.text;
      }
    );
    this.showToast = false;
  }
}
