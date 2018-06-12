import { Component } from "@angular/core";

//Defining custom interfaces, types
interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  //Question marke to indicate that the value is optional
  checkInDate?: number
}
@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
    template: `
        <div class="app">
            <h3>Airline Passengers</h3>
        <ul>
            <li *ngFor="let passenger of passengers; let i = index;">
            <span 
            class="status"
            [class.checked-in]="passenger.checkedIn"
            ></span>
               {{ i }}: {{passenger.fullName}}
               <!---> Json pipe - cool <-->
               <p> {{ passenger | json }}  </p>
               <div class="date">
                  <!---> Date pipe - can specify different date formats <-->
                  <!---> And pipes can be chained <-->
                Check in date: {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }} 
               </div>
            </li>
        </ul>
        </div>
    `
})
export class AppComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      fullName: "Stephen",
      checkedIn: true,
      checkInDate: 1490742000000
    },
    {
      id: 2,
      fullName: "Rose",
      checkedIn: false,
      checkInDate: null
    },
    {
      id: 3,
      fullName: "James",
      checkedIn: true,
      checkInDate: 1491606000000
    },
    {
      id: 4,
      fullName: "Louise",
      checkedIn: true,
      checkInDate: 1490742000000
    },
    {
      id: 5,
      fullName: "Tina",
      checkedIn: false
    }
  ];
}
