import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAccountComponent } from './live-account.component';

describe('LiveAccountComponent', () => {
  let component: LiveAccountComponent;
  let fixture: ComponentFixture<LiveAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
