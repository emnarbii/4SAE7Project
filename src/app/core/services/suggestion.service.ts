import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Suggestion } from '../../models/suggestion';

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  //inject httpClient service into the constructor
  constructor(private http: HttpClient) {}
  // declare the URL endpoint
  private suggestionURL = 'http://localhost:3000/suggestions';

  //get suggestion List
  getSuggestionList(): Observable<Suggestion[]> {
    return this.http.get<Suggestion[]>(this.suggestionURL);
  }

  // add suggestion
  addSuggestion(newSugg:Suggestion):Observable<Suggestion>{
    return this.http.post<Suggestion>(this.suggestionURL,newSugg);
  }
//get suggestion by id
getById(id:number){
    return this.http.get<{success:boolean, suggestion:Suggestion}>(this.suggestionURL+'/'+id)
  }
  // update suggestion
  update(id:number, sugg:Suggestion){
    return this.http.put<Suggestion>(this.suggestionURL+'/'+id,sugg)
  }
}
