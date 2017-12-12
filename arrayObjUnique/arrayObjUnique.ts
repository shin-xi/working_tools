class ArrayObjUnique {
    constructor(private items: any[],
                private filterBy: string) {
    }

    filter() {
        if (!this.items) return [];
        const flags = [], output = [];

        for (let i = 0, len = this.items.length; i < len; i++) {
            if (flags[this.items[i][this.filterBy]]) continue;
            flags[this.items[i][this.filterBy]] = true;
            output.push(this.items[i]);
        }

        return output
    }
}


