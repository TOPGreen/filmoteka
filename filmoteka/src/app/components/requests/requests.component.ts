import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests;
  constructor(private firebase: FirebaseService) { }

  async ngOnInit() {
    this.requests = await this.firebase.getData("requests")
  }

}
