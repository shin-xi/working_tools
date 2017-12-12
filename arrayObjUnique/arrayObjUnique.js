var ArrayObjUnique = /** @class */ (function () {
    function ArrayObjUnique(items, filterBy) {
        this.items = items;
        this.filterBy = filterBy;
    }
    ArrayObjUnique.prototype.filter = function () {
        if (!this.items)
            return [];
        var flags = [], output = [];
        for (var i = 0, len = this.items.length; i < len; i++) {
            if (flags[this.items[i][this.filterBy]])
                continue;
            flags[this.items[i][this.filterBy]] = true;
            output.push(this.items[i]);
        }
        return output;
    };
    return ArrayObjUnique;
}());
