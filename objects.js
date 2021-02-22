// OBJECTS

// const circle = {
//     radius: 1,
//     locations: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {console.log('draw');}
// };

// circle.draw();

//factory Functions ////////////////////////////////////////////////////////////////////////////////////////////////

function createCircle(radius) {
    return {
            radius, // igivea rac radius: radius, roca key da value ertia
            draw() { console.log('draw'); } // igivea  draw: function() {console.log('draw');} object shi funcxia shegvidzlia movacilot
    };
}

const circle1 = createCircle(1);
console.log(circle1);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Constructor Function.

function Circle(radius) {
 this.radius = radius;
 this.draw = function() {
    console.log('draw Constructor Function');  
 }
}

const circle = new Circle(1);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/// obieqtebi dinamiuria
const circle3 = {
    radius: 1
};

circle3.color ='yellow';
circle3.draw = function() {}

//delete circle3.color;
delete circle3.draw;
console.log(circle3);

////////////////////////////////////////////////////

//funqcia obieqtia
// const Circle1 = new Function ('radius',    `this.radius = radius;
//                                             this.draw = function() {
//                                             console.log('draw Constructor Function');  
//                                             }`
//                              )

// const circle7 = new Circle1(1);
const another = new Circle(1);


//////////////////////////////////////////////////////////////////////////////////////////////
function Wre(radius) {
    this.radius2 = radius;
    console.log('aaaa'+ radius);
    this.draw2 = function() {
       console.log('draw2 Constructor Function');  
    }
   }


// .call funqciis gamodzaxebaa. pirveli argumenti this. arguments miuTiTebs. 
// da carieli shegvyavs {} romelic avtomaturad sheicavs Wre funqciis this.radius da this.draw 
// meore argumenti aris Wre funqciis radius si, eg xeliT shegvyavs, bevri rom qonoda bevrs sheviyvandit
Wre.call({},3); // es zustad igive brdzanebaa rac const another = new Wre(1);
// this. globalur obieqtze miutitebs romelsac window qvia  . igivea ra c Wre.call(window,1) 
//Wre.apply({},[1,2,3])  es igivea rac call, ubralod xeliT Sesatani argumentebi array t shegyavs cal calke mdzimit gamoyofili chaweris magivrad
const another2 = new Wre(1);



//////// values vs reference types/////

// value types (primitives):   Number, String , Boolean, Symbol,undefined,null
// Reference types: Object, Function, Array

//primitives are independent
let x =10;
let y = x;
x = 2;
console.log(x,y);

// obieqtebshi icvleba
let ox = {value: 10};
let oy = ox;
ox.value = 20;
console.log(ox,oy); // aq mivigebt 20 s. obieqtebi tolobisas reference misamarts utoldeba. 
//shignit rom icvleba mnishvneloba misamarti igive rcheba da yvela vinc am misamarts utoldeba imasac ecvleba mnishvneloba 
//


for (let key of Object.keys(circle)) ///  keys gamoaqvs obieqtis key
  console.log(key);

for (let entries of Object.entries(circle)) ///  entries gamoaqvs obieqtis key value wyvili
  console.log(entries);  

// if given property exists ig given object ?
if ('radius' in circle) console.log('YES');
//////////////////////////////////////



// cloning object
console.log(circle);


const another3 = {};
for (let key in circle)
  another3[key] = circle[key]

console.log(another3);  

// igives aketebs
const another4 = Object.assign({},circle)  /// aq shignit {} amashi akopirebs circle s mnishvnelobebs. ori obieqtis gaerianeba
console.log(another4);  

const another5 = Object.assign({ color: 'red' },circle)  /// tu {} davamatebt obieqts mashin am obieqts daamatebs circles mnishvnelobebs
console.log(another5);  

////igives aketebs ... spread operatori
const another6 = { ...circle};
console.log(another6);  


///  Math object aris javascriptis chashenebui obieqti ///////////////////

///  STRING ///////////// javascriptshi 2 stringia, primitive da object
let primString = 'hi';
const objString = new String('hi to all');  // raxan constractor funqciaa viyenebt new s
// primString. javascripti avtomaturad aRiqvavs rogorc obieqts da amatebs metods primitiv strings 

primString.includes("m");

// escape caracter
primString = 'hi my name is  \'kukuri\' \n axali xazi';
console.log(primString);

console.log(objString.split(' '));


//// template literals

// Object is literalia {}
// boolean ------- true, false
// Srting  --------'',""
// template --------``  es6 dan

let another8 = `This is my 
Second message
madloba`;
// `` gamoyenebiT shegiZlia daaformato texti zedmeti nishnebis gareshe
//asvene shegidzlia daamatp placeholderebi dinamiurad, aseve funqcia shegvidzlia gamovidzaxoT ${ } amit
const name1 = 'Bach'
another8 = `This is my ${name1}
Second message ${2 + 5}
madloba`;

console.log(another8);


/////////// Date Object //////////////////////////////////////////

const now = new Date();
const date1 = new Date(2018,0,24,9,0 );

console.log(date1,now);
let dateTmp = now.getDay(now);
console.log(dateTmp,now);
dateTmp = now.setDate(22);
console.log(dateTmp,
            now.toDateString(),
            now.toTimeString(),
            now.toISOString()   // backandtan es gamoiyeneba
            );


////// savarjishoebi ///////////////////////////////


// Factory function
function createAddress(street, city, zipCode) {
  return {
    street: street,
    city,
    zipCode
  };

}
let address = createAddress('aa','b','c');
console.log (address);

// constractor function. paskal notation
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address2 = new Address('aa','b','c');
console.log (address2);


let address3 = new Address('aa','b','c');

//or obieqts rom adareb === addres is smgavs mashin dardeba referance type da ara obietqis propertebi. 
//amitom calke funqcias vwert propertebis shesadareblad
function areEqual(address2,address3) {
  return address2.street === address3.street &&
     address2.city === address3.city &&
     address2.zipCode === address3.zipCode;
}

// check address2 and 3 are pointing to exact same object 
function areSame(address2,address3) {
  return address2 === address3;
}

let address4 = address2;

console.log (areEqual(address2,address3));
console.log (areSame(address2,address3)); 
console.log (areSame(address2,address4)); 