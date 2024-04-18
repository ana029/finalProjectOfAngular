import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsWithIdComponent } from './posts-with-id.component';

describe('PostsWithIdComponent', () => {
  let component: PostsWithIdComponent;
  let fixture: ComponentFixture<PostsWithIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsWithIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsWithIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
