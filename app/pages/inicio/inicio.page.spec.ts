import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioPage } from './inicio.page';

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;

  beforeEach(async () => { // Quitamos los paréntesis de async
    await TestBed.configureTestingModule({
      declarations: [InicioPage],
    }).compileComponents(); // Usamos await aquí

    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
