import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../src/app/app.component';
import { ProjectsComponent } from '../src/app/pages/projects/projects.component';
import { HeaderComponent } from '../src/app/shared/components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../src/app/app-routing.module';
import { IconModule } from '../src/app/shared/icon/icon.module';
import { ToggleButtonModule } from '../src/app/shared/toggle-button/toggle-button.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        IconModule,
        ToggleButtonModule
      ],
      declarations: [
        AppComponent,
        ProjectsComponent,
        HeaderComponent,
      ],

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'portfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('portfolio');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('portfolio app is running!');
  });

  test('debe hacer match con el snapshot', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect( compiled ).toMatchSnapshot();
  })
});
