var CountDown = /** @class */ (function () {
    function CountDown(deadline, nowTime) {
        if (nowTime === void 0) { nowTime = new Date().getTime(); }
        this.deadline = deadline;
        this.nowTime = nowTime;
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
    CountDown.prototype.log = function () {
        console.log('剩余总毫秒', this._dayFilter, '剩余天', this._dayLeft, '剩余时', this._hourLeft, '剩余分', this._minuteLeft, '剩余秒', this._secondLeft);
    };
    CountDown.prototype.getDayLeft = function () {
        return this._dayLeft;
    };
    CountDown.prototype.getHourLeft = function () {
        return this._hourLeft;
    };
    CountDown.prototype.getMinuteLeft = function () {
        return this._minuteLeft;
    };
    CountDown.prototype.getSecondLeft = function () {
        return this._secondLeft;
    };
    return CountDown;
}());
// setInterval('new CountDown(new Date(2017, 11, 19, 16, 59).getTime()).log()', 1000);
console.log(new CountDown(new Date(2017, 11, 19, 16, 59).getTime()).getDayLeft());
