import { HomeService } from '../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent implements OnInit {
  constructor(private service: HomeService) {}

  ngOnInit() {
    this.service.get();
  }
}
