import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { DataService } from '../core/services/data.service';
import { SiteData, Project, AboutData, Testimonial } from '../core/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements AfterViewInit {
  @ViewChild(IonContent) ionContent!: IonContent;

  site: SiteData | null = null;
  about: AboutData | null = null;
  featured: Project[] = [];
  testimonials: Testimonial[] = [];
  showHeroImage = true;
  quickBitsColumns: string[][] = [];

  constructor(
    private data: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.data.getSite().subscribe((s) => (this.site = s));
    this.data.getAbout().subscribe((a) => {
      this.about = a;
      if (a?.quickBits?.length) {
        const mid = Math.ceil(a.quickBits.length / 2);
        this.quickBitsColumns = [a.quickBits.slice(0, mid), a.quickBits.slice(mid)];
      }
    });
    this.data.getFeaturedProjects().subscribe((list) => (this.featured = list));
    this.data.getTestimonials().subscribe((list) => (this.testimonials = list));
  }

  /** Tech stack with icons for Skills section; falls back to text-only skills if no techStack. */
  get skillsForDisplay(): { name: string; icon?: string }[] {
    if (!this.about) return [];
    if (this.about.techStack?.length) return this.about.techStack;
    return (this.about.skills ?? []).map((s) => ({ name: s }));
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((f) => {
      if (f) this.scrollToSection(f);
    });
    const frag = this.route.snapshot.fragment;
    if (frag) setTimeout(() => this.scrollToSection(frag), 300);
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (!el || !this.ionContent) return;
    this.ionContent.getScrollElement().then((scrollEl) => {
      const rect = el.getBoundingClientRect();
      const targetY = scrollEl.scrollTop + rect.top - 70;
      this.ionContent.scrollToPoint(0, Math.max(0, targetY), 400);
    });
  }

  onHeroImgError(): void {
    this.showHeroImage = false;
  }

  goTo(path: string, event?: Event): void {
    if (event) event.preventDefault();
    this.router.navigateByUrl(path);
  }

  goToProject(slug: string, event?: Event): void {
    if (event) event.preventDefault();
    this.router.navigate(['/work', slug]);
  }

  /** True when CV link is to a local asset (so browser should download). */
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
