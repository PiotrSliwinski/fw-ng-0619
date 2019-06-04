// item.type.ts
// { desc: "Blueberries", price: 2.45,size:"200g", quantity:2 }

interface Item{
    desc:string;
    price:number;
    size:string;
    quantity:number;
    code:string;
}

interface Basket extends Item{
    id:number;
}

export {Item,Basket}
