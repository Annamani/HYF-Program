import { teas as data } from "../teas.js";
function myForEach(array, callback) {
  const filteredElements = [];
  array.forEach((tea)=> {
    if (callback(tea)) filteredElements.push(array[tea]);
})
  return filteredElements;
}

// Test it:
myForEach(data, function (tea) {
  console.log(tea.name);
});

