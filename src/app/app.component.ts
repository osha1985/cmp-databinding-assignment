import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private counterArray: number[] = [];


  pushCounter(counter: number) {
    this.counterArray.push(counter);
  }
}
