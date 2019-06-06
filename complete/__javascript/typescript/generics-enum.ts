
// ==================================================

// Generics 

class List<T> {

    private items = [];

    add = (item:T) => this.items.push( item );
    remove = ():T => this.items.shift()
}



let fruit = new List<string>();
fruit.add("apples");
fruit.remove();

let lottery = new List<number>();
lottery.add(41);
lottery.remove();

// ==================================================












// Enumerated types 

enum Direction { Left, Right, Up, Down };
let turn:Direction = Direction.Left;

enum Size { ExtraSmall, Small, Medium, Large, ExtraLarge };
let xl: Size = Size.ExtraLarge;

console.log( Size[0], typeof Size[0] );
console.log( Size.ExtraSmall, typeof Size.ExtraSmall );
