import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirUsuarioDialogComponent } from './excluir-usuario-dialog.component';

describe('ExcluirUsuarioDialogComponent', () => {
  let component: ExcluirUsuarioDialogComponent;
  let fixture: ComponentFixture<ExcluirUsuarioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirUsuarioDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirUsuarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
