import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkPage } from './work.page';
import { WorkDetailPage } from './work-detail/work-detail.page';

const routes: Routes = [
  { path: '', component: WorkPage },
  { path: ':slug', component: WorkDetailPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkPageRoutingModule {}
