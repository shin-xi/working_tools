var HistoryRecord = /** @class */ (function () {
    function HistoryRecord(amount) {
        if (amount === void 0) { amount = 5; }
        this.amount = amount;
    }
    HistoryRecord.prototype.getHis = function () {
        var invHis = [];
        for (var i = 0, item = void 0; i < this.amount; i++) {
            item = localStorage.getItem("history-" + i);
            if (item !== null) {
                invHis.push(item);
            }
            else if (item === null) {
                return invHis;
            }
        }
        return invHis;
    };
    HistoryRecord.prototype.setHis = function (invHis) {
        this.removeHisAll();
        invHis = invHis.map(function (v) { return v.replace(/['\t]/g, '').replace(/\s*/g, ''); });
        invHis = Array.from(new Set(invHis.reverse())).reverse().filter(function (value) { return value !== undefined && value !== null && value !== ''; });
        if (invHis.length > 5) {
            invHis = invHis.slice(-this.amount);
        }
        for (var i = 0, item = void 0, len = invHis.length; i < len; i++) {
            localStorage.setItem("history-" + i, invHis[i]);
        }
        return this.getHis();
    };
    HistoryRecord.prototype.removeHisSingle = function (invHis, item) {
        delete invHis[invHis.findIndex(function (value) { return value === item; })];
        invHis = invHis.filter(function (value) { return value !== undefined; });
        this.setHis(invHis);
        return this.getHis();
    };
    HistoryRecord.prototype.removeHisAll = function () {
        for (var i = 0; i < this.amount; i++) {
            localStorage.removeItem("history-" + i);
        }
        return [];
    };
    return HistoryRecord;
}());
