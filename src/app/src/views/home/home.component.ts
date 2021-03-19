import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: string[];

  constructor() {
    this.images = [
      '../../../../assets/img/home/Anfarro.jpg',
      '../../../../assets/img/home/Anfarro-1.jpg',
      '../../../../assets/img/home/Anfarro-2.jpg'
    ]
   }

  ngOnInit(): void {
  }

}
