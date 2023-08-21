import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})




export class CreateEventComponent {

  name: string;
  startDateTime: string;
  endDateTime: string;
  option: string;
  uniqueUrl: string;
  locationType: string;
  timezone: string;
  description: string;
  state: string;
  dateCreation: string;
  cover: string;
  domain: string;
  logoUrl: string;
  customRightColumnBackground: string;
  locationAddress: string;
  category: string;
  organizer: string;
  fbLink: string;
  linkedinLink: string;


  saveForm() {
    console.log('Form data saved.');
  }

  cancelForm() {
    console.log('Form canceled.');
  }

}




/*export class CreateEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
