/**
 * selectFrom
 * @param lowerValue:number
 * @param upperValue:number
 * @returns {number}
 */

function selectFrom(lowerValue, upperValue) {
    let choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}