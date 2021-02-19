// Constructor Function.

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
       console.log('draw Constructor Function');  
    }
   }

Circle.call({},1);
Circle.apply({},2);
const another2 = new Circle(5);

