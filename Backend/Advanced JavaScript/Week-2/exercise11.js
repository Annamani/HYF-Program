import { teas as data } from "../teas.js";
function myFilter(array, callback) {
//   return array.filter(callback);
const filteredElements=[];
for(let i=0;i<array.length;i++){
    if(callback(array[i]))
        filteredElements.push(array[i])
    
}
return filteredElements;
}

// Test it:
const organic = myFilter(data, function (tea) {
  return tea.organic;
});
console.log(organic.length); // number of organic teas
