import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewsDetailsComponent } from './page-news-details.component';

describe('PageNewsDetailsComponent', () => {
  let component: PageNewsDetailsComponent;
  let fixture: ComponentFixture<PageNewsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNewsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
