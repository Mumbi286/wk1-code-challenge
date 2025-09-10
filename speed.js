//input as, the car's speed as 80km and want to see the condtions
let enterSpeed = Number(prompt("Enter the speed km/h"))
let speed = Number(enterSpeed)

if(Number.isNaN(speed)){
    console.log("Invalid input")
}
else if(speed < 70){   //checks the condition if it is more than 70
    console.log("OK")
}else  {  //calculate the excess speed & calculating the point for every 5km/s above 70,add 1 point 
    let excess = speed - 70;
    let points = Math.floor(excess / 5)  //math.floor returns the value rounded down to the nearest integer

if(points > 12 ){
    console.log("License suspended")
}else{
    console.log(`points:${points}`)// string interpolation lets one dynamically insert values in the middle of a string.
}
}