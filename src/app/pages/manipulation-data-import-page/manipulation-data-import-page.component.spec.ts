import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulationDataImportPageComponent } from './manipulation-data-import-page.component';

describe('ManipulationDataImportPageComponent', () => {
  let component: ManipulationDataImportPageComponent;
  let fixture: ComponentFixture<ManipulationDataImportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManipulationDataImportPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManipulationDataImportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
