let age = 10;
age = 15;

console.log(age)

let red = 20;
let redd = "20";
let reddd = red + redd;

console.log(reddd)

const cd = "hello brother";

console.log(cd)

let l = "name";
prompt(l)

let wh = "phone";
prompt(wh)

let hh = "address";
prompt(hh)





let a = 5;
let b = 5;

let c = a + b;
let z = a * b;

let t = z / b;

a++;
a--;
let o = z % a;
console.log(o)

let ab = true;
let ba = false;

let bbaa = ab > ba;
console.log(bbaa)

let ageу = 15;




if(ageу > 25) {
    console.log("взрослый")
} else {
    console.log("подросток")
}




function squareArray (numbers) {
    const result = [];

    for(let iii = 0; iii < numbers.length; iii++) {
        result.push(numbers[iii] ** 2);
    }

    return result;
}


const squares = squareArray([1,2,3,4,5])

console.log(squares)




let counter = 0; 

counter += 5;

console.log(counter)



let text = "10";
let ttxx = 99;

let xxtt = text == ttxx

console.log(xxtt)


const arr = ["apple","banana","cherry"];

for(let aii = 0; aii < arr.length; aii++) {
    console.log(arr[aii])
}



let myage = 25;
let isAdult = (age >= 18) ? "true" : "false";

console.log(isAdult)


let vozrast = "18";

const getage = prompt("ведите ваш возраст");

let reslt = (getage === vozrast) ? console.log("вы можете пройти на тестирование на вождение!") : console.log("вы не можете пройти на тестирование на вождение!")

console.log(reslt)




let devoir = prompt("");

if (devoir === "") {
  console.log("Строка пустая");
} else {
  console.log("Строка не пустая");
}

function sum (ww, mm) {
    return console.log(ww + mm)
}

sum(35, 35)

function printNumber (cv) {
    for(let uui = 1; uui <= cv; uui++) {
        console.log(uui)
    }
}

printNumber(5)



function printMessage (message, mss) {
    for(let you = 0; you < mss; you++) {
        console.log(message)
    }
}

printMessage("привет", 3)