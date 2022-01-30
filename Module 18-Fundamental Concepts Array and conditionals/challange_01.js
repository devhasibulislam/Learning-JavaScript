/* grade point */
// alia-95, dalia-66, salia-80, malia-59, lilia-47 & jalaiya-77
var marks = 46;

if ((marks < 50) && (marks >= 0))
    console.log("F");
else if ((marks >= 50) && (marks < 60))
    console.log("D");
else if ((marks >= 60) && (marks < 70))
    console.log("C");
else if ((marks >= 70) && (marks < 80))
    console.log("B");
else if ((marks >= 80) && (marks < 90))
    console.log("A");
else if (marks >= 90)
    console.log("A+");
else
    console.log("Wrong input!");