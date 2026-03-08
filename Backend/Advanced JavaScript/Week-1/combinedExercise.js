import {teas as data} from "./teas.js";
// Get the names of all green teas.
const greenTeas=data.filter(function(tea){
   return tea.type==="green"
       
}).map(function(tea){
    return tea.name;
})
//console.log(greenTeas);

//arrow function
const greenTea=data.filter((tea)=> tea.type==="green").
map((tea)=>tea.name)
//console.log(greenTea);

// Get display prices (format: "Sencha - 12 DKK/100g") for organic teas only.
const teaArray=data.map((tea)=>
    {
       const price= tea.pricePerGram*100;
       return `${tea.name} - ${price} DKK/100g`;
    });
//console.log(teaArray);

// Get Japanese teas sorted by price (lowest first).
const japanTea=data.filter((tea)=> tea.origin==="Japan")
.sort((tea1,tea2)=>(tea1.pricePerGram-tea2.pricePerGram));

console.log(japanTea);
