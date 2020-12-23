import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackButtonBgblurComponent } from './back-button-bgblur.component';

describe('BackButtonBgblurComponent', () => {
  let component: BackButtonBgblurComponent;
  let fixture: ComponentFixture<BackButtonBgblurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackButtonBgblurComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackButtonBgblurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
