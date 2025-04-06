import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results.component';
import { RepoDetailComponent } from '../repo-detail/repo-detail.component';

const routes: Routes = [
  { path: '', component: ResultsComponent },
  {
    path: 'repo/:username/:repoName',
    component: RepoDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsRoutingModule {}
