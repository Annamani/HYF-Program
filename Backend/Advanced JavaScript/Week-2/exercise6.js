import { teas as data } from "../teas.js";
const inventoryValue = data.reduce((sum,teaStock)=>{
    return sum + teaStock.pricePerGram*teaStock.stockCount;
},0);
console.log(inventoryValue);
