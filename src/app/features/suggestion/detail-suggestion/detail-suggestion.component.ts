import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';
import { ActivatedRoute } from '@angular/router';
import { SuggestionService } from '../../../core/services/suggestion.service';

@Component({
  selector: 'app-detail-suggestion',
  templateUrl: './detail-suggestion.component.html',
  styleUrl: './detail-suggestion.component.css',
})
export class DetailSuggestionComponent {
  constructor(private act: ActivatedRoute,private suggService:SuggestionService) {}
  id!: number;
  suggDetail!: Suggestion;

  ngOnInit() {
    console.log(this.act);
    this.id = Number(this.act.snapshot.paramMap.get('id'));
    this.suggDetail = this.suggService.getSuggestionList().filter(
      (sugg) => sugg.id == this.id
    )[0];
  }
  // getSuggById() {
  //   this.suggDetail = this.suggestionList.filter(
  //     (sugg) => sugg.id == this.id
  //   )[0];
  //   console.log(this.suggDetail);
  //   return this.suggDetail;
  // }
}
