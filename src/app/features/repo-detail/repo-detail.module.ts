import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoDetailComponent } from './repo-detail.component';
import { RepoDetailRoutingModule } from './repo-detail-routing.module';

@NgModule({
  declarations: [RepoDetailComponent],
  imports: [CommonModule, RepoDetailRoutingModule],
})
export class RepoDetailModule {}
