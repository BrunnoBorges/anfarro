import { Component, OnInit, HostListener } from '@angular/core';
import { faWhatsapp, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  
  faPinterest = faPinterest;
  faInstagram = faInstagram;

  constructor() {

   }

  ngOnInit(): void {
  }
}
