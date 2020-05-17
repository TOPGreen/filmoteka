import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment";
import {AngularFireAnalyticsModule} from "@angular/fire/analytics";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AppRoutingModule} from "../../app-routing.module";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAnalyticsModule,
        AngularFirestoreModule,
        AppRoutingModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('all fields must be required', () => {
    component.loginForm.patchValue({email: null, password: "qweeq"})
    expect(component.loginForm.valid).toEqual(false)
  })
});
