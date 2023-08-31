import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../_services/storage.service";
import {AuthService} from "../../_services/auth.service";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService, private notification: NzNotificationService) {
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  loginSuccessNotification(): void {
    this.notification.create(
      "success",
      'Logowanie',
      'Pomyślnie zalogowano'
    );
  }

  loginFailedNotification(): void {
    this.notification.create(
      "error",
      'Logowanie',
      'Nie udało się zalogować'
    );
  }

  logoutNotification(): void {
    this.notification.create(
      "success",
      'Logowanie',
      'Pomyślnie wylogowano'
    );
  }

  onSubmit(): void {
    const {username, password} = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;

        this.loginSuccessNotification()
      },
      error: err => {
        this.errorMessage = err.error.message;

        this.loginFailedNotification()

        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  signout() {
    this.authService.logout().subscribe({
      next: data => {
        this.storageService.clean()
        this.isLoggedIn = false;
        this.logoutNotification()
      }
    });

  }
}
