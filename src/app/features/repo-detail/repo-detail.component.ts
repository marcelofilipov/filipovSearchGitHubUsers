import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from 'src/app/core/services/github-api.service';
import { Repo } from 'src/app/core/models/repo.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss'],
})
export class RepoDetailComponent implements OnInit {
  username = '';
  repoName = '';
  repo: Repo | null = null;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubApiService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || '';
    this.repoName = this.route.snapshot.paramMap.get('repoName') || '';
    this.fetchRepo();
  }

  fetchRepo() {
    this.loading = true;
    this.githubService.getRepoDetail(this.username, this.repoName).subscribe({
      next: (data) => {
        this.repo = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Repositório não encontrado.';
        this.loading = false;
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
}
