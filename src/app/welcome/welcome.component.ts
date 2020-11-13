import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message1: string;
  message2: string;

  constructor(private shared: SharedService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message1 = this.shared.getMessage1();
    this.message2 = this.shared.getMessage2();
  }

  showBarChart() {
    this._router.navigate(['barchart'], {relativeTo: this.route});
  }

  showPieChart() {
    this._router.navigate(['piechart'], {relativeTo: this.route});
  }

  showRadarChart() {
    this._router.navigate(['radarchart'], {relativeTo: this.route});
  }

}
