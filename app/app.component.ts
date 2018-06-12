import { Component } from "@angular/core";

//Defining custom interfaces, types
interface Child {
  name: string,
  age: number
}
interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  //Question marke to indicate that the value is optional
  checkInDate?: number,
  //'| null' to indicate that it should be defined but can be null.
  //Used hwne we asssume that APi wil send back the property
 // checkInDate: number | null
 children: Child[] | null
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
               <div class="children">
                <!---> Safe navigation operator - ignores if null. Or operator may be displayed if the element is not defined. <-->
                  Children: {{ passenger.children?.length || 0 }}
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
      checkInDate: 1490742000000,
      children: []
    },
    {
      id: 2,
      fullName: "Rose",
      checkedIn: false,
      checkInDate: null,
      children: null
    },
    {
      id: 3,
      fullName: "James",
      checkedIn: true,
      checkInDate: 1491606000000,
      children: []
    },
    {
      id: 4,
      fullName: "Louise",
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    },
    {
      id: 5,
      fullName: "Tina",
      checkedIn: false,
      checkInDate: null,
      children: []
    }
  ];
}
