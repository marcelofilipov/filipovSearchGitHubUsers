import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: Router,
          useValue: jasmine.createSpyObj('Router', ['navigate']),
        },
      ],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
    });
  }));

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve desabilitar o botão se o campo estiver vazio', waitForAsync(() => {
    component.username = '';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const button = fixture.debugElement.query(By.css('button')).nativeElement;
      expect(button.disabled).toBeTrue();
    });
  }));

  it('deve habilitar o botão quando username for válido', waitForAsync(() => {
    component.username = 'filipovdev';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges(); // aplica após estabilização

      const button = fixture.debugElement.query(By.css('button')).nativeElement;
      expect(button.disabled).toBeFalse(); // agora deve passar
    });
  }));

  it('deve chamar search() ao submeter o formulário', () => {
    spyOn(component, 'search');

    component.username = 'filipovdev';
    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(component.search).toHaveBeenCalled();
  });
});
