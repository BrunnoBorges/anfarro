import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ContactModule } from './contact.module';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, [Validators.maxLength(15), Validators.minLength(8)]],
      assunto: [null, [Validators.required, Validators.maxLength(50)]],
      mensagem: [null, Validators.required]
    });

    // this.headerService.checkNews(false);
    document.body.scrollTop = document.documentElement.scrollTop = 0;

  }

  get errorContact() {
    return this.contactForm.controls;
  }

  onSubmit() {
    console.log('xxx', this.contactForm.value);
  }
  
  onReset() {
    this.submitted = false;
    this.contactForm.reset();
  }


}
