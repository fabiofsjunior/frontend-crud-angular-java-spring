import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesFormComponent } from './componentes-form.component';

describe('ComponentesFormComponent', () => {
  let component: ComponentesFormComponent;
  let fixture: ComponentFixture<ComponentesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
