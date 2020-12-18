import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  userConnect: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.userConnect = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.userConnect.value);
  }
  redirectToProfile(): void {
    this.router.navigate(['/profile']);

  }
}
