import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonZListComponent } from './dragon-z-list.component';

describe('DragonZListComponent', () => {
  let component: DragonZListComponent;
  let fixture: ComponentFixture<DragonZListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragonZListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragonZListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
