import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReceitaComponent } from './view-receita.component';

describe('ViewReceitaComponent', () => {
  let component: ViewReceitaComponent;
  let fixture: ComponentFixture<ViewReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReceitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
