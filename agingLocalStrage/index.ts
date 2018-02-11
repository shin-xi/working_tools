class FreeLoading {
    lastTime: any;
    nowTime: any;

    constructor() {
        this.lastTime = localStorage.getItem('lastTime') || new Date().getTime();
        this.nowTime = new Date().getTime();
        this._logElapse();
        this._isLogged();
    }

    _logElapse() {
        console.log('与上次登录的时间差', (this.nowTime - this.lastTime) / 1000, '秒');
    }

    _isLogged() {
        if (this.nowTime - this.lastTime > 1000 * 60) {
            console.log('超过60秒未操作,请重新登录');
            const ReloadTime: number = new Date().getTime();
            localStorage.setItem('lastTime', ReloadTime.toString());
        } else {
            const ReloadTime: number = new Date().getTime();
            localStorage.setItem('lastTime', ReloadTime.toString());
        }
    }
}