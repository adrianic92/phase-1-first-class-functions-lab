// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    let firstArray = [array[0], array[1]];
    return firstArray;
}

const returnLastTwoDrivers = function (array) {
    let lastArray = [array[array.length - 2], array[array.length -1]];
    return lastArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (integer) {
    return function (fare) {return integer * fare};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (array, twoDrivers) {
    return twoDrivers(array);
}