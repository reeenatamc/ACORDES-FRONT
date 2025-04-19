import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UMightLikeComponent } from './u-might-like.component';

describe('UMightLikeComponent', () => {
  let component: UMightLikeComponent;
  let fixture: ComponentFixture<UMightLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UMightLikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UMightLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
