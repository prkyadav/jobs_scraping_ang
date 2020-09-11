import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ScrapeComponent } from '../scrape/scrape.component';
import { PostRequirementComponent } from '../post-requirement/post-requirement.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'scrape',component: ScrapeComponent
      },
      {
        path: 'post_requirement', component: PostRequirementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
