import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrazilPage } from './brazil.page';

describe('BrazilPage', () => {
  let component: BrazilPage;
  let fixture: ComponentFixture<BrazilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrazilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrazilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
