import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOneUserComponent } from './list-one-user.component';

describe('ListOneUserComponent', () => {
  let component: ListOneUserComponent;
  let fixture: ComponentFixture<ListOneUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOneUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOneUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
