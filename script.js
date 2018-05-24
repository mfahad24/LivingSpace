// (function (){

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var productsdiv = document.getElementById("productsdiv");
var product = document.getElementById("products");
var close = document.getElementById("close");
var textone = document.getElementById("text");
var texttwo = document.getElementById("texttwo");
var textthree = document.getElementById("textthree");
var textfour = document.getElementById("textfour");

productsdiv.style.display = "none";

product.onclick = function () {
  productsdiv.style.display  = "block";
}

close.onclick = function () {
  productsdiv.style.display = "none";
}

textone.onmouseover = function () {
  textone.style.width = "60%";
}

textone.onmouseout = function () {
  textone.style.width = "50%";
}



texttwo.onmouseover = function () {
  texttwo.style.width = "60%";
}

texttwo.onmouseout = function () {
  texttwo.style.width = "50%";
}



textthree.onmouseover = function () {
  textthree.style.width = "70%";
}

textthree.onmouseout = function () {
  textthree.style.width = "60%";
}

textfour.onmouseover = function () {
  textfour.style.width = "70%";
}

textfour.onmouseout = function () {
  textfour.style.width = "60%";
}




// })();
