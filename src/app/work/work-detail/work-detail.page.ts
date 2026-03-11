import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { Project } from '../../core/models';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.page.html',
  styleUrls: ['./work-detail.page.scss'],
  standalone: false,
})
export class WorkDetailPage {
  project: Project | null = null;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService
  ) {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (!slug) return;
      this.data.getProjectBySlug(slug).subscribe((p) => {
        this.project = p ?? null;
        this.notFound = !p;
      });
    });
  }

  goToWork(event?: Event): void {
    if (event) event.preventDefault();
    this.router.navigateByUrl('/work');
  }
}
