import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  private eventEmitter: EventEmitter<number> = new EventEmitter<number>();
  private counter = 0;
  private timer: NodeJS.Timer;

  constructor() {
  }

  startTheGame(): void {
    this.timer = setInterval(() => {
      this.counter++;
      this.eventEmitter.emit(this.counter);
    }, 1000);
  }

  stopTheGame(): void {
    clearInterval(this.timer);
  }

  ngOnInit() {
  }

}
