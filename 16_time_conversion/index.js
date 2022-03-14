// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// Example
// s="12:01:00PM"
// Return '12:01:00'.
// s="12:01:00AM"
// Return '00:01:00'.
// Function Description
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
// timeConversion has the following parameter(s):
// string s: a time in 12 hour format
// Returns
// string: the time in 24 hour format
// Input Format
// A single string s that represents a time in 12-hour clock format (i.e.hh:mm:ss AM or hh:mm:ss PM).

function timeConversion(stringTime) {
  // Diferenciar entre AM y PM
  const format =
    stringTime[stringTime.length - 2] + stringTime[stringTime.length - 1];
  const hours = stringTime[0] + stringTime[1];
  const minutes = stringTime[3] + stringTime[4];
  const seconds = stringTime[6] + stringTime[7];
  let resultingHours = "";
  // AM
  if (format === "AM") {
    if (hours == "12" && minutes == "00" && seconds == "00") {
      resultingHours = "00:00:00";
    } else if (hours == "12" && minutes >= "01" && minutes <= "59") {
      resultingHours = "00:" + minutes + ":" + seconds;
    } else {
      resultingHours = hours + ":" + minutes + ":" + seconds;
    }
    // PM
  } else {
    if (hours == "12" && minutes == "00" && seconds == "00") {
      resultingHours = "24:00:00";
    } else if (hours == "12" && minutes >= "01" && minutes <= "59") {
      resultingHours = hours + ":" + minutes + ":" + seconds;
    } else if (hours >= "01") {
      resultingHours = parseInt(hours) + 12 + ":" + minutes + ":" + seconds;
    }
  }
  return resultingHours;
}

const myHours = "02:04:00PM";
const myHours2 = "11:40:23AM";

console.log(timeConversion(myHours2));
