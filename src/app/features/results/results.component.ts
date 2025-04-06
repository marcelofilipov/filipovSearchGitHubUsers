import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from 'src/app/core/services/github-api.service';
import { User } from '@models/user.model';
import { Repo } from '@models/repo.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  username = '';
  user: User | null = null;
  repos: Repo[] = [];
  loading = true;
  error = '';

  sortField: 'name' | 'stars' = 'stars';
  sortDirection: 'asc' | 'desc' = 'desc';

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubApiService
  ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || '';
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    this.error = '';
    this.user = null;
    this.repos = [];

    this.githubService.getUser(this.username).subscribe({
      next: (data) => (this.user = data),
      error: () => {
        this.error = 'Usuário não encontrado.';
        this.loading = false;
      },
    });

    this.githubService.getRepos(this.username).subscribe({
      next: (data) => {
        this.repos = data;
        this.sortRepos();
        this.loading = false;
      },
      error: () => {
        this.error = 'Erro ao carregar repositórios.';
        this.loading = false;
      },
    });
  }

  sortRepos(): void {
    this.repos.sort((a, b) => {
      let fieldA =
        this.sortField === 'name' ? a.name.toLowerCase() : a.stargazers_count;
      let fieldB =
        this.sortField === 'name' ? b.name.toLowerCase() : b.stargazers_count;

      if (fieldA < fieldB) return this.sortDirection === 'asc' ? -1 : 1;
      if (fieldA > fieldB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
}
