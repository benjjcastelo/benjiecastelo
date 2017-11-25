import {Injectable} from '@angular/core';


@Injectable()
export class StopWatchService {

    private startAt: number;
    private lapTime: number;

    constructor() {
        this.reset();
    }
    now() {
        return _now();
    }

    reset() {
        this.startAt = 0;
        this.lapTime = 0;

    }

    start() {
        this.startAt = this.startAt
            ? this.startAt
            : this.now();
    }

    stop() {
        let timeMs = this.startAt
                ? this.lapTime + this.now() - this.startAt
                : this.lapTime;

        this.lapTime = timeMs;

        this.startAt = 0;
    }

    time() {
        return this.lapTime
            + (this.startAt ? this.now() - this.startAt : 0);
    }
}

function _now() {
    return (new Date()).getTime();
}
