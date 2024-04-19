import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittingOfPostComponent } from './editting-of-post.component';

describe('EdittingOfPostComponent', () => {
  let component: EdittingOfPostComponent;
  let fixture: ComponentFixture<EdittingOfPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittingOfPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittingOfPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
