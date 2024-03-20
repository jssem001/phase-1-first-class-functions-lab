// Code your solution in this file!
const returnFirstTwoDrivers = function (scuba){
    let scuba2 
    scuba2 = scuba.slice(0,2)
    return scuba2
}
const returnLastTwoDrivers = function (scuba){
    let scuba2 
    scuba2 = scuba.slice(-2)
    return scuba2
}
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(factor){
    return function(fare){
        return fare*factor
    }
}
function fareDoubler(fare){
    return createFareMultiplier(2)(fare)
}
function fareTripler(fare){
    return createFareMultiplier(3)(fare)
}
function selectDifferentDrivers(drivers,newDrivers){
    let NewSet = drivers
    if(newDrivers==returnFirstTwoDrivers){
        NewSet = drivers.slice(0,2)
    }else{
        NewSet = drivers.slice(-2)
    }
    return NewSet
}