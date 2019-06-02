
interface Shop{
	name:string;
	houseNumber:number;
	street:string;
	town:string;
	postCode:string;
}

interface Item{
	desc:string;
	price:number;
	size:string;
	quantity:number;
}

export { Shop,Item };
