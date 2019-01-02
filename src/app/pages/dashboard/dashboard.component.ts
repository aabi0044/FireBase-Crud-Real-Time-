import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[ApiService]
})
export class DashboardComponent implements OnInit {

  constructor(private api :ApiService) { }

  ngOnInit() {
  }

}
