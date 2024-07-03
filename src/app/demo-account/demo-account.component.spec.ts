import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAccountComponent } from './demo-account.component';

describe('DemoAccountComponent', () => {
  let component: DemoAccountComponent;
  let fixture: ComponentFixture<DemoAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
