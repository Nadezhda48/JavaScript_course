const value = 1;
let textValue = '1';
var userLevel;

for(i= 0; i<=12; i++){
    if (i <= 6) {
        userLevel = "Low level"
    } else if (i >= 7 && i <= 9) {
        userLevel = "Middle level"
    } else if (i > 9) {
        userLevel = "High level"
    }
    console.log(userLevel)
}

if(value === textValue){
    console.log("The same value and type")
} else if(value == textValue){
    console.log("The same value")
} else {
    console.log("The values is a different")
}

const age = 12
const verifyAge = age >= 18 ? "You can drive a car" : "You can*t drive a car"
console.log(verifyAge)

month = "March"

switch(month){
    case "December":
    case 'January':
    case 'February':{
        console.log("The season is winter")
    } break
    case 'March':
    case 'April':
    case 'May':{
        console.log("The season is spring")
    } break
    case 'June':
    case 'July':
    case 'August':{
        console.log("The season is summer")
    } break
    case 'September':
    case 'October':
    case 'November':{
            console.log("The season is autumn")
    } break
}