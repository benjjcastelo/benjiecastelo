import { Component, OnInit } from '@angular/core';
import { StopWatchService } from './timer.service';
import { HostListener } from '@angular/core';

export enum KEY_CODE {
  SPACE = 32,
  ENTER = 13

}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {

  public started: boolean;
  public btn_reset: boolean = false;
  public time: number;

  public autoStart: boolean = false;

  private timer: any;

  constructor(public stopwatchService: StopWatchService) {
    this.stopwatchService = stopwatchService;
    this.time = 0;
    this.started = false;
    if (this.autoStart) {
      this.start();
    }
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    if (event.keyCode === KEY_CODE.SPACE || event.keyCode === KEY_CODE.ENTER) {

    }
  }
  formatTime(timeMs: number) {

    let minutes: any,
      seconds: any;

    minutes = Math.floor(timeMs / 60000).toString();
    seconds = ((timeMs % 60000) / 1000).toFixed(2).split('.');
    if (seconds[0] < 10) {
      seconds[0] = '0' + seconds[0];
    }
    else
      seconds[0] = seconds[0];
    return {
      scs: seconds[0],
      ms: seconds[1],
      min: minutes
    }
  }
  // formatTime(timeMs: number) {
  //     let minutes: any,
  //         seconds: any;

  //     minutes = Math.floor(timeMs / 60000).toString();
  //     // seconds = ((timeMs % 60000) / 1000).toFixed(2);
  //     seconds = ((timeMs % 60000) / 1000).toFixed(2).split('.');
  //     return minutes + ':' + (+seconds[0] < 10 ? '0' : '') + seconds[0]+ ' ' + seconds[1];
  // }
  getUpdate() {

    return () => {
      this.time = this.stopwatchService.time();
    };
  }


  reset() {
    this.stopwatchService.reset();
    // this.started = false;
    this.update();
    this.toggle_reset();
  }

  start() {
    this.timer = setInterval(this.getUpdate(), 1);
    this.stopwatchService.start();
  }

  stop() {
    clearInterval(this.timer);
    this.stopwatchService.stop();
  }

  toggle() {
    if (this.started) {
      this.stop();
    } else {
      this.start();
    }

    this.started = !this.started;
  }
  toggle_resetDefault() {
    this.btn_reset = false;
  }

  toggle_reset() {
    if (!this.btn_reset)
      this.btn_reset = true;
    else
      this.btn_reset = false;
  }
  update() {
    this.time = this.stopwatchService.time();
  }

  onClick() {
    console.log(this.stopwatchService);
  }
}


