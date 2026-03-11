import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightBoldPipe } from '../core/pipes/highlight-bold.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [HighlightBoldPipe],
  exports: [HighlightBoldPipe],
})
export class SharedModule {}
