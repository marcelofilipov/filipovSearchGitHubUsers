import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Repo } from '../models/repo.model';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  private readonly API_BASE = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.API_BASE}/users/${username}`);
  }

  getRepos(username: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(
      `${this.API_BASE}/users/${username}/repos?per_page=100&sort=stars`
    );
  }

  getRepoDetail(username: string, repoName: string): Observable<Repo> {
    return this.http.get<Repo>(
      `${this.API_BASE}/repos/${username}/${repoName}`
    );
  }
}
