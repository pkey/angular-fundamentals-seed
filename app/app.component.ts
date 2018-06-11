import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    //Can use templateUrl - but this one is more nice as you can see in the compnent itself what you are displaying
    template: `
        <div class="app">
            <!--> Sugar syntax - curly braces - something that looks cleaner<--->
            <!---> {{ title + '!'}} <--->
            <!--> Property binding on DOM element <!--->
           <!--> <h1 [innerHTML]="title"></h1><!--->
            <!--> Equals to element.src = 'logo.png' <!--->
            <!--> src in curly braces because we want to change it dynamically <!--->
           <!--> <img [src]='logo'><!--->
            <!--> <button (click)="handleClick()">Change name!</button>
            <input 
            type="text" 
            [ngModel]="name"
            (ngModelChange)="handleChange($event)"
            >
            [(ngModel)] is a shorthand for the above
            <input 
            type="text" 
            [(ngModel)]="name"
            > <!-->
             <button (click)="handleClick(username.value)">Get value!</button>
            <input type="text" #username>
            <div>{{ name }}</div>
          <!--->  <div>
            {{ numberOne + numberTwo }}
            </div>
            <div>
            {{ isHappy ? ':)' : ':(' }}
            </div>
           <---> 
        </div>
    `
})
export class AppComponent {
    // title: string;
    // logo: string = 'img/logo.gif';
   
    // isHappy: boolean = false;
    // numberOne: number = 1;
    // numberTwo: number = 2;
    name: string = 'Paul';
    handleClick(value: number) {
        console.log(value);
        
    }
    handleChange(value: string) {
        this.name = value;
    }
    //Not enitrely two way data binding - one way binding with the event being emitted
    //That's a better way to do things - makes you in control.
    //Two way data binding is only better used for input fields to make things more simple
    handleInput(event: any) {
        this.name = event.target.value;
    }
    handleBlur(event: any) {
        this.name = event.target.value;
    }
    // constructor() {
    //     this.title = 'Ultimate Angular'
    // }
}