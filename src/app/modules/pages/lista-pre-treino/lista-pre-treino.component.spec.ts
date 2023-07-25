import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPreTreinoComponent } from './lista-pre-treino.component';

describe('ListaPreTreinoComponent', () => {
  let component: ListaPreTreinoComponent;
  let fixture: ComponentFixture<ListaPreTreinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPreTreinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPreTreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
