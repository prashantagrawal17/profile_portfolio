import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { WorkPage } from './work.page';
import { WorkDetailPage } from './work-detail/work-detail.page';
import { WorkPageRoutingModule } from './work-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    WorkPageRoutingModule,
  ],
  declarations: [WorkPage, WorkDetailPage],
})
export class WorkPageModule {}
