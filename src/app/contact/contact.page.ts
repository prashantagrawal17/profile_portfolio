import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { SiteData } from '../core/models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: false,
})
export class ContactPage {
  site: SiteData | null = null;

  constructor(
    private data: DataService,
    private router: Router
  ) {
    this.data.getSite().subscribe((s) => (this.site = s));
  }

  goTo(path: string, event?: Event): void {
    if (event) event.preventDefault();
    this.router.navigateByUrl(path);
  }
}
