var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("My "+"age "+"is")).toFixed(2);
     floatDays = parseFloat(floatAge*365.25).toFixed(2);/*Calculate floatDays by multiplying age x 365.25*/
     floatMonths = parseFloat(floatAge*12).toFixed(2);/*Calculate floatMonths by multiplying age x 12*/
     intWeeks = parseInt(floatDays/7).toFixed(2);/*Calculate intWeeks by dividing days by 7*/
     intFortnights = parseInt(floatDays/14).toFixed(2);/*Calculate intFortnights by dividing days by 14*/
     alert("Days alive = " + floatDays);
     alert("Months alive = " + floatMonths);
     alert("Weeks alive = " + intWeeks);
     alert("Fortnights alive = " + intFortnights);

