//variables

/* console.log("hi guys this is lenin");

let name = "lenin kumar s";

let age = "35", 
current_status="studying";

console.log(age, "\n",current_status); */

//constant

/* const nAME = '05.05.2000';

const age = calAge(nAME);

console.log(age); */

//number data type

/* let nAME =  "lenin kumar s"
console.log(typeof nAME);
console.log(nAME);

 nAME = '05.05.2000';
console.log(typeof nAME);
console.log(nAME); */

//number data type...

// let age = 65265.526;

// console.log(typeof age);

// let infi = Infinity;
// let neginfi = -Infinity;

// console.log(typeof infi);
// console.log(typeof neginfi)

//string data type...

// let a = 348, b =  39834;

// let embed = ` sum of 348 + 39834 is ${a+b}`;

// console.log(embed);

// boolean  operator

// let name1 = true;
// console.log(name1);

//null operator

// let name11 = null;
// console.log(`4. ${name11} `);

//type conversion 

// console.log("type conversion...")

// let t = 34;
// let convert = t--;
// console.log(convert);

// let u = 34;
// let convert1 = u++;
// console.log(convert1);

// let a = 12;
// let b = 13;

// let c = ++a + b--;

// console.log(c);

//type conversion

// console.log(null < 0);
// console.log(null > 0)
// console.log(null <= 0)
// console.log(null >= 0)
// console.log(null == 0)

//conditions 

// let lenin = (54 > 93)? 'what you want' : 'fuck you guys...';

// console.log(lenin);

//switch case 

/* switch (2){
    case 1:
        console.log("hello");
        break;
    case 2:
        console.log("i am ");
        break;
    case 3:
        console.log("lenin kumar");
        break;
    default:
        console.log("nobody...");
}
 */

//functions....

/* let i = 5, j = 34;

function process( a , b){
    let c = `"i will fuck the world with my coding knowledge..." ${a + b}`;

    console.log(c);
}
process( i, j); */

//finding odd or even

/* function oddorEven(a){
    if(a % 2 == 0){
        console.log("the given number is even....");
    }else if(a % 2 == 1){
        console.log("the given number is odd.....");
    }else if(a < 0){
        console.log("the given number is negative....");
    }else{
        console.log("the given number is something else....");
    }
}

oddorEven(9834.34); */

/* //callback

function process(operation,i , j){
    return operation(i, j);
}

let add = ( i , j ) => ( i + j);

let sub = ( i , j ) => ( i - j);

console.log(process(add, 2, 5)); */

/* //trivia quastion (arrow function)

let sum = (m) => ( m*5);

console.log(sum(10)); */

//objects ...

/* let modeOfRide = "off road , on road";

let bike = {
    Name : 'ROYAL ENFEILD',
    Modal : 'clasic 350',
    type : modeOfRide,
    "max milage" : 45, 
};

bike['year'] = 2018;

console.log(bike); */

//object 

/* let war = {
    base1 : "iran",
    base2 : "isrel"
};

delete war.base1;

war.base2 += 'pakistan';

console.log(war); */

//object reference

/* let bio = {
    name : 'lenin',
};

function User(a){
    this.name = a;
}

 let name1 = new User('lenin');
 let name2 = new User('rammmmm');

 console.log(name1, name2); */

 //trivia question...

/*  //map ...

 let map = new Map();

 map.set( 1, 'lenin kumar.S')
    .set( 2, 'becool jason ...');


console.log(map)

// for(key of map.keys){
//     console.log(key);
// }   */

//set...

/* //class ...

class User{

    #name;
    #age;
 
    constructor(name,age){
        this.#name = name;
        this.#age = age;
    }

    show(){
        console.log('name', this.#name);
        console.log('age', this.#age);
        
    }

    get name(){
        return "name:"+ this.#name;
    }

    set name(name){
        if(name == "lenin kumar"){
            this.#name = 'Becool';
        }
        else{
            this.#name = name;
        }
    }

}

let result = new User('lenin', 25);
result.name = 'lenin kumar'
// result.show();
console.log(result.name) */

//error handling ...

let a = "leninkumar";

try{
    console.log(a);
}catch(error){
    console.log("this is whole different from the world....")
}










