import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFullpostsComponent } from './page-fullposts.component';

describe('PageFullpostsComponent', () => {
  let component: PageFullpostsComponent;
  let fixture: ComponentFixture<PageFullpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFullpostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFullpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
