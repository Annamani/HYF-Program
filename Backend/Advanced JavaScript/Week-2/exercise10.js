import { teas as data } from "../teas.js";
function myMap(array, callback) {
  const result = [];
    array.map((tea) => {
      if (callback(tea)) result.push(array[tea]);
    });
    return result;
  }
  


// Test it:
const names = myMap(data, function (tea) {
  return tea.name;
});
console.log(names); // ["Sencha", "Earl Grey", ...]

