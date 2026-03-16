import { teas as data } from "../teas.js";

const logTea =function (tea) {
  return (`${tea.name} (${tea.origin})`);
};
console.log(logTea(data[0])); // should log: "Sencha (Japan)"