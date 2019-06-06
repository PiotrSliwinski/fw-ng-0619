import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CityComponent } from './app.component';

describe('AppComponent', () => {

  let component;
  let domElement;
  let fixture;

  let TD = {
    cityHyphen : "l-o-n-d-o-n",
    cityRestore : "london"
  }
  
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        CityComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CityComponent);
    
    component = fixture.debugElement.componentInstance;
    console.log(component)

    domElement = fixture.debugElement.nativeElement;
    console.log(domElement)

    fixture.autoDetectChanges(true);

  }));

  it(`should hyphenate city name`, () => {
    component.hyphenate();
    expect(component.city).toEqual(TD.cityHyphen);
  });

  it(`should restore city name`, () => {
    component.hyphenate();
    fixture.detectChanges();
    console.log(domElement.querySelector("p"))
    expect(domElement.querySelector("p").textContent).toContain( TD.cityHyphen )
  });

});
