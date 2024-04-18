import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostwithComponent } from './postwith.component';

describe('PostwithComponent', () => {
  let component: PostwithComponent;
  let fixture: ComponentFixture<PostwithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostwithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
