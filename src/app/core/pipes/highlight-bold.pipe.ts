import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Converts **phrase** in text to <strong>phrase</strong> and escapes HTML for safe use with innerHTML.
 * Use in template: [innerHTML]="text | highlightBold"
 */
@Pipe({ name: 'highlightBold', standalone: false })
export class HighlightBoldPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(text: string | null | undefined): SafeHtml {
    if (text == null || text === '') {
      return this.sanitizer.bypassSecurityTrustHtml('');
    }
    let out = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\n/g, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(out);
  }
}
