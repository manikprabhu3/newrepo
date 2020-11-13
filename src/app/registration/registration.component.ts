import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _router: Router, private shared: SharedService) { }

  onClick(value1, value2) {
    this.shared.setMessage(value1, value2);
    this._router.navigate(['/submit']);
  }

  ngOnInit(): void {
  }

}
