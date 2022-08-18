// // // // // // // let user = {
// // // // // // //     age: 10,
// // // // // // //     gender: 'male',
// // // // // // //     'where do you born?': 'Tehran'
// // // // // // // }

// // // // // // // for (const key in user) {
// // // // // // //     // console.log(key);
// // // // // // //     // console.log(user[key]);
// // // // // // // }

// // // // // // // let car = {
// // // // // // //     color: 'black',
// // // // // // //     model: 'Fiat',
// // // // // // //     'Year they  build': 1996,
// // // // // // // }

// // // // // // // for (const key in car) {
// // // // // // //     console.log(key);
// // // // // // // }

// // // // // // // console.log(car.model);
// // // // // // // console.log(car['model']);



// // // // // // // const user = {
// // // // // // //     name: 'Jane',
// // // // // // //     age: 25,
// // // // // // //     'eye color': 'brown',
// // // // // // //   };

// // // // // // // const user2 = user;
// // // // // // // user.age = 30;
// // // // // // // console.log(user2.age);

// // // // // // // const user3 = {};
// // // // // // // for (let key in user) {
// // // // // // //     user3[key] = user[key];
// // // // // // //   }

// // // // // // //   user.age = 40;
// // // // // // //   console.log(user3);

// // // // // // const user = {
// // // // // //     name: 'Jane',
// // // // // //     lastName: 'Doe',
// // // // // //     logIn: function () {
// // // // // //       console.log('Successfully logged in!');
// // // // // //     },
// // // // // //     fullName() {
// // // // // //       return `${this.name} ${this.lastName}`;
// // // // // //     },
// // // // // //   };
  
// // // // // //   user.logIn();
// // // // // // //   console.log(user.fullName());
  

// // // // // // // //  

// // // // // // let user = {
// // // // // //     name: 'Ermia',
// // // // // //     age: 10,
// // // // // // }

// // // // // // let tempKey = 'Hello';

// // // // // // if ( tempKey in user ){
// // // // // //     console.log('ERMIA');
// // // // // // }else {
// // // // // //     console.log('NOO it is not here');
// // // // // // }

// // // // // // if( user[tempKey]){
// // // // // //     console.log('Has value');
// // // // // // }else {
// // // // // //     console.log('NOO it is not here');
// // // // // // }

// // // // // // const myObject = {
// // // // // //     name: 'Mary',
// // // // // //     age:37,
// // // // // // }

// // // // // // const myCar = {
// // // // // // //     nameCar: 'Ford',
// // // // // // //     color:'white',
// // // // // // // }
// // // // // // // let something = {
// // // // // // //     name:"smh",
// // // // // // //     color: "red"
// // // // // // // }

// // // // // // // let somethingElse = {
// // // // // // //     name:"vvv",
// // // // // // //     color: "blue"
// // // // // // // }

// // // // // // // let user = {
// // // // // // //     ...something ,...somethingElse
// // // // // // // }
// // // // // // // console.log(user);


// // // // // // let object = {
// // // // // //     fruit: 'orange',
// // // // // //     vegetable: 'tomato'
// // // // // // }

// // // // // // console.log(Object.keys(object).length)

// // // // // // const myCar = {
// // // // // //     nameCar: 'Ford',
// // // // // //     color:'white',
// // // // // //     age:10,
// // // // // // }
// // // // // // let i=0;
// // // // // // for (key in myCar){
// // // // // //     i++
// // // // // // }
// // // // // // console.log(i);

// // // // // const myCar = {
// // // // //     nameCar: 'Ford',
// // // // //     color:'white',
// // // // //     age:10,
// // // // // }
// // // // // let newString ="{";
// // // // // for (let key in myCar){
// // // // //         let propVal = myCar[key];
// // // // //         newString+=(key+":"+propVal+",");

// // // // //         // newString+=propVal;
// // // // //     }

// // // // // newString += '}';
// // // // // console.log (newString);


// // // // // const result =  JSON.stringify(myCar);

// // // // // console.log(result);


// // // // const ARRAY = ['you', 'will', 'learn', 'js']

