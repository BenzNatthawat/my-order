import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterComponent } from './poster.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PosterComponent', () => {
  let component: PosterComponent;
  let fixture: ComponentFixture<PosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PosterComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(PosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be function calculatorScore', () => {
    expect(component.calculatorScore(10, 2)).toEqual(5);
    expect(component.calculatorScore(50, 2)).toEqual(10);
    expect(component.calculatorScore(0, 2)).toEqual(0);
    expect(component.calculatorScore(-1, 2)).toEqual(0);
    expect(component.calculatorScore(10, 0)).toEqual(0);
    expect(component.calculatorScore(10, -5)).toEqual(0);
  });
});
