function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + "").split(".")[0];

    if (pin.length == 4) {
        return pin;
    }

    else {
        return getPin();
    }
}

document.getElementById("generatePin").addEventListener("click", function () {
    const display = document.getElementById("generateInput");
    display.value = getPin();
});

const buttonContainer = document.getElementById("number");

buttonContainer.addEventListener("click", function (event) {
    let digit = event.target.innerText;

    if (isNaN(digit)) {
        //handle backspace
        if (digit.target.innerText == C) {
            const inputDisplay = document.getElementById("screen");
            inputDisplay.value = "";
        }
        //handle clear
    }

    else {
        const inputDisplay = document.getElementById("screen");
        inputDisplay.value = inputDisplay.value + digit;
    }

});

function verifyPin() {
    const displayPin = document.getElementById("generateInput").value;
    const display = document.getElementById("screen").value;

    if (displayPin == display) {
        document.getElementById("correctPin").style.display = "block";
        document.getElementById("incorrectPin").style.display = "none";
    }

    else {
        document.getElementById("incorrectPin").style.display = "block";
        document.getElementById("correctPin").style.display = "none";
    }
}

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    verifyPin();
});
