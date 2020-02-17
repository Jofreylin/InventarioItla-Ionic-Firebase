import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeinventarioPage } from './homeinventario.page';

describe('HomeinventarioPage', () => {
  let component: HomeinventarioPage;
  let fixture: ComponentFixture<HomeinventarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeinventarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeinventarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
