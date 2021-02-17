// comment
//console.log('Hello World');
let name = 'Bach';
console.log(name);

// Cannot be a reserved keyword
// Should be meaningfull
// Cannot start with a number (1name = error s)
// Cannot contain a space hyphen (-)
// le FirstName "camel notation" pirvelis shemdgomi yvela sityva didi asoia
// Are case-sensitive

let firstName2 = 'Bach' , lastName = 'S'; // magram uketesi praqtikaa cal calke xazze dawera

const interestRate = 0.3;

console.log(interestRate);

////////////////// Primitive  or Value Types///////////////////////
let name2 = 'Ba'; // String literal
let age2 = 30;   //  Number literal
let isApproved = false; // Boolean literal
let firstName = undefined; // igivea let firstName;
let selectedColor = null;
///////////////////////////////////////////////////////////////
 

// javascripti dinamic language ea.  let sheidzleba tipi sheecvalos. typeof gvachvenebs ra tipia


// object ase ganisazRvreba.. {} amas qvia object literal
let person = {
// aq iwereba key value
// sadac key aris property
    name: 'Bach',
    age: 31
}; 

console.log(person);

// Object is values shecvla. 2 gzaa

// 1 Dot notation
 person.name = 'John';
// bravket notation
 person['name'] = 'Mary';
 let selection1 = 'name';
 person[selection1] = 'kukuri';  // av versias viyenebt dinamiurad tu gadavcemt key s

 console.log(person.name);


 //// OBJETCS ARRAY
 let selectedColors = ['red','blue'];  // [] aRnishnavs array
 console.log(selectedColors);

 console.log(selectedColors[0]); // arrays pirveli elementi

 selectedColors[2] = '444';  // array shi damateba
 console.log(selectedColors);
 console.log(selectedColors.length); // arrays properti length



 /// FUNCTIONS

 function greet(name) //(funqciis input). name marto am funqciashi iqneba xelmisawvdomi. a name aris parametri.
 {
     // body of the function
     console.log('Hello ' + name + '  from function');
 }  // functions ase deklarirebuls ar chirderba ; dawera boloshi

 // am function is gamodzaxeba. es funqcia performing task
 greet('Jondo') ; // es ukve statementia da l Wirdeba  .  aq jondo aris parametris value
 greet('kukuri') ; 

 function greet2(name,lastname)
 {
     console.log('Hello ' + name + ' ' + lastname);
 }  

 greet2('kukuri') ; 
 greet2('kukuri','kakauridze') ; 

//Calculate a value and returns value
function square(number) {
 return  number * number;
}

square(2);

let number2 = square(7);

console.log(number2);

/////////////// aritmetikuli operatorebi ////////////////////////
let x = 10;
let y = 2;
// addition , subtraction, multiplication, division, 
console.log(x + y);  // x + y aris expresion anu rac warmoqmnis values
console.log(x % y);  //reminder up divizion ???
console.log(x ** y); // exponentiation  javascriptis aritmetikuli operaciia 

// ori axali operatoria
console.log('Increment Decrement'); 
// Increment (++)
console.log(++x);  // erts umatebs. tu win uweria  (++x) mashin jer umatebs da mere achvenebs. tu (x++) meere uweria mashin jer achvenebs da mere umatebs

//Decrement   igivea rac zemota
console.log(--x); 
console.log(x--); 
console.log(x);



/////////////// asigment operatorebi ////////////////////////

x += 5;  //igivea  x = x + 5;
x *= 3; // igivea x =x *3;  yvela aritmeticul operacias aqvs msgavsi shortcut i


////////////// comparison operators ///////////////////////////////////////
////// relation 
x = 1;
console.log(x >= 0); // pasuxi boolean ia

////// Equality 
console.log(x === 1); 
console.log(x !== 1); 

// Strict Equality (Type + Value ) unda emtxveodes anu type sac adarebs
console.log(1 === 1);  // true
console.log('1' === 1);  // false

//Lose Equality
console.log(1 == 1);  // true
console.log('1' == 1);  // true.   ro naxa pirveli stringo meorec gadaiyvana stringshi
console.log(true == 1); // true.



///Ternary or conditional operator

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
// Tu es piroba points > 100 sworia mashin abrunebs golds Tu ara silvers
console.log(type);

//Logical AND (&&)
console.log('Logical AND:' + true && true);
console.log(false && true);

//Logical OR (||)
console.log('Logical OR: ' + false || true);

//Logical NOT (!)
let eligibleForLoan = true;
let applicationRefused = !eligibleForLoan;
console.log('Logical NOT: ' + applicationRefused);

// false || true   aris true
// false || "kukuri"   aris kukuri
// false || "1234"   aris 1234

// falsy  (sxvaa vidre false)   values: undefined , null , 0, false, '',  NaN

// Truthy --> nebismieri rac falsy araa

// false || 1 || 2  dagvibrunebs 1, pirvelive truthy s. // Short-circuiting  qvia amas


//BitWise operators
// 1      = 00000001  (8bit , 1 byte) binary format
// 2      = 00000010
// Result = 00000011  es iqneba 3 (Bitwise OR egre adarebs)
console.log(1|2);  // Bitwise OR aris |. amis pasuxic iqneba 3. adarebs zeda da qveda xazs da tu 1 shexvda sadme resultshi im adgilad 1 tovebs
console.log(1&2);  // Bitwise AND aris |. amis pasuxi iqneba 0. adarebs zeda da qveda xazs da tu 0 shexvda sadme resultshi im adgilas 0 tovebs. 
//Result = 00000000


//Precedence operators. shesrulebis rigirtoba. () pirvel shesrulebas iwvevs
let x1 = (2+3) * 4;
console.log(x1);