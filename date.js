const now = new Date();
console.log(now); // shows current date and time
// OutPut be like:-
// 2023-01-17T13:28:49.859Z


const birthday = new Date(86400000);
console.log(birthday); // shows the date for 1 day after Jan 1st, 1970
// OutPut be like:-
// 1970-01-02T00:00:00.000Z


const startOfYear = new Date('2022-01-01T00:00:00Z');
console.log(startOfYear); // shows the date for Jan 1st, 2022 
// OutPut be like:-
// 2022-01-01T00:00:00.000Z


console.log(now.getFullYear()); // shows current year
// OutPut be like:-
// 2023


console.log(now.getMonth()); // shows current month
// OutPut be like:-
// 0


console.log(now.getDate()); // shows current date
// OutPut be like:-
// 17


console.log(now.getHours()); // shows current hour
// OutPut be like:-
// 19


console.log(now.getMinutes()); // shows current minutes
// OutPut be like:-
// 7


console.log(now.getSeconds()); // shows current seconds
// OutPut be like:-
// 31


console.log(now.toDateString()); // shows current date in human readable format
// OutPut be like:-
// Tue Jan 17 2023


console.log(now.toTimeString()); // shows current time in human readable format
// OutPut be like:-
// 19:09:52 GMT+0530 (India Standard Time)


console.log(now.toISOString()); // shows date and time in ISO format
// OutPut be like:-
// 2023-01-17T13:40:30.896Z