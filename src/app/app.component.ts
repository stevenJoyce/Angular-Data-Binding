import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';

  counter: number = 0;

  hide: boolean = true;

  onButtonClick() {
      this.counter++;
  }// onSave()

  clickImage() {
console.log('Image Clicked');

if (this.hide === false){
  this.hide = true;
} else {
  this.hide = false;
}
}
}// class
