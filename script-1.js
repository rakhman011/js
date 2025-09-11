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


let PeRsone = {
    NaMe: "antonyo",
    aGeE: 20,
    travaille: "developer",
}
console.log(PeRsone)

let cAr = {
    brand: "toyota",
    model: "camry",
    year: 2020,
    color: "blue"

}
console.log(cAr)

function perrrsone (nMe, laGe, jOb) {
    this.nMe = nMe;
    this.laGe = laGe;
    this.jObe = laGe; 
}

let peRSSOn10 = new perrrsone ("antone", 28, "front")

let Voiture = {
    marque: "bmw",
    lamodel: "m5",
    date: 2018
}
Voiture.marque = "mercedes";
Voiture["lamodel"] = "GLE";
Voiture.date = 2020;

console.log(Voiture)


let Francee = {}

Francee.ville = "paris"
Francee.Region = 92;

console.log(Francee)



let chien = {};
chien.nOm = "boubou";
chien.LaGE = 3;
delete chien.LaGE; 

console.log(chien)

let humain = {
    lenom: "antoine",
    monage: 20,
    greet: function() {
        console.log("salut mon nom et "+ this.lenom);
    }
}

humain.greet();

let calculator = {
    add: function(uuit, bcd) {
      return uuit + bcd;
    },
    subtract: function(a, bcd) {
      return uuit - bcd;
    },
    multiply: function(a, bcd) {
      return uuit * bcd;
    },
    divide: function(uuit, bcd) {
      if (bcd === 0) {
        return "Ошибка: деление на ноль";
      }
      return uuit / bcd;
    }
  };



  let unevoiture = {
        staRt: function() {
            console.log("Машина запущена");
        },
        sTop: function() {
            console.log("Машина остановлена")
        }
  };

unevoiture.staRt();
unevoiture.sTop();


let humai = {
    lenomM: "",
    monageE: 0,
    greett: function() {
        console.log("salut mon nom et "+ this.lenomM);
    }
}

let humai1 = Object.create(humai);
humai1.lenomM = "marine";
humai1.monageE = 19;
humai1.greett();

let humai2 = Object.create(humai);
humai2.lenomM = "juli";
humai2.monageE = 29;
humai2.greett();



const chiffre = [1,2,3,4,5];

chiffre.pop()
chiffre.push(5)
chiffre.shift()
chiffre.unshift(0)

console.log(chiffre)

const chiffree = [1,2,3,4,5];

const subArray = chiffree.slice(1,4)

console.log(subArray);

const Chiffre = [1,2,3,4,5,];
Chiffre.splice(1, 1)
Chiffre.splice(1, 0, 6, 7)
console.log(Chiffre);

const CHiffre = [1,2,3,4,5];
const letters = ['a','b','c'];
const combine = CHiffre.concat(letters);

console.log(combine);

const Numberss = [1,2,3];

const doublesNumber = Numberss.map(function(nuMber){
    return nuMber * 2;
})

console.log(doublesNumber);

const chffr = [1,2,3,4,5,6];

const evenNumbers = chffr.filter(function(chffr){
    return chffr % 2 === 0;
})

console.log(evenNumbers);

const cHffr = [1,2,3,4,5];
const sUm = cHffr.reduce(function(accumliator, currentValue){
    return accumliator + currentValue;
}, 0)

console.log(sUm);

const frukt = ["banan", "apple", "cherry"];

frukt.sort()
console.log(frukt);

const chifre = [1,2,3,4,5,6,7,8,9,10];
chifre.forEach(function(chifre){
    console.log(chifre)
})

const stR = ["lili","marin","anjelina","diana"]

const result = stR.find(function(naameE){
    return naameE === "diana";
})

console.log(result);

const page = document.getElementById('page')

page.addEventListener('dblclick', () => {
    console.log('deux');
})

document.addEventListener('keyup', (event) =>{
    console.log('resultat : ' + event.key);
})