import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionRoutingModule } from './suggestion-routing.module';
import { SuggestionComponent } from './suggestion.component';
import { DetailSuggestionComponent } from './detail-suggestion/detail-suggestion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SuggestionComponent,
    ListSuggestionComponent,
    DetailSuggestionComponent,
    FormComponent,
  ],
  imports: [CommonModule, SuggestionRoutingModule, FormsModule, ReactiveFormsModule],
})
export class SuggestionModule {}
