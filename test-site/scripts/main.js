var myImage = document.querySelector("img");

myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "img/ahri1.jpg") {
        myImage.setAttribute("src", "img/ahri2.jpg");

    } else {
        myImage.setAttribute("src", "img/ahri1.jpg");
    }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Ahri is cool, " + myName;
    

}
if (!localStorage.getItem("name")) {
        setUserName();

    } else {
        var storedName = localStorage.getItem("name");
        myHeading.textContent = "Ahri is cool, " + storedName;
    }
myButton.onclick = function () {
    setUserName();
}