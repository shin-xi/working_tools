"use strict";

function findIndexAll(stringValue, findValue) {
    var positions = [];
    var pos = stringValue.indexOf(findValue);

    while (pos > -1) {
        positions.push(pos);
        pos = stringValue.indexOf(findValue, pos + 1);
    }
    return positions;
}

//# sourceMappingURL=findIndexAll-compile.js.map