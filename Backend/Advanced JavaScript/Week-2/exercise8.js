import { teas as data } from "../teas.js";
const groupedByOrigin = data.reduce((teaGroup,tea)=>{
    teaGroup[tea.origin]
      ? teaGroup[tea.origin].push(tea.name)
      : teaGroup[tea.origin]=[tea.name];
      return teaGroup;
});
console.log(groupedByOrigin); 
 // Expected: { Japan: ["Sencha", "Matcha", ...], China: [...], ... }
