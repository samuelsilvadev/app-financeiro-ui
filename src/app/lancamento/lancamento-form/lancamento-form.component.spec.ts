import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoFormComponent } from './lancamento-form.component';

describe('LancamentoFormComponent', () => {
  let component: LancamentoFormComponent;
  let fixture: ComponentFixture<LancamentoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
