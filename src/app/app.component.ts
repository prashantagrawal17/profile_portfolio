import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './core/services/data.service';
import { SiteData } from './core/models';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  site: SiteData | null = null;
  currentYear = new Date().getFullYear();

  constructor(
    private data: DataService,
    private router: Router
  ) {
    this.data.getSite().subscribe((s) => (this.site = s));
  }

  navigate(event: Event, path: string): void {
    event.preventDefault();
    const [pathStr, fragment] = path.includes('#') ? path.split('#') : [path, null];
    const segments = pathStr.replace(/^\//, '').split('/').filter(Boolean);
    if (fragment && segments.length) {
      this.router.navigate(segments, { fragment });
    } else {
      this.router.navigateByUrl(path);
    }
  }

  /** True when CV link is to a local asset (so browser should download, not open in new tab). */
  isCvDownload(site: SiteData | null): boolean {
    if (!site?.cvUrl) return false;
    const u = site.cvUrl;
    return !u.startsWith('http://') && !u.startsWith('https://');
  }

  /** True when CV link is external (open in new tab). */
  isCvExternal(site: SiteData | null): boolean {
    if (!site?.cvUrl) return false;
    const u = site.cvUrl;
    return u.startsWith('http://') || u.startsWith('https://');
  }
}
