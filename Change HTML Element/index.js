// finding element by ID
var h2 = document.getElementById("heading2");

// changing elements text, id
h2.innerHTML = "I love Bangladesh";
h2.id = "heading2-new";
console.log(h2);

var a = document.querySelector("a");
console.log(a)
a.textContent = "visit my website";
a.href = "http://www.facebook.com"

// changing style of element
a.style.textDecoration = "none";
a.style.color = "green";
a.style.fontSize = "30px";