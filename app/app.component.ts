import { Component } from "@angular/core";

//Defining custom interfaces, types
interface Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
}
@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
    template: `
        <div class="app">
        <!---> Angular translates to this thing. The below one is sugar syntax again <---->
        <h3>Airline Passengers</h3>
        <ul>
            <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
            <li>
               {{ i }}: {{passenger.fullName}}
            </li>
            </template>
        </ul>
            <h3>Airline Passengers</h3>
        <ul>
            <li *ngFor="let passenger of passengers; let i = index;">
               {{ i }}: {{passenger.fullName}}
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
      checkedIn: true
    },
    {
      id: 2,
      fullName: "Rose",
      checkedIn: true
    },
    {
      id: 3,
      fullName: "James",
      checkedIn: true
    },
    {
      id: 4,
      fullName: "Louise",
      checkedIn: true
    },
    {
      id: 5,
      fullName: "Tina",
      checkedIn: false
    }
  ];
}
