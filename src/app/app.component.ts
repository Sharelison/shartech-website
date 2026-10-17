import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly router = inject(Router);
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  readonly capabilities = [
    {
      title: 'Backend & APIs',
      text: 'Java, Spring Boot, Quarkus, Kotlin — services that stay reliable under real load.',
    },
    {
      title: 'Frontend & full-stack',
      text: 'Angular and modern web apps with clean UX and production-ready structure.',
    },
    {
      title: 'AI-enabled products',
      text: 'Practical AI features integrated into real applications — not demos that never ship.',
    },
    {
      title: 'Platform & OpenShift',
      text: 'Container platforms, developer onboarding, and cost/usage insight for engineering teams.',
    },
    {
      title: 'CI/CD & automation',
      text: 'Jenkins, Azure DevOps, and pipelines that make releases repeatable and safe.',
    },
    {
      title: 'Quality & delivery',
      text: 'Functional testing, monitoring, and Agile delivery with clear ownership.',
    },
  ];

  readonly clients = [
    'Rabobank',
    'ABN AMRO',
    'Rijkswaterstaat',
    'Council for the Judiciary',
  ];

  readonly credentials = [
    { label: 'Toptal', detail: 'Accepted engineering expert' },
    { label: 'Oracle OCP', detail: 'Certified Professional' },
    { label: 'Oracle OCA', detail: 'Certified Associate' },
    { label: 'Agile', detail: 'Certified practitioner' },
  ];

  readonly steps = [
    {
      n: '01',
      title: 'Discovery',
      text: 'We clarify the problem, users, constraints, and what “done” looks like.',
    },
    {
      n: '02',
      title: 'Build',
      text: 'Design and develop in focused iterations with working software every step.',
    },
    {
      n: '03',
      title: 'Launch',
      text: 'Deploy, harden, and hand over a system your team can run with confidence.',
    },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

}
