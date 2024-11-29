import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcLibraryComponent } from './fc-library.component';

describe('FcLibraryComponent', () => {
  let component: FcLibraryComponent;
  let fixture: ComponentFixture<FcLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FcLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FcLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
