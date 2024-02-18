function myCGPA(result1, result2, result3, result4, result5, result6, result7, result8) {

    const multiplecation = (result1 * 5) + (result2 * 5) + (result3 * 5) + (result4 * 15) + (result5 * 15) + (result6 * 20) + (result7 * 25) + (result8 * 10);
    const totalCGPA = multiplecation / 100;
    const fixed = totalCGPA.toFixed(2);
    const convert = parseFloat(fixed);
    return convert;
    
}

const fristSemestar = 3.98;
const secondSemestar = 3.86;
const thirdSemestar = 3.80;
const fourthSemestar = 3.87;
const fiveSemestar = 3.60;
const sixSemestar = 3.67;
const sevenSemestar = 3.72;
const eightSemestar = 3.90;

var CGPA = myCGPA(fiveSemestar, secondSemestar, thirdSemestar, fourthSemestar,
    fiveSemestar, sixSemestar, sevenSemestar, eightSemestar);
console.log(CGPA);