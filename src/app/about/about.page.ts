import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { AboutData, ExperienceItem } from '../core/models';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: false,
})
export class AboutPage {
  about: AboutData | null = null;
  experience: ExperienceItem[] = [];
  showPhoto = true;

  constructor(
    private data: DataService,
    private router: Router
  ) {
    this.data.getAbout().subscribe((a) => (this.about = a));
    this.data.getExperience().subscribe((e) => (this.experience = e));
  }

  goTo(path: string, event?: Event): void {
    if (event) event.preventDefault();
    this.router.navigateByUrl(path);
  }
}
