import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedImageListComponent } from './advanced-image-list.component';

describe('AdvancedImageListComponent', () => {
  let component: AdvancedImageListComponent;
  let fixture: ComponentFixture<AdvancedImageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedImageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
