import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtonComponent } from '@shared/components/toggle-button/toggle-button.component';

describe('ToggleButtonComponent', () => {
  let component: ToggleButtonComponent;
  let fixture: ComponentFixture<ToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test_toggle_to_light_mode', () => {
    const component = new ToggleButtonComponent();
    const mockEvent = { target: { checked: true } };
    component.toggleMode(mockEvent);
    expect(document.querySelector('body')?.getAttribute('data-theme')).toBe(
      'light'
    );
  });

  it('test_toggle_to_dark_mode', () => {
    const component = new ToggleButtonComponent();
    const mockEvent = { target: { checked: false } };
    component.toggleMode(mockEvent);
    expect(document.querySelector('body')?.getAttribute('data-theme')).toBe(
      'dark'
    );
  });

  test('debe hacer match con el snapshot', () => {
    const fixture = TestBed.createComponent(ToggleButtonComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect( compiled ).toMatchSnapshot();
  })
});
