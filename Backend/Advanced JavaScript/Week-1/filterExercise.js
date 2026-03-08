import {teas as data } from "./teas.js";
// Get all organic teas.
const organic = data.filter(function (tea) {
  return tea.organic;
});
//console.log(organic);

// Get all teas from Japan.
const getTeas=data.filter(function(tea){
  return tea.origin==="Japan";
})
// console.log(getTeas);

// Get all teas with caffeineLevel equal to "high".
const getHighCaffeine=data.filter(function(tea){
  return tea.caffeineLevel==="high";
})
//console.log(getHighCaffeine);

// Get all teas that are both in stock AND organic.
const getAvailableTea= data.filter(function(tea){
  // if(tea.organic && tea.inStock>0)
  //   return tea;
  return tea.organic && tea.inStock>0;
})
console.log(getAvailableTea);