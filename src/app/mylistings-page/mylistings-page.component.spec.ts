import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MylistingsPageComponent } from './mylistings-page.component';

describe('MylistingsPageComponent', () => {
  let component: MylistingsPageComponent;
  let fixture: ComponentFixture<MylistingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MylistingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MylistingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
