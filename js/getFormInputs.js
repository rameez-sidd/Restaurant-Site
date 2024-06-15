firstName = document.getElementById("first-name");
lastName = document.getElementById("last-name");
people = document.getElementById("people");
date = document.getElementById("date");
time = document.getElementById("time");
bookCode = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

function getFormInputs(){
    let selectedPeople = people.value;
    let selectedDate = date.value;
    let selectedTime = time.value;
    let selectedFName = firstName.value;
    let selectedLName = lastName.value;
    localStorage.setItem("FName", selectedFName);
    localStorage.setItem("LName", selectedLName);
    localStorage.setItem("BookCode", bookCode);
    localStorage.setItem("People", selectedPeople);
    localStorage.setItem("Date", selectedDate);
    localStorage.setItem("Time", selectedTime);
    
    
    
}