import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InndustryComponent } from './inndustry.component';

describe('InndustryComponent', () => {
  let component: InndustryComponent;
  let fixture: ComponentFixture<InndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InndustryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
