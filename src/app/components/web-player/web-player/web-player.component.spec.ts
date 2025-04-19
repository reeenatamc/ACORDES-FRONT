import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPlayerComponent } from './web-player.component';

describe('WebPlayerComponent', () => {
  let component: WebPlayerComponent;
  let fixture: ComponentFixture<WebPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
