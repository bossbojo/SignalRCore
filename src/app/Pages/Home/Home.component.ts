import { baseUrl } from './../../Config/url.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  baseUrl = baseUrl;
  constructor() { }

  ngOnInit() {
  }

}
