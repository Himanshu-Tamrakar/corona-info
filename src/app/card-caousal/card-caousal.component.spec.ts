import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCaousalComponent } from './card-caousal.component';

describe('CardCaousalComponent', () => {
  let component: CardCaousalComponent;
  let fixture: ComponentFixture<CardCaousalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCaousalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCaousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
