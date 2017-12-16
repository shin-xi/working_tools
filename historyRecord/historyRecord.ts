class HistoryRecord {

    constructor(public amount: number = 5) {
    }

    getHis(): any[] {
        let invHis: any[] = [];

        for (let i = 0, item; i < this.amount; i++) {
            item = localStorage.getItem(`history-${i}`);
            if (item !== null) {
                invHis.push(item);
            } else if (item === null) {
                return invHis;
            }
        }

        return invHis;
    }

    setHis(invHis, { amount = this.amount } = {}): any[] {
        this.removeHisAll();

        invHis = invHis.map((v) => v.replace(/['\t]/g, '').replace(/\s*/g, ''));
        invHis = Array.from(new Set(invHis.reverse())).reverse().filter((value) => value !== undefined && value !== null && value !== '');

        if (invHis.length > amount) {
            invHis = invHis.slice(-amount);
        }

        for (let i = 0, len = invHis.length; i < len; i++) {
            localStorage.setItem(`history-${i}`, invHis[i]);
        }

        return this.getHis();
    }

    removeHisSingle(invHis, item): any[] {
        delete invHis[invHis.findIndex((value) => value === item)];
        invHis = invHis.filter((value) => value !== undefined);

        this.setHis(invHis);

        return this.getHis();
    }

    removeHisAll(): any[] {
        for (let i = 0; i < this.amount; i++) {
            localStorage.removeItem(`history-${i}`);
        }

        return [];
    }

}