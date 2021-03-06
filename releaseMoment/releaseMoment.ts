class ReleaseMoment {
    _nowTime: Date;
    _releaseTime: Date;
    _nowYear: number;
    _releaseYear: number;
    _nowMonth: number;
    _releaseMonth: number;
    _nowDate: number;
    _releaseDate: number;
    _nowHour: number;
    _releaseHour: number | string;
    _nowMinutes: number;
    _releaseMinutes: number | string;
    _nowSeconds: number;
    _releaseSeconds: number;

    constructor(private releaseTime: number,
                private nowTime: number = new Date().getTime()) {
        this._nowTime = new Date(nowTime);
        this._releaseTime = new Date(releaseTime);
        this._nowYear = this._nowTime.getFullYear();
        this._releaseYear = this._releaseTime.getFullYear();
        this._nowMonth = this._nowTime.getMonth();
        this._releaseMonth = this._releaseTime.getMonth();
        this._nowDate = this._nowTime.getDate();
        this._releaseDate = this._releaseTime.getDate();
        this._nowHour = this._nowTime.getHours();
        this._releaseHour = this._releaseTime.getHours() < 10 ? `0${this._releaseTime.getHours()}` : this._releaseTime.getHours();
        this._nowMinutes = this._nowTime.getMinutes();
        this._releaseMinutes = this._releaseTime.getMinutes() < 10 ? `0${this._releaseTime.getMinutes()}` : this._releaseTime.getMinutes();
        this._nowSeconds = this._nowTime.getSeconds();
        this._releaseSeconds = this._releaseTime.getSeconds();
        // console.log('nowTime:', nowTime, 'releaseTime:', releaseTime);
        // console.log('nowYear', this._nowYear, 'releaseYear', this._releaseYear);
        // console.log('nowMonth', this._nowMonth, 'releaseMonth', this._releaseMonth);
        // console.log('nowDate', this._nowDate, 'releaseDate', this._releaseDate);
        // console.log('nowHour', this._nowHour, 'releaseHour', this._releaseHour);
        // console.log('nowMinutes', this._nowMinutes, 'releaseMinutes', this._releaseMinutes);
        // console.log('nowSeconds', this._nowSeconds, 'releaseSeconds', this._releaseSeconds)
    }

    elapsedTime() {
        switch (true) {

            case (this.nowTime - this.releaseTime) < (1000 * 60) :
                return `刚刚`; // 格式(刚刚)

            case (this.nowTime - this.releaseTime) === (1000 * 60) || (this.nowTime - this.releaseTime) < (1000 * 60 * 60) :
                return `${Math.floor((this.nowTime - this.releaseTime) / (1000 * 60))}分钟前`; // 格式(11分钟前)

            case (this.nowTime - this.releaseTime) === (1000 * 60 * 60) || (this.nowTime - this.releaseTime) < (1000 * 60 * 60 * 24) :
                return `${Math.floor((this.nowTime - this.releaseTime) / (1000 * 60 * 60))}小时前`; // 格式(11小时前)

            case (this.nowTime - this.releaseTime) === (1000 * 60 * 60 * 24) || (this.nowTime - this.releaseTime) > (1000 * 60 * 60 * 24) :
                switch (true) {

                    case ((this._nowYear - this._releaseYear) > 1) || ((this._nowYear - this._releaseYear) === 1 && this._nowMonth !== 0) || ((this._nowYear - this._releaseYear) === 1 && this._nowMonth === 0 && this._nowDate !== 1):
                        return `${this._releaseYear} ${this._releaseMonth + 1}/${this._releaseDate}`; // 格式(2017 11/25)

                    case (this._nowYear - this._releaseYear) === 1 && (this._nowMonth === 0 && this._releaseMonth === 11) && (this._nowDate === 1 && this._releaseDate === 31):
                        return `昨天 ${this._releaseHour}:${this._releaseMinutes}`; // 格式(昨天 11:25)

                    case (this._nowYear - this._releaseYear) === 0:
                        switch (true) {

                            case ((this._nowMonth - this._releaseMonth) > 1) || ((this._nowMonth - this._releaseMonth) === 1 && this._nowDate !== 1):
                                return `${this._releaseMonth + 1}/${this._releaseDate} ${this._releaseHour}:${this._releaseMinutes}`; // 格式(11/25 11:25)

                            case (this._nowMonth - this._releaseMonth) === 0 && (this._nowDate - this._releaseDate) > 1:
                                return `${this._releaseMonth + 1}/${this._releaseDate} ${this._releaseHour}:${this._releaseMinutes}`; // 格式(11/25 11:25)

                            case (this._nowMonth - this._releaseMonth) === 0 && (this._nowDate - this._releaseDate) === 1:
                                return `昨天 ${this._releaseHour}:${this._releaseMinutes}`; // 格式(昨天 11:25)

                            case (this._nowMonth - this._releaseMonth) === 1 && this._nowDate === 1:
                                switch (true) {

                                    case (this._releaseMonth === 0 || 2 || 4 || 6 || 7 || 9 || 11) && this._releaseDate === 31:
                                        return `昨天 ${this._releaseHour}:${this._releaseMinutes}`; // 格式(昨天 11:25)

                                    case (this._releaseMonth === 3 || 5 || 8 || 10) && this._releaseDate === 30:
                                        return `昨天 ${this._releaseHour}:${this._releaseMinutes}`; // 格式(昨天 11:25)

                                    case (this._releaseMonth === 1) && this._releaseDate === 28 || 29:
                                        return `昨天 ${this._releaseHour}:${this._releaseMinutes}`; // 格式(昨天 11:25)

                                    default:
                                        return `${this._releaseMonth + 1}/${this._releaseDate} ${this._releaseHour}:${this._releaseMinutes}`; // 格式(11/25 11:25)
                                }
                        }
                }
        }
    }
}