class CountDown {
    _deadline: number;
    _nowTime: number;
    _dayFilter: number;
    _hourFilter: number;
    _minuteFilter: number;
    _secondFilter: number;
    _dayLeft: number;
    _hourLeft: number;
    _minuteLeft: number;
    _secondLeft: number;

    constructor(private deadline: number,
                private nowTime: number = new Date().getTime()) {
        this._deadline = deadline;
        this._nowTime = nowTime;
        this._dayFilter = Math.max((deadline - nowTime), 0);
        this._hourFilter = this._dayFilter % (1000 * 60 * 60 * 24);
        this._minuteFilter = this._minuteFilter = this._hourFilter % (1000 * 60 * 60);
        this._secondFilter = this._secondFilter = this._minuteFilter % (1000 * 60);
        this._dayLeft = Math.max(Math.floor(this._dayFilter / (1000 * 60 * 60 * 24)), 0);
        this._hourLeft = Math.max(Math.floor(this._hourFilter / (1000 * 60 * 60)), 0);
        this._minuteLeft = Math.max(Math.floor(this._minuteFilter / (1000 * 60)), 0);
        this._secondLeft = Math.max(Math.floor(this._secondFilter / 1000), 0);
    }

    log() {
        console.log('剩余总毫秒', this._dayFilter, '剩余天', this._dayLeft, '剩余时', this._hourLeft, '剩余分', this._minuteLeft, '剩余秒', this._secondLeft)
    }

    getDayLeft() {
        return this._dayLeft
    }

    getHourLeft() {
        return this._hourLeft;
    }

    getMinuteLeft() {
        return this._minuteLeft;
    }

    getSecondLeft() {
        return this._secondLeft;
    }
}

// setInterval('new CountDown(new Date(2017, 11, 19, 16, 59).getTime()).log()', 1000);

console.log(new CountDown(new Date(2017, 11, 19, 16, 59).getTime()).getDayLeft());