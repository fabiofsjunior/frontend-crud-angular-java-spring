import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCartaoDialogComponent } from './editar-cartao-dialog.component';

describe('EditarDialogComponent', () => {
  let component: EditarCartaoDialogComponent;
  let fixture: ComponentFixture<EditarCartaoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCartaoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCartaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
