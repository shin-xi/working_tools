"use strict";

/**
 * selectFrom
 * @param lowerValue:number
 * @param upperValue:number
 * @returns {number}
 */

function selectFrom(lowerValue, upperValue) {
  var choices = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choices + lowerValue);
}

//# sourceMappingURL=selectFrom-compile.js.map