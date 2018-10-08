import { HubConnection } from '@aspnet/signalr';
import signalR = require('@aspnet/signalr');
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-Simple',
  templateUrl: './Simple.component.html',
  styleUrls: ['./Simple.component.scss']
})
export class SimpleComponent implements OnInit {
  ModelConnect: FormGroup;
  someObject: model_connect[] = [];
  private hubConnection: HubConnection;
  constructor(private build: FormBuilder) {
    this.ModelConnect = this.build.group({
      UserId: ['253', Validators.required],
      Channel: ['YourChanel', Validators.required]
    });
  }
  ngOnInit() {
  }
  OnConnect() {
    this.someObject = [];
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/notification')
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.hubConnection.start().then(() => {
      console.log('Connection started!');
      this.hubConnection
        .invoke('OnConnectHub', this.ModelConnect.value.UserId, this.ModelConnect.value.Channel)
        .catch(err => console.error(err));
    }).catch(err => console.log('Error while establishing connection :('));

    this.hubConnection.on('OnConnected', (Ojson: string) => {
      if (Ojson) {
        let data = JSON.parse(Ojson);
        if (this.isJson(data.Item)) {
          data.Item = JSON.parse(data.Item)
        }
        this.someObject.push(new model_connect(
          this.ModelConnect.value.UserId,
          this.ModelConnect.value.Channel,
          data
        ));
        console.log(this.someObject);
      }
    });
    this.hubConnection.on('ReceiveNotification', (Ojson: string) => {
      if (Ojson) {
        let data = JSON.parse(Ojson);
        if (this.isJson(data.Item)) {
          data.Item = JSON.parse(data.Item)
        }
        this.someObject.push(new model_connect(
          this.ModelConnect.value.UserId,
          this.ModelConnect.value.Channel,
          data
        ));
      }
    });
  }
  isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

}
class model_connect {
  constructor(UserId, Channel, Messages) {
    this.UserId = UserId;
    this.Channel = Channel;
    this.Messages = Messages;
  }
  UserId;
  Channel;
  Messages;
}