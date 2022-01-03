import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage!: string;
  loginForm!: FormGroup;
  return: string = '';

  constructor( private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
        this.route.queryParams
            .subscribe(params => this.return = params['return'] || '/home');
  }

  onLogin(form: any) {
    if (form.invalid) {
      this.authService.authenticate(form.value.username, form.value.password)
        .subscribe({
          next: data => {
            const payload: any = data;
            localStorage.setItem("token", payload.access_token);
            this.router.navigateByUrl(this.return);
          },
          error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
          }
        });
    }
  }

  /** Functions */
  //Get instatiated formGroup
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
}
