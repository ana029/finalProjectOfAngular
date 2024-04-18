import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteinerForPostComponent } from './conteiner-for-post.component';

describe('ConteinerForPostComponent', () => {
  let component: ConteinerForPostComponent;
  let fixture: ComponentFixture<ConteinerForPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteinerForPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteinerForPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
