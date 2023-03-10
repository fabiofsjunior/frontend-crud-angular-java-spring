import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCartaoDialogComponent } from './cadastrar-cartao-dialog.component';

describe('CadastrarCartaoDialogComponent', () => {
  let component: CadastrarCartaoDialogComponent;
  let fixture: ComponentFixture<CadastrarCartaoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCartaoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarCartaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
