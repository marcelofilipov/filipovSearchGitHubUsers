import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  username = '';
  errorMessage = '';

  constructor(private router: Router) {}

  search() {
    this.errorMessage = '';
    const trimmed = this.username.trim();

    if (!trimmed) {
      this.errorMessage = 'Digite um nome de usuário válido.';
      return;
    }

    this.router.navigate(['/results', trimmed]);
  }
}
