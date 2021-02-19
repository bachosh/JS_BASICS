// if else //////////////////////////////////////////

// if (condition) {
//     statement1;
//     statement2;
// }
// else if (anotherCondition) {
//     statement3;
//     statement4;
// }
// else if (yetanotherCondition) 
//     statement5
// else
//     statement6

let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log('Good morning');
    console.log('Good morning 2');
}
else if (hour >= 6 && hour < 12)
     console.log('Good afternoon');
else 
     console.log('Good evenung');     


//// switch /////////////////////////////////////    

let role = 'guest';
   
switch (role) {
   case 'guest':
     console.log('Guest User');
     break;  // amit tu ar gavwyviteT  shemdeg case sac gaivlis miuxedavad imisa shesrulda tu ara piroba  
   
   case 'moderator':
     console.log('Moderator User');
     break; 
   default:
    console.log('Unknown User');         
}

///// LOOPS //////////////////////////////////////////////////////////

// for (initialExpresion; condition; incrementExpresion) {
//  statement1;
//  statement2;
// }

for (let i =0 ; i <5; i++){
    // console.log('Hellow World');
    if (i % 2 !== 0) console.log('Hellow World',i);  // i % 2 nishnavs i rom gavyot 2 ze nashti rac darcheba
}

let i = 0 ;  // es gansxvavdeba zeda if shi i sgan. is marto iq moqmedebs
while ( i <= 5)  // while for gansxvavdeba imit rom i s deklaracia garet xdeba
 {
    if (i % 2 === 0) console.log('Hellow World',i); 
    i++;
 }


//do while loop. gansxvaveba while aris rom es ertxel yvela variantshi eshveba. pirobas boloshi amowmebs
let i2= 0 ;  
do {
    if (i2 % 2 === 0) console.log('Hellow World',i2); 
    i2++;
} while ( i2 <= 5)  

/// for-in loop

const person = {  ///objects gamoiyeneba
    name: 'Bach',
    age: 33
}

for (let key in person)
 console.log(key, person[key]);


 const colors = ['red','green','blue']; //array
 for (let index in colors)
 console.log(index, colors[index]);

 // for-of  es6 versiashi  . arrayshi gamoiyeneb
 for (let color of colors) 
 console.log(color);


 for (let key of Object.keys(circle))
 console.log(key);



 // loops break continue


 i = 0 ;  
while ( i <= 10)  
 {
    //if (i === 5) break;  gamova loopidan
    //if (i === 5) continue;  gadava while ze dasawyisshi. next iteration
    console.log('Hellow World',i); 
    i++;
 }


 ////////////////// Demerit points

 Math.floor(1.7); // amrgvalebs minimumamde