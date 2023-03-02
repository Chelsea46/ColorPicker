const colorPicker = document.getElementById("seed");
const colorMode = document.getElementById("color-mode");
const colorSchemeBtn = document.getElementById("generate-color");
const dispArray = document.getElementsByClassName("color-disp");
const hexValArray = document.getElementsByClassName("color-hex");
const baseUrl = " https://www.thecolorapi.com/scheme"

randomColor = Math.floor(Math.random() * 16777215)
colorPicker.value = '#' + randomColor.toString(16)
getColors()

colorSchemeBtn.addEventListener("click", () => {
    getColors()
})

function arrangeColors(object) {
    for (let i = 0; i < 5; i++) {
        dispArray[i].style.backgroundColor = object.colors[i].hex.value
        hexValArray[i].textContent = object.colors[i].hex.value
        hexValArray[i].value = object.colors[i].hex.value
    }
}

function getColors() {
    fetch(`${baseUrl}?hex=${colorPicker.value.slice(1)}&mode=${colorMode.value}`, {method: "GET", headers: {"Content-Type": "application/json"}})
        .then(res => res.json())
        .then(data => { console.log(data.colors)
            arrangeColors(data)
        })
}

function copyText(index) {
    var copiedText = hexValArray[index]
    console.log(copiedText.value)
    
    navigator.clipboard.writeText(copiedText.value)
    if (copiedText.value != undefined) {
        alert("Copied the color: " + copiedText.value)
    }
}


