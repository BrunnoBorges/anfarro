import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-among-us',
  templateUrl: './among-us.component.html',
  styleUrls: ['./among-us.component.scss']
})
export class AmongUsComponent implements OnInit {
  images: string[];


  constructor() {
    this.images = [
      '../../../../assets/img/among-us/mockup.jpg',
    ]
   }

  ngOnInit(): void {
  }

}
