import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherImageComponent } from './AfficherImage.component';

describe('AfficherImageComponent', () => {
let component: AfficherImageComponent;
let fixture: ComponentFixture<AfficherImageComponent>;

beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ AfficherImageComponent ]
  })
  .compileComponents();
}));

beforeEach(() => {
  fixture = TestBed.createComponent(AfficherImageComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

it('should create', () => {
  expect(component).toBeTruthy();
});
});