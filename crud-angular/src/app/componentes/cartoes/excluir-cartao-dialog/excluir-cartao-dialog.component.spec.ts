import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirCartaoDialogComponent } from './excluir-cartao-dialog.component';

describe('ExcluirDialogComponent', () => {
  let component: ExcluirCartaoDialogComponent;
  let fixture: ComponentFixture<ExcluirCartaoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirCartaoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirCartaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
