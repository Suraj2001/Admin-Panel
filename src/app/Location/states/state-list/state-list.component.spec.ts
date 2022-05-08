import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateListComponent } from './state-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StateListComponent', () => {
  let component: StateListComponent;
  let fixture: ComponentFixture<StateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [StateListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
