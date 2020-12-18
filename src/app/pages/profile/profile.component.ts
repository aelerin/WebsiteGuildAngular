import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  static navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
