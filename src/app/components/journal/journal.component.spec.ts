import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalComponent } from './journal.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment";
import {AngularFireAnalyticsModule} from "@angular/fire/analytics";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AppRoutingModule} from "../../app-routing.module";

describe('JournalComponent', () => {
  let component: JournalComponent;
  let fixture: ComponentFixture<JournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalComponent ],
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
    fixture = TestBed.createComponent(JournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
