import { Component } from '@angular/core';
import {EventBusService} from "./_shared/event-bus.service";
import {AuthService} from "./_services/auth.service";
import {StorageService} from "./_services/storage.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  eventBusSub?: Subscription;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService
  ) {}

  ngOnInit(): void {
    this.eventBusSub = this.eventBusService.on('logout', () => {

      console.log('redirect to login')

      this.authService.logout().subscribe({
        next: data => {
          this.storageService.clean()
          //this.reloadPage()
        }
      });
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  isLoggedIn() {
    return this.storageService.isLoggedIn()
  }
}
