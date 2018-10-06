import { Component } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private hubConnection: HubConnection;
  UserId = 'XX012';
  Chanel = 'YourChanel';
  constructor() {
  }
  ngOnInit() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/notification')
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.hubConnection.start().then(() => {

      console.log('Connection started!');

      this.hubConnection
        .invoke('OnConnectHub', this.UserId, this.Chanel)
        .catch(err => console.error(err));

    }).catch(err => console.log('Error while establishing connection :('));

    this.hubConnection.on('OnConnected', (Ojson: string) => {
      if (Ojson) {
        console.log(JSON.parse(Ojson));
      }
    });
    this.hubConnection.on('ReceiveNotification', (Ojson: string) => {
      if (Ojson) {
        console.log(JSON.parse(Ojson));
      }
    });

  }
}
