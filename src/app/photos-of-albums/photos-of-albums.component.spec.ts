import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosOfAlbumsComponent } from './photos-of-albums.component';

describe('PhotosOfAlbumsComponent', () => {
  let component: PhotosOfAlbumsComponent;
  let fixture: ComponentFixture<PhotosOfAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosOfAlbumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosOfAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
