import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPopupViewComponent } from './list-popup-view.component';

describe('ListPopupViewComponent', () => {
  let component: ListPopupViewComponent;
  let fixture: ComponentFixture<ListPopupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPopupViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPopupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
