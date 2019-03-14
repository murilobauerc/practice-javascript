// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

const monthName = number => {
  const arr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return arr[number - 1];
};

console.log(monthName(1));
