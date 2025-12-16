import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SuggestionService } from '../../../core/services/suggestion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  suggForm!: FormGroup;
  id!: number;
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
  constructor(
    private dataService: SuggestionService,
    private route: Router,
    private act: ActivatedRoute
  ) {
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

  ngOnInit() {
    // step 1:get Id from URL if exist
    this.act.paramMap.subscribe((param) => (this.id = Number(param.get('id'))));
    //step2: get sugg by id
    // fill the form
    this.dataService
      .getById(this.id)
      .subscribe((item) => {
        console.log(item)
        this.suggForm.patchValue(item.suggestion)});
  }
  get title() {
    return this.suggForm.get('title');
  }
  submit() {
    if (!this.id) {
      this.dataService
        .addSuggestion(this.suggForm.value)
        .subscribe(() => this.route.navigate(['/suggestions']));
    }else{
      this.dataService
        .update(this.id,this.suggForm.value)
        .subscribe(() => this.route.navigate(['/suggestions']));
    }
  }
}
