function distanceFromHqInBlocks(enteredStreetNumber){
    if (enteredStreetNumber >= 42) {
        return enteredStreetNumber - 42
    } else {
        return 42 - enteredStreetNumber
    }
}
   
function distanceFromHqInFeet(enteredStreetNumber){
    if (enteredStreetNumber >= 42) {
        return (enteredStreetNumber - 42)*264
    } else {
        return (42 - enteredStreetNumber)*264
    }
}

function distanceTravelledInFeet(startingPoint, destination) {
    if (startingPoint >= destination){
        return (startingPoint - destination)*264
    }  else {
        return (destination - startingPoint)*264
    }
}

function calculatesFarePrice(start, destination) {
    if (start > destination) {
        let travelledInFeet = (start - destination)*264
        if (travelledInFeet <= 400) {
            return 0
        } else if (travelledInFeet > 400 && travelledInFeet <= 2000){
            return (travelledInFeet-400)*.02
        } else if (travelledInFeet > 2000 && travelledInFeet< 2500){
            return 25
        } else {
            return "cannot travel that far" 
        }
        
    } else {
        let travelledInFeet = (destination - start)*264
        if (travelledInFeet <= 400) {
            return 0
        } else if (travelledInFeet > 400 && travelledInFeet <= 2000){
            return (travelledInFeet-400)*.02
        } else if (travelledInFeet > 2000 && travelledInFeet< 2500){
            return 25
        } else {
            return "cannot travel that far" 
        }

    }
}