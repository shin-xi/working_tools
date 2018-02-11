var FreeLoading = /** @class */ (function () {
    function FreeLoading() {
        this.lastTime = localStorage.getItem('lastTime') || new Date().getTime();
        this.nowTime = new Date().getTime();
        this._logElapse();
        this._isLogged();
    }
    FreeLoading.prototype._logElapse = function () {
        console.log('与上次登录的时间差', (this.nowTime - this.lastTime) / 1000, '秒');
    };
    FreeLoading.prototype._isLogged = function () {
        if (this.nowTime - this.lastTime > 1000 * 60) {
            console.log('超过60秒未操作,请重新登录');
            var ReloadTime = new Date().getTime();
            localStorage.setItem('lastTime', ReloadTime.toString());
        }
        else {
            var ReloadTime = new Date().getTime();
            localStorage.setItem('lastTime', ReloadTime.toString());
        }
    };
    return FreeLoading;
}());
