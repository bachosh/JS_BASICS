// Function Declaration

walk(); ///aq winaswar shegvidzlia gamodzaxeba // hoisting qvia amas. javascripti yvela funqciis declaracias failis dasawyisshi wevs avtomatirad
function walk() {
    console.log('walk');
}

// named function exprecion. winaswar ar shegvidzlia
let run =function walk() {
    console.log('run');
};

// Anonimus function exprecion
let run2 =function() {
    console.log('run2');
};
run();

//// arguments
function sum(a,b) {
    console.log(arguments); /// yvela funqcias aqvs arguments parametri. avtomaturad iRebs.
    return a+b;
}

console.log(sum(1,3,4,66,7,8));  // bevri argumentis chasma shegvidzlia. gamoiyenebs marto pirbel ors. shecdomas ar wers.
console.log(sum(1));  // naklebi argumentis chasma shegvidzlia. aq daabrunebs NaN

function sum2() {
    let total = 0;
    for (let value of arguments)
    total += value;
    return total;
}

console.log('sum2:' + sum2(1,3,4,66,7,8)); 


function sum3(...args) {  /// ... nishnavs rest operatorss
    console.log(args);  /// aset shemyxvevashi abrunebs arrays shemdgars am argumentebisgan. mag:  [ 1, 3, 4, 66, 7, 8 ]
    return args.reduce((a,b) => a+b);
}

console.log(sum3(1,3,4,66,7,8));


function sum4(discount,...prices) {  ///  bolo parametri unda iyos rest 
    const total = prices.reduce((a,b) => a+b);
    return total * (1 - discount);
}

console.log(sum4(0.5,10,20));


function interest(principal,rate = 3.5, years = 5) // default values. defauyltis mere ar unda iyos defaultis gareshe parametri
 {
     return principal * rate/100 * years;
 }

console.log(interest(5000));

function interest2(principal,rate = 3.5, years ) // default values.  cudi variantia
  {
      return principal * rate/100 * years;
  }
console.log(interest2(5000,undefined,5));

/// Getters and setters
const person = {
    firstName: 'bach',
    lastName:  'sss',
    fullName() { // read onlya . garedan ver sheucvlit mnishvnelobas
        return `${person.firstName}  ${person.lastName}`
    }
};

console.log(person.fullName());


/// Getters
const person2 = {
    firstName: 'bach',
    lastName:  'sss',
    get fullName() { // Getters
        return `${person.firstName}  ${person.lastName}`
    }
};

console.log(person2.fullName); // () damatebiti es frchxilebi agar gvchirdeba. geter

//setters  . obieqtis funqciis cvlileba
const person3 = {
    firstName: 'bach',
    lastName:  'sss',
    set fullName(value) { // setter
        if (typeof value !== 'string')
          throw new Error('Value is not a string.'); // rodesac throw aketeb exeptenia
        const parts = value.split(' ');
        if (parts.length !==2)
           throw new Error('Enter a first and last name');
        this.firstName = parts[0];  
        this.lastName = parts[1];
    }      
};

person3.fullName = 'J Lo';
console.log(person3);

// error handle

try {
    person3.fullName = 's d'; 
}
catch (e) {
    console.log(e);
    //alert(e);
}

//// local and global scoping
{
    const message = 'hi';  // es constanti marto {} shignit aris gansazRvruli
}

const color = 'red'; // es globaluri constantia

function start()
{
    const message = 'hi'; 
    const color = 'blue'; // es  lokaluria igive saxeliT da amis mnishvneloba gamova start() funqciashi. gadaawers
    console.log(color);
}

start();
//////////////////////////var  let const////////////////////////////////////////
// var function-scoped variables
// let, const => block-scope variables   ES6

// var attach to window object (cudia). let ara.  

//globaluri funqciebic window objects shedis


//// this //////////////////////////////////////////
// this miutitebs obieqtze romelshic es funqcia sruldeba (tu funqcia obieqtis nawilia mashin methods vedzaxit)
// method -> obj
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};
video.play();

video.stop = function() {
    console.log(this);
};

video.stop();

// function -> global (window , global)  chveulebrivi funqcia miutitebs globalur obieqtze
function playVideo() {
    console.log(this);   
}

//playVideo();

//constractor function this

function Video(title) {
    this.title =title;
    console.log(this);   
}

const v= new Video('kukuri'); // {}.. am shemtxvevashi this miutitebs  tavidan cariel objectze.


const kukuri = {
    title: 'a',
    tags: ['1','b','c'],
    showTags() {
        this.tags.forEach(function(tag) { 
            console.log(tag);    
            ///console.log(this.title, tag);   am variantshi radgan  orEach am obieqtis funqcia araa rogoricaa showTags  da
            // this callback funqciashia  miutitebs globalur obieqtze window ze. da ar imushavebs
        });
    }
};

kukuri.showTags();


const kukuri2 = {
    title: 'a',
    tags: ['1','b','c'],
    showTags() {
        this.tags.forEach(function(tag) { 
          console.log(this , tag)
        }, this.title ); // aq this aris forEach meore parametri romelic miutitebs kukuri2 objects
    }
};
kukuri2.showTags();

/// kidev erti varianti this chvenebis globalur funqciashi

const kukuri3 = {
    title: 't3',
    tags: ['a','b','c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) { 
          console.log(self.title , tag)
        }, this.title ); // aq this aris forEach meore parametri romelic miutitebs kukuri2 objects
    }
};
kukuri3.showTags();



/// kidev erti varianti this chvenebis globalur funqciashi

playVideo.call({name: 'kuku',lastName: 'bubu'},1,2,33,4); /// call is parametria this cvladis mnishvneloba. call shi "," e ti gamoyofil shemdeg parametrebs gadavcemt
playVideo.apply({name: 'kuku',lastName: 'bubu appaly'},[1,2,3,55,667]);    // xolo apply shi array ti gadavcemt shemdeg parametrebs.       
const fn = playVideo.bind({name: 'kuku',lastName: 'bubu bind'},[1,2,3,55,667]);  // es axal funqcias aketebs
fn();
// aq samive funqciashi 1 parametria this mnishvneloba
const kukuri4 = {
    title: 't3',
    tags: ['a','b','c'],
    showTags() {

        this.tags.forEach(function(tag) { 
          console.log(this.title , tag)
          }.bind(this));  /// amiti forEach funqcias bind s uketebt da globalur this vcvlit  kukuri4 is this it
    }
};
kukuri4.showTags();
//// kidev erti gzaa arrow funqcia. romelic avtomaura utitebs obieqtis this aset shemtxvevebshi
const kukuri5 = {
    title: 't3 arrow',
    tags: ['a','b','c'],
    showTags() {

        this.tags.forEach(tag => { 
          console.log(this.title , tag)
          });
    }
};
kukuri5.showTags();