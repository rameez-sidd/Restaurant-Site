document.getElementById("credit-card-number").addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
});


function formatExpDate(e) {
    var inputChar = String.fromCharCode(e.keyCode);
    var code = e.keyCode;
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
        return;
    }

    e.target.value = e.target.value.replace(
        /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
    ).replace(
        /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
    ).replace(
        /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
    ).replace(
        /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
    ).replace(
        /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
    ).replace(
        /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
    ).replace(
        /\/\//g, '/' // Prevent entering more than 1 `/`
    );
}


var today = new Date();
var currentMM = today.getMonth() + 1; //January is 0!
var currentYYTemp = today.getFullYear();
if (currentMM < 10) {
    currentMM = '0' + currentMM;
}
currentYY = "";
currentYY += currentYYTemp;
currentYY = currentYY.slice(-2);


mm = "";
yy = "";
function getSelectedExpDate(){
    temp = document.getElementById("exp-date").value;
    arr = temp.split("/");
    mm = arr[0];
    yy = arr[1];
}
function validateExpDate(){
    if (yy > currentYY) {
        
    }
    else if (yy < currentYY) {
        alert("Invalid Expiration Date");
        return false;
    }
    else {
        if (mm < currentMM) {
            alert("Invalid Expiration Date");
            return false;
        }
        else {
            
        }
    }
}













