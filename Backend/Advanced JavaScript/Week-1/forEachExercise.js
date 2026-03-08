import { teas as data } from "./teas.js";
// Log each tea's name to the console.
data.forEach((tea) =>
  console.log(tea.name));
//Log each tea in the format: "Sencha (Japan)"
data.forEach((teaDetails) =>
  console.log(`${teaDetails.name} (${teaDetails.origin})`));
// Count how many teas are organic. Use a variable outside the forEach to track the count.
let count = 0;
data.forEach((tea) =>{
  if (tea.organic === true) {
    count = count + 1;
  }
});
console.log(count);