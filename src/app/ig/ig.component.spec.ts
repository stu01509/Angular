import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IGComponent } from './ig.component';

describe('IGComponent', () => {
  let component: IGComponent;
  let fixture: ComponentFixture<IGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
