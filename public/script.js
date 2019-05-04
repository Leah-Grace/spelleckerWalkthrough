
function handleClick() {
    const name = document.getElementById("input").value 
    const phone = documnet.getElementById("phoneInput").value;

fetch("/getemail" + "?" + "name=" + name + "&phone=" + phone)
.then(response => response.text())
.then(response => document.getElementById("result").innerText = response);

//document.getElementById("result").innerText = responseText;
}