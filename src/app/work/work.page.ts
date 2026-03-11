import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { Project } from '../core/models';

@Component({
  selector: 'app-work',
  templateUrl: './work.page.html',
  styleUrls: ['./work.page.scss'],
  standalone: false,
})
export class WorkPage {
  projects: Project[] = [];

  constructor(
    private data: DataService,
    private router: Router
  ) {
    this.data.getProjects().subscribe((list) => (this.projects = list));
  }

  goTo(path: string, event?: Event): void {
    if (event) event.preventDefault();
    this.router.navigateByUrl(path);
  }

  goToProject(slug: string, event?: Event): void {
    if (event) event.preventDefault();
    this.router.navigate(['/work', slug]);
  }
}
