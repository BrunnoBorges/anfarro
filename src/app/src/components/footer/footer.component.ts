import { Component, OnInit } from '@angular/core';
import { faInstagram, faPinterest} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  faInstagram = faInstagram;
  faPinterest = faPinterest;
  faPaperPlane = faPaperPlane;


  constructor() { }

  ngOnInit(): void {
  }

}
