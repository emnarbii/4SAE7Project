import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './core/accueil/accueil.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'suggestions', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'suggestions', component: ListSuggestionComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
