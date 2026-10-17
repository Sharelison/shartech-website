import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the brand name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.nav__brand .brand-word')?.textContent).toContain('shartech');
  });

  it('should provide direct contact links without a message form', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('form')).toBeNull();
    expect(compiled.querySelector('.contact__actions a[href^="mailto:"]')).not.toBeNull();
    expect(compiled.querySelector('.contact__actions a[href^="https://wa.me/"]')).not.toBeNull();
  });

  it('should show the founder story and free intake information on the about page', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/about');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#founder-heading')?.textContent).toContain('Sharélison');
    expect(compiled.textContent).toContain('free intake session');
    expect(compiled.querySelector('.founder__profiles a[href="https://www.linkedin.com/in/sharelison/"]')).not.toBeNull();
    expect(compiled.querySelector('.founder__profiles a[href="https://www.toptal.com/resume/sharelison-caldera"]')).not.toBeNull();
  });
});
