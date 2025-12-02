import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionComponent } from './suggestion.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { DetailSuggestionComponent } from './detail-suggestion/detail-suggestion.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: SuggestionComponent,
    children: [
      { path: '', component: ListSuggestionComponent },
      { path: 'add', component: FormComponent },
      { path: ':id', component: DetailSuggestionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestionRoutingModule {}
