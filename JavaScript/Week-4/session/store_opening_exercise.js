// 🏪 STORE OPENING HOURS - EXERCISE
//====================================

const opening_hours = [
    {
        day: "Saturday",
        open: 10,
        close: 16
    },
    {
        day: "Sunday",
        open: "Closed",
        close: "Closed"
    },
    {
        day: "Monday",
        open: 9,
        close: 19
    },
    {
        day: "Tuesday",
        open: 9,
        close: 19
    },
    {
        day: "Wednesday",
        open: 9,
        close: 19
    },
    {
        day: "Thursday",
        open: 9,
        close: 19
    },
    {
        day: "Friday",
        open: 9,
        close: 20
    }
];


// ========================================
// EXERCISE 1: Get Opening Hours for a Day
// ========================================
function getOpeningHours(checkDay) {
    for (let i = 0; i < opening_hours.length; i++) {
        if (opening_hours[i].day === checkDay) {
            console.log(opening_hours[i]);
        }
        // else {
        //     return -1;
        // }

    }
}
getOpeningHours("Monday");
/*
EXAMPLE:
getOpeningHours("Monday")
// Should return: { day: "Monday", open: "09:00", close: "19:00" }

*/

// ========================================
// EXERCISE 2: Check If Store Is Open
// ========================================
/*
EXAMPLE:
isOpenNow("Monday", "10") // "open"
isOpenNow("Monday", "20") // "closed"
isOpenNow("Friday", "18") // "open"
isOpenNow("Sunday", "11") // "closed"
*/

const isOpenNow = (checkDay, checkTime) => {
    for (let i = 0; i < opening_hours.length; i++) {
        if (opening_hours[i].day === checkDay) {
            if ((opening_hours[i].open <= checkTime) && (opening_hours[i].close >= checkTime)) {
                console.log("Open");
            } else {
                console.log("Closed");
            }

        }
    }
}
// isOpenNow("Monday", "10") // "open"
// isOpenNow("Monday", "20") // "closed"
// isOpenNow("Friday", "18") // "open"
// isOpenNow("Sunday", "11")



// ========================================
// EXERCISE 3: Special Event Hours
// ========================================
/*
TASK: During special events, the store opens 1 hour earlier and closes 1 hour later.
Create a function that checks if the store is open considering special events.

INPUT:
  - day (string): Day name
  - time (string): Time in format "HH:MM"
  - isSpecialEvent (boolean): true if there's a special event
*/
// const isOpenWithEvent = (checkDay, checkTime, isEvent) => {
//     for (let i = 0; i < opening_hours.length; i++) {
//         if (opening_hours[i].day === checkDay) {
//             if (!isEvent) {
//                 return opening_hours[i].open <= checkTime && opening_hours[i].close >= checkTime ? "Open" : "closed";
//             }
//             else {
//                 const open = opening_hours[i].open - 1;
//                 const close = opening_hours[i].close + 1;
//                 return open <= checkTime && close >= checkTime ? "Open" : "Closed";
//             }

//         }
//     }
//     return "Enter a valid Date and Time";
// };
const isOpenWithEvent = (day, time, event) => {
    for (const one of opening_hours) {

        if (one.day === day) {

            if (!event) {
                return one.open <= time && one.close >= time ? "open" : "closed";
            }
            else {
                const open = one.open - 1;
                const close = one.close + 1;
                return open <= time && close >= time ? "open" : "close";
            }
        }
    }
    return "Enter valid day";
};


console.log(isOpenWithEvent("Monday", "8", false)); // "closed"
console.log(isOpenWithEvent("Monday", "8", false));  // "open"
console.log(isOpenWithEvent("Friday", "21", false));  // "closed"
console.log(isOpenWithEvent("Sunday", "15", false));