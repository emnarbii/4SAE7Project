import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  suggForm!: FormGroup;
  constructor() {
    this.suggForm = new FormGroup({
      title: new FormControl('', []),
      description: new FormControl(''),
      category: new FormControl(''),
      date: new FormControl(new Date()),
      status: new FormControl('en-attente'),
      nbLikes: new FormControl('0'),
    });
  }

  afficher() {
    return console.log(this.suggForm.value);
  }
}
