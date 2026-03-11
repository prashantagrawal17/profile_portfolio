import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { SiteData, AboutData, ExperienceItem, Project, Testimonial } from '../models';

@Injectable({ providedIn: 'root' })
export class DataService {
  private site$: Observable<SiteData> | null = null;
  private about$: Observable<AboutData> | null = null;
  private experience$: Observable<ExperienceItem[]> | null = null;
  private projects$: Observable<Project[]> | null = null;
  private testimonials$: Observable<Testimonial[]> | null = null;

  constructor(private http: HttpClient) {}

  getSite(): Observable<SiteData> {
    if (!this.site$) {
      this.site$ = this.http.get<SiteData>('assets/data/site.json').pipe(shareReplay(1));
    }
    return this.site$;
  }

  getAbout(): Observable<AboutData> {
    if (!this.about$) {
      this.about$ = this.http.get<AboutData>('assets/data/about.json').pipe(shareReplay(1));
    }
    return this.about$;
  }

  getExperience(): Observable<ExperienceItem[]> {
    if (!this.experience$) {
      this.experience$ = this.http.get<ExperienceItem[]>('assets/data/experience.json').pipe(shareReplay(1));
    }
    return this.experience$;
  }

  getProjects(): Observable<Project[]> {
    if (!this.projects$) {
      this.projects$ = this.http.get<Project[]>('assets/data/projects.json').pipe(shareReplay(1));
    }
    return this.projects$;
  }

  getFeaturedProjects(): Observable<Project[]> {
    return this.getProjects().pipe(
      map((list) => list.filter((p) => p.featured))
    );
  }

  getProjectBySlug(slug: string): Observable<Project | undefined> {
    return this.getProjects().pipe(
      map((list) => list.find((p) => p.slug === slug))
    );
  }

  getTestimonials(): Observable<Testimonial[]> {
    if (!this.testimonials$) {
      this.testimonials$ = this.http.get<Testimonial[]>('assets/data/testimonials.json').pipe(shareReplay(1));
    }
    return this.testimonials$;
  }
}
