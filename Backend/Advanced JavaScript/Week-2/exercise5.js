import { teas as data } from "../teas.js";
const totalStock = data.reduce((sum, tea) => {
    return sum+tea.stockCount;
}, 0);

console.log(totalStock); // sum of all stockCount values

