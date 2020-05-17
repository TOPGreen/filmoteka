import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FilmInfoComponent} from './film-info.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment";
import {AngularFireAnalyticsModule} from "@angular/fire/analytics";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AppRoutingModule} from "../../app-routing.module";
import {AppComponent} from "../../app.component";

describe('FilmInfoComponent', () => {
  let component: FilmInfoComponent;
  let fixture: ComponentFixture<FilmInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilmInfoComponent],
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
    fixture = TestBed.createComponent(FilmInfoComponent);
    component = fixture.componentInstance;
    component.film = {
      id: "string",
      title: "string",
      image: "string",
      genre: "string",
      year: "string",
      count: 1,
      desc: "string",
      director: "string",
      actor: "string",
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as Film '${JSON.stringify({
    id: "string",
    title: "string",
    image: "string",
    genre: "string",
    year: "string",
    count: 1,
    desc: "string",
    director: "string",
    actor: "string",
  })}'`, () => {

    expect(JSON.stringify(component.film)).toEqual(JSON.stringify({
      id: "string",
      title: "string",
      image: "string",
      genre: "string",
      year: "string",
      count: 1,
      desc: "string",
      director: "string",
      actor: "string",
    }));
  });
});
