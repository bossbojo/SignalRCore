import { NotificationHubComponent } from './notification-hub/notification-hub.component';
import { HomeRoutes } from './Home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes
  ],
  declarations: [HomeComponent, NotificationHubComponent]
})
export class HomeModule { }
