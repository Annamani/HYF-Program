import {teas as data } from "./teas.js";
// Create an array containing just the tea names.
const names = data.map(function (tea) {
  return tea.name;
});
console.log(names);

// Create an array of prices in DKK for 100 grams (multiply pricePerGram by 100).
const priceArray=data.map(function(tea){
    return tea.pricePerGram*100;
})
console.log(priceArray);
// Create an array of display strings in the format: "Sencha - 12 DKK/100g"
const teaArray=data.map(function(tea){
    const price=tea.pricePerGram*100;
    return `${tea.name} - ${price}DKK/100g`;
})
console.log(teaArray);