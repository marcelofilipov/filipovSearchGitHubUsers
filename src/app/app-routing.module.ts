import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './features/search/search.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  {
    path: 'results/:username',
    loadChildren: () =>
      import('./features/results/results.module').then((m) => m.ResultsModule),
  },
  {
    path: 'repo/:username/:repoName',
    loadChildren: () =>
      import('./features/repo-detail/repo-detail.module').then(
        (m) => m.RepoDetailModule
      ),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
