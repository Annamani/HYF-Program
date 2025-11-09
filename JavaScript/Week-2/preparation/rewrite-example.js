// let result;
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
const a = 10;
const b = 2;
let result = (a + b < 4) ? 'Below' : 'Over';

// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
let login = "no";
let message;
message = (login == 'Employee') ? message = 'Hello' :
    (login == 'Director') ? message = 'Greetings' :
        (login == '') ? message = 'No login' : message = '';
console.log(message);