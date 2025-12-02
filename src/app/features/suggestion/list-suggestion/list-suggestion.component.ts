import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css',
})
export class ListSuggestionComponent {
  titre = 'liste des suggestions';
  srcImg =
    'data:image/png;base64,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';
  altImg = 'suggestion image';
  searchItem = '';
  favoriteList: Suggestion[] = [];
  filtredList: Suggestion[] = [];
    constructor(private act: ActivatedRoute) {}

  suggestionList: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description:
        "Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l'équipe.",
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 20,
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description:
        'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0,
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description:
        "Mise en place d'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.",
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0,
    },
    {
      id: 4,
      title: "Moderniser l'interface utilisateur",
      description:
        "Refonte complète de l'interface utilisateur pour une meilleure expérience utilisateur.",
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0,
    },
    {
      id: 5,
      title: 'Formation à la sécurité informatique',
      description:
        "Organisation d'une formation sur les bonnes pratiques de sécurité informatique pour tous les employés.",
      category: 'Formation',
      date: new Date('2025-02-05'),
      status: 'acceptee',
      nbLikes: 100,
    },
  ];


  ngOnInit() {
    console.log(this.act);
  }
  clickMe() {
    return alert('vous avez cliqué!!!!');
  }

  like(suggestion: Suggestion) {
    return suggestion.nbLikes++;
  }

  addToFavorite(s: Suggestion) {
    if (!this.favoriteList.includes(s)) {
      return this.favoriteList.push(s);
    }
    return null;
  }

  filter() {
    this.filtredList = this.suggestionList.filter(
      (sugg) =>
        sugg.title.toLowerCase().includes(this.searchItem.toLowerCase()) ||
        sugg.category.toLowerCase().includes(this.searchItem.toLowerCase())
    );
    return this.filtredList;
  }
}
