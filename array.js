const numbers = [3,4];

//numbers.  gamoitans yvela methods

// arrayshi damateba
  // boloshi
  numbers.push(5,6);
  //dasawyisshi
  numbers.unshift(1,2);
  //middle
  numbers.splice(2,0, 'monacemi1','monacemo2')   // numbers.splice(starting pozotions,delete count, 'monacemi1','monacemo2')

  console.log(numbers);

// find elements primitives  
const kukuriArray = [1,2,3,4,'b']

kukuriArray.indexOf('a'); /// tu ipova abrunebs indexs ( 0dan iwyeba) tu vera -1, type of ellemet matters!
kukuriArray.includes('b'); //true or false

kukuriArray.indexOf('a',99);  // meore argumenti saidan daiwyos dzebnas nishnavs yvelas aqvs

console.log(kukuriArray.indexOf('a'));
console.log(kukuriArray.lastIndexOf('b'));


// find elements referance types  
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// expected output: 12 . pirvelive elements daabrunebs romelic true iqneba, tu ara da undefined iqneba


const courses = [
    {id: 1, name: 'aa'},
    {id: 2, name: 'abb'},
];

const course = courses.find(function(course){
    return course.name === 'aa';
})

const course3 = courses.find(course => course.name === 'aa');  //arrow function versia


const course2 = courses.findIndex(function(course){
    return course.name === 'aa';
})
console.log(course);
console.log(course2);

////   arraydan gamokleba elementebis
numbers2 = [1,2,3,4];
// end
const lastNumber = numbers2.pop();
console.log(numbers2);
console.log(lastNumber);  // abrunebs bolo elements aq 4

//begining
const firstNumber = numbers2.shift();
console.log(numbers2);
console.log(firstNumber);

//middle 
numbers2 = [1,2,3,4];
numbers2.splice(2,2); //meoredan 2 washale
console.log(numbers2);


console.log('Empty arrays'); ///////////////////////////////////////////////////////////
// 1 metodi
let numbers3 = [1,2,3,4,5];
let sxvaNumber = numbers3;
numbers3 = [];  //asuftavebs, magram sxva mikiTxva Tu ar aris am arrayze garbage collectori ar miakiTxvas: magalitad
console.log(sxvaNumber); //igive datova radgan sxvagan ar vakiTxvadiT
console.log(numbers3); //aq carielia

// 2 metodi
let numbers4 = [1,2,3,4];
let sxvaNumber4 = numbers4;
numbers4.length = 0; // atruncatebs arrays

console.log(numbers4); 
console.log(sxvaNumber4);  /// am dros esec washala


// 3 metodi
let numbers5 = [1,2,3,4];
numbers5.splice(0,numbers.length); // orives asuftavebs


console.log('combining arrays'); ///////////////////////////////////////////////////////////
const firstArray= [1,2,3];
const secondArray = [1,2,4];

const combArray = firstArray.concat(secondArray);
console.log(combArray);

const slice = combArray.slice(2,4);  // amochris 2 dan 4 mde
//slice(2); 2 idan mere yvelas datovebs
//slice(); kopias gaaketebs
console.log(slice);

const objArray = [{id: 1}];
combArray2 = objArray.concat(secondArray );
objArray[0].id = 22;
const slice2 = combArray2.slice();
console.log(combArray2);
console.log(slice2);

/////////// ... spread array ////////////////////////////

combArray3 = [...objArray, ...secondArray ,'ku']; 
console.log(combArray3);