// // // // for(let key in ARRAY){
// // // //     console.log(key);
// // // //     if(key === 'you'){
// // // //         console.log("true")
// // // //     }else{
// // // //         console.log("false")
// // // //     }
// // // // }

// // // // // for (let index = 0; index < ARRAY.length; index++) {
// // // // //     const element = ARRAY[index];
// // // // //     if(ARRAY[index] === 'you'){
// // // // //         console.log("true")
// // // // //     }else {
// // // // //         console.log("false")
// // // // //     }
// // // // // }



// // // // // let array = ['you', 'are', 'awesome'];
// // // // // let hasValue = array.includes('awesome2');

// // // // // if(hasValue) {
// // // // //     console.log('Yes');
// // // // // } else {
// // // // //     console.log('No');
// // // // // }

// // // // const array = [1, 2, 3, 2, 3];
// // // // const array2 = [1, 2, 3, 2, 3];
// // // // const result = [];

// // // // for (const iterator of array2) {
// // // //     console.log(iterator);
// // // //     result.push(iterator);
// // // //     while (array.indexOf(iterator) > -1) {
// // // //         console.log(array.indexOf(iterator));
// // // //         array.splice(array.indexOf(iterator), 1);
// // // //     }
// // // // }
// // // // console.log(result);




// // // function getUnique(arr){
    
// // //     let uniqueArr = [];
    
// // //     // loop through array
// // //     for(let i of arr) {
// // //         if(uniqueArr.indexOf(i) === -1) {
// // //             uniqueArr.push(i);
// // //         }
// // //     }
// // //     console.log(uniqueArr);
// // // }

// // // const array = [1, 2, 3, 2, 3];

// // // // calling the function
// // // // passing array argument
// // // getUnique(array);




// // class Fruit {
// //     constructor(name, color, vitamin){
// //         this.name = name;
// //         this.color = color;
// //         this.vitamin = vitamin;
// //     }

// //     getVitamin(){
// //         return this.vitamin;
// //     }

// //     getFruitName(){
// //         return this.name;
// //     }
// // }

// // let apple = new Fruit('apple', 'green', 'C');

// // console.log(apple.getFruitName());


// class User{
//     constructor(Id, password) {
//         this.personalId = Id;
//         this.password = password;
//     }

//     isSameId(id){
//         return this.personalId === id;
//     }

//     checkPassowrd(password){
//         return password === this.password;
//     }
// }

// let ermia = new User('11111');

// let password = prompt('Give me password!');

// if ( ermia.checkPassowrd(password)){
//     console.log('Correct');
// }


// class Fruit {
//     constructor(name, color, vitamin){
//         this.name = name;
//         this.color = color;
//         this.vitamin = vitamin;

//     }

//     getVitamin(){
//         return this.vitamin;
//     }

//     getFruitName(){
//         return this.name;
// //     }

// //     setFruitName()
// // }

// // class Berry extends Fruit{
// //     constructor(name , color, vitamin){
// //         super(name, color, vitamin);
// //     }
// // }

// // let blueberry = new Berry('Blueberry', 'black', 'C');
// // console.log(blueberry.getFruitName());


// class Car {
//     constructor(year){
//         this.year = year;
//     }

//     getAge(now){
//         return now  - this.year;
//     }
// }

// let fiat = new Car(1996);

// console.log(fiat.getAge(2022));


// User => first name and last name 
//         return full name as String


// class User{
//     constructor(name, lastName){
//         this.name = name;
//         this.lastName = lastName;
//     }

//     get fullName(){
//         return this.name + " " + this.lastName;
//     }
// }

// var user = new User("Daria", "Opaiets");
// console.log(user.fullName);

Media => Tvshows, movies
        (episodes, seasons), (duration)

class Media {
    constructor(name, year, imdb){
        this.name = name;
        this.year = year;
        this.imdb = imdb;
    }
}

class TVshow extends Media{
    constructor(name,year,imdb,seasons, episodes){
        super(name,year,imdb);
        this.seasons = seasons;
        this.episodes = episodes;
    }
}

class Movie extends Media {
    constructor(name,year,imdb, duration){
        super(name,year,imdb);
        this.duration = duration;
    }
}