var userLevel;

for(let i = 0; i <= 12; i++){
    if (i <= 6) {
        userLevel = "Low level"
    } else if (i >= 7 && i <= 9) {
        userLevel = "Middle level"
    } else if (i > 9) {
        userLevel = "High level"
    }
    console.log(userLevel)
}

//--------------------------

const value = 1;
const textValue = '1';

if(value === textValue){
    console.log("The same value and type")
} else if(value == textValue){
    console.log("The same value")
} else {
    console.log("The values is a different")
}

//--------------------------

const age = 12
const verifyAge = age >= 18 ? "You can drive a car" : "You can*t drive a car"
console.log(verifyAge)

//--------------------------

month = "March"

switch(month){
    case "December":
    case 'January':
    case 'February':
        console.log("The season is winter")
        break;
    case 'March':
    case 'April':
    case 'May':
        console.log("The season is spring")
        break;
    case 'June':
    case 'July':
    case 'August':
        console.log("The season is summer")
        break;
    case 'September':
    case 'October':
    case 'November':
        console.log("The season is autumn")
        break;
    default:
        console.error("Sorry, you entered month is wrong!")
    
}

//--------------------------

const footwear = 4200;
const cap = 1300;
const jacket = 2100;
const blouse = 1000;
const jeans = 1100;
const birth = '29.02'
const promoCodeName = 'happy'
let goods = 0;

goods += footwear * 2 + cap + jeans + jacket

const discount = goods > 10000 || birth === '29.02'
    ? 70 
    : 10 

    const promoCode = promoCodeName === 'happy'
    ? 15 
    : 0 

const checkDiscount = discount + promoCode
console.log(`Congadulation! Your discount is ${checkDiscount}%`)

const priceInCheck = goods - (goods * checkDiscount / 100)
console.log(`To be paid is ${priceInCheck} gruvnya`)



