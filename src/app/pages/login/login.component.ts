import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    const formValue = this.form.value;
    const user = this.authService.login(formValue.username, formValue.password);

    if (user) {
      localStorage.setItem('userData', JSON.stringify(user));
      this.router.navigateByUrl('/');
    } else {
      alert('Incorrect username or password');
    }
  }
}
