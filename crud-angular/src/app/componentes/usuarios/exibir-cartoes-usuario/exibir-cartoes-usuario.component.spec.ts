import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirCartoesUsuarioComponent } from './exibir-cartoes-usuario.component';

describe('ExibirCartoesUsuarioComponent', () => {
  let component: ExibirCartoesUsuarioComponent;
  let fixture: ComponentFixture<ExibirCartoesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibirCartoesUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirCartoesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
