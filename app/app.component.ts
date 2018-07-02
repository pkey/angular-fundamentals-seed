import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
        <div class="app">
            <input
             type="text"
             [(ngModel)]="name"
            >

             <!---> Same if as below but done on an element. Closely related to web components. <--->
            <template [ngIf]="name.length">
            <div>
            Searching for... {{ name }}
            </div> 
            </template>
            <!---> This is angular directive. More - structural directive <--->
            <!---> This is sugar syntax <--->
            <div *ngIf="name.length">
            Searching for... {{ name }}</div>
        </div>
    `
})
export class AppComponent {
  name: string = "";
  handleChange(value: string) {
    console.log(this.name)
  }
}
