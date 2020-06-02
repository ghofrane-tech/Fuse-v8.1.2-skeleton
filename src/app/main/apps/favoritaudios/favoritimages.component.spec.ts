import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritimagesComponent } from './favoritimages.component';

describe('FavoritimagesComponent', () => {
  let component: FavoritimagesComponent;
  let fixture: ComponentFixture<FavoritimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
