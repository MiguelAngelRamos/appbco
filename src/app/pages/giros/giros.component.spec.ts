import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirosComponent } from './giros.component';

describe('GirosComponent', () => {
  let component: GirosComponent;
  let fixture: ComponentFixture<GirosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GirosComponent]
    });
    fixture = TestBed.createComponent(GirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
