function findIndexAll(stringValue, findValue) {
    let positions = [];
    let pos = stringValue.indexOf(findValue);

    while (pos > -1) {
        positions.push(pos);
        pos = stringValue.indexOf(findValue, pos + 1);
    }
    return positions;
}