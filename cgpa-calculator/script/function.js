// for get value nad covert parsent(%) form the input field 
function getGPAById_Parsent(field_id, parsent) {
    const inputField = document.getElementById(field_id);
    const fieldValue = parseFloat(inputField.value);
    const multiplication = fieldValue * parsent;
    const lastParsent = multiplication / 100;
    return lastParsent;
}
// for sum every semester 
function CGPA(semeester1, semeester2, semeester3, semeester4, semeester5, semeester6, semeester7, semeester8) {
    const total = semeester1 + semeester2 + semeester3 + semeester4 + semeester5 + semeester6 + semeester7 + semeester8;
    const fixed = total.toFixed(2);
    const totalCGPA = parseFloat(fixed);
    return totalCGPA;
}

// for get text of element 
function ElementById(element_id) {
    const element = document.getElementById(element_id);
    return element;
}

// for set the result inside the element as a innerText 
function setNewValue(element_id, NewValue) {
    const element = document.getElementById(element_id);
    element.innerText = NewValue;
}

// gread check 
function greadChecker(totalCGPA) {
    const gread = ElementById('gread');
    if (totalCGPA === 4.00) {
        gread.innerText = 'A+';
        gread.style.color = 'rgb(58, 233, 67)';
    }
    else if (totalCGPA >= 3.75 && totalCGPA <= 3.99) {
        gread.innerText = 'A';
        gread.style.color = 'rgb(58, 233, 67)';
    }
    else if (totalCGPA >= 3.50 && totalCGPA <= 3.74) {
        gread.innerText = 'A-';
        gread.style.color = 'rgb(58, 233, 67)';
    }
    else if (totalCGPA >= 3.25 && totalCGPA <= 3.49) {
        gread.innerText = 'B+';
        gread.style.color =  '#ebe719';
    }
    else if (totalCGPA >= 3.00 && totalCGPA <= 3.24) {
        gread.innerText = 'B';
        gread.style.color =  '#ebe719';
    }
    else if (totalCGPA >= 2.75 && totalCGPA <= 2.99) {
        gread.innerText = 'B-';
        gread.style.color =  '#ebe719';
    }
    else if (totalCGPA >= 2.50 && totalCGPA <= 2.74) {
        gread.innerText = 'C+';
        gread.style.color =  '#eba219';
    }
    else if (totalCGPA >= 2.25 && totalCGPA <= 2.49) {
        gread.innerText = 'C';
        gread.style.color =  '#eba219';
    }
    else if (totalCGPA >= 2.00 && totalCGPA <= 2.24) {
        gread.innerText = 'D';
        gread.style.color =  '#eb7819';
    }
    else if (totalCGPA >= 0 && totalCGPA <= 1.99) {
        gread.innerText = 'F';
        gread.style.color =  '#ff0000';
    }

}