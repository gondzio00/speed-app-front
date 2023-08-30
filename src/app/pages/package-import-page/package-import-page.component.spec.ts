import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageImportPageComponent } from './package-import-page.component';

describe('PackageImportPageComponent', () => {
  let component: PackageImportPageComponent;
  let fixture: ComponentFixture<PackageImportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageImportPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageImportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
