import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditFilmComponent} from './edit-film.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment";
import {AngularFireAnalyticsModule} from "@angular/fire/analytics";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AppRoutingModule} from "../../app-routing.module";

describe('EditFilmComponent', () => {
  let component: EditFilmComponent;
  let fixture: ComponentFixture<EditFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditFilmComponent],
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
    fixture = TestBed.createComponent(EditFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('all fields must be required', () => {
    component.filmForm.patchValue({
      title: null,
      image: "string",
      genre: "string",
      year: "string",
      count: 1,
      desc: "string",
      director: "string",
      actor: "string"
    })
    expect(component.filmForm.valid).toEqual(false);
  })
});
