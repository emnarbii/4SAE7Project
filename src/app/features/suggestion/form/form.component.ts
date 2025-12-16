import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SuggestionService } from '../../../core/services/suggestion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  suggForm!: FormGroup;
  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre',
  ];
  constructor(private dataService: SuggestionService, private route: Router) {
    this.suggForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[A-Z][a-zA-Z]*$'),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(30),
      ]),
      category: new FormControl('', [Validators.required]),
      date: new FormControl(new Date().toISOString().slice(0, 10)),
      status: new FormControl('en-attente'),
      nbLikes: new FormControl('0'),
    });
  }

  get title() {
    return this.suggForm.get('title');
  }
  submit() {
    this.dataService
      .addSuggestion(this.suggForm.value)
      .subscribe(() => this.route.navigate(['/suggestions']));
  }
}
