import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  return: string = '';

  constructor( private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
        this.route.queryParams
            .subscribe(params => this.return = params['return'] || '/home');
  }

  onLogin() {
    if (this.username && this.password) {
      this.authService.authenticate(this.username, this.password);
      this.router.navigateByUrl(this.return);
    }
  }
}
