import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss'],
})
export class ResetPassComponent implements OnInit {
  private routeSub?: Subscription;
  mail?: String;
  alert?: String;
  showToast?: Boolean;
  type?: String;

  resetPassForm = new FormGroup({
    newPass: new FormControl(''),
    confirmPass: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetPassForm;
    this.routeSub = this.route.params.subscribe((params) => {
      this.mail = params['mail'];
    });
  }

  resetPass() {
    this.resetPassForm.addControl('mail', new FormControl(this.mail));
    this.authService.resetPassword(this.resetPassForm.value).subscribe(
      (data) => {
        this.router.navigate(['/authentication']);
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
