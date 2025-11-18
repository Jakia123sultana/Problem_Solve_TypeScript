type Product={
    name:string;
    price:number;
    quantity:number;
    discount?:number;
};

const calculateTotalPrice= (products: Product[]): number=>{
const total = products
.map(product=>{
    const base = product.price* product.quantity;
    let discountPercent =product.discount?? 0;
    if(discountPercent < 0){
        discountPercent=0;
    }else if(discountPercent>100){
        discountPercent=100;
    }
const finalPrice = base * (1 -discountPercent/100);
return finalPrice; 
});
return total.reduce((sum,val)=>
    sum + val, 0)
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));