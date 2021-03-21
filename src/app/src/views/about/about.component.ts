import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  images: string[];

  constructor() {
    this.images = [
      '../../../../assets/img/about/Imagem.png',
      '../../../../assets/img/home/Anfarro-1.jpg',
    ]
   }

  ngOnInit(): void {
  }

}
