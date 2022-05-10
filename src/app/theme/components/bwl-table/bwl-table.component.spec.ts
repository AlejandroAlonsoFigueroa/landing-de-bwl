import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BWLTableComponent } from './bwl-table.component';

describe('BWLTableComponent', () => {
  let component: BWLTableComponent;
  let fixture: ComponentFixture<BWLTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BWLTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BWLTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
