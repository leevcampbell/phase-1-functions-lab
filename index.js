// Code your solution in this file!

const officeLocation = 42

function distanceFromHqInBlocks(num){
    let personsLocation = num 
    if(num < officeLocation) {
        return (officeLocation - num)
    } else {
        return (num - officeLocation)
    }
}

// tried 2nd function without num in parameters and didn't work first time. 
//probably missed something in syntax
// But if i'm using first function result in a seond function, do the parameters have to match the parameters in the first function?

function distanceFromHqInFeet(num){
    distanceFromHqInBlocks(num)
    let distanceInBlocks = distanceFromHqInBlocks(num)
    let distanceInFeet = distanceInBlocks * 264;

    return distanceInFeet
   
}

function distanceTravelledInFeet(start, end) {
    if (start >= end){
        return (start - end) * 264
    } else if (start <= end){
        return (end - start) * 264
    }
}

function calculatesFarePrice(start, end){
    let feetTraveled = distanceTravelledInFeet(start, end)
    if (feetTraveled <= 400) {
        return 0
    }
    if (feetTraveled > 400 && feetTraveled < 2000) {
    let price = (feetTraveled - 400) * .02
        return price}        
    if (feetTraveled < 2500 && feetTraveled > 2000)
        return 25
    else (feetTraveled > 2500)
        return 'cannot travel that far'
   
      }
    
