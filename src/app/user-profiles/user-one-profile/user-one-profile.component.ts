import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-one-profile',
  templateUrl: './user-one-profile.component.html',
  styleUrls: ['./user-one-profile.component.css']
})
export class UserOneProfileComponent implements OnInit {

  initValue: false;

  constructor() { }

  ngOnInit(): void {
    console.log("User Profile ")
  }

}
