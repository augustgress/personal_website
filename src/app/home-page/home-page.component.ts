import { Component, OnInit } from '@angular/core';
import { loginService } from '../login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public loginService: loginService) { }

  ngOnInit(): void {
    var CC = this.loginService.chocolateCake
  }

}
