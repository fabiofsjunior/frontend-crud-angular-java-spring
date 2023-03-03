import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarUsuarioDialogComponent } from './cadastrar-usuario-dialog.component';

describe('CadastrarUsuarioDialogComponent', () => {
  let component: CadastrarUsuarioDialogComponent;
  let fixture: ComponentFixture<CadastrarUsuarioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarUsuarioDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarUsuarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
