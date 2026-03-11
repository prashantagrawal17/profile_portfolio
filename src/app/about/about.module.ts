import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AboutPage } from './about.page';
import { AboutPageRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule, AboutPageRoutingModule, SharedModule],
  declarations: [AboutPage],
})
export class AboutPageModule {}
