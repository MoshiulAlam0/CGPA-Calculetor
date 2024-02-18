/* 
 steps are here 
1.addd click event with the result button 
2.get gpa form the every single input field
3. get element text 
4. set the result inside the element as a innerText
*/

// kon semester ar jono koto parsent lagbe 
const semeester1Parsent = 5;
const semeester2Parsent = 5;
const semeester3Parsent = 5;
const semeester4Parsent = 10;
const semeester5Parsent = 15;
const semeester6Parsent = 20;
const semeester7Parsent = 25;
const semeester8Parsent = 15;

document.getElementById('result-button').addEventListener('click', function () {
    const semester1gpa = getGPAById_Parsent('semester1', semeester1Parsent);
    const semeester2gpa = getGPAById_Parsent('semester2', semeester2Parsent);
    const semeester3gpa = getGPAById_Parsent('semester3', semeester3Parsent);
    const semeester4gpa = getGPAById_Parsent('semester4', semeester4Parsent);
    const semeester5gpa = getGPAById_Parsent('semester5', semeester5Parsent);
    const semeester6gpa = getGPAById_Parsent('semester6', semeester6Parsent);
    const semeester7gpa = getGPAById_Parsent('semester7', semeester7Parsent);
    const semeester8gpa = getGPAById_Parsent('semester8', semeester8Parsent);
    const totalCGPA = CGPA(
        semester1gpa, semeester2gpa, semeester3gpa, semeester4gpa,
        semeester5gpa, semeester6gpa, semeester7gpa, semeester8gpa
    );
    setNewValue('cgpa00', totalCGPA);
    greadChecker(totalCGPA);
})