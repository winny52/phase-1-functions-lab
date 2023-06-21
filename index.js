function distanceFromHqInBlocks(pickup) {
    if(pickup > 42) {
        const distance = pickup - 42;
        return distance;
    }
    else if(pickup < 42) {
        const distance = 42 - pickup;
        return distance;
    }
}


function distanceFromHqInFeet(hq) { 
     const feet = distanceFromHqInBlocks(hq) * 264;
     return feet;    
}

function distanceTravelledInFeet(start, destination) {
    if(destination > start){
        const dist = destination - start;
        return dist * 264;
    } else if (destination < start){
        const dist = start -destination;
        return dist * 264;
    }

}

function calculatesFarePrice(start, destination) {
    const distTravelled =  distanceTravelledInFeet(start, destination);
    if(distTravelled <= 400){
        const fareDollar = 0;
        return fareDollar;
    }
    else if(distTravelled >400 && distTravelled < 2000) {
        const fare = (distTravelled - 400) * 2;
        const fareDollar = fare/100;
        return fareDollar
    }
    else if(distTravelled > 2000 && distTravelled <= 2500){
        const fareDollar = 25;
        return fareDollar;
    }
    else if(distTravelled > 2500){
        return 'cannot travel that far';
    }
  }
console.log(calculatesFarePrice(43, 44));