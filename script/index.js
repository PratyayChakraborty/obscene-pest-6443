let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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



// new section javascript
let span = document.getElementsByClassName('arrow');
let div = document.getElementsByClassName('news-content');

let len = 0;
span[0].onclick = ()=>{
    len++;
    for(let i of div)
    {
      if(len==0) {i.style.left = "0px";}
      if(len==1) {i.style.left = "-740px";}
      if(len==2) {i.style.left = "-1480px";}
      if(len==3) {i.style.left = "-2050px";}
      if(len>3) {len=3;}
    }
}
span[1].onclick = ()=>{
  len--;
  for(let i of div)
  {
    if(len==0) {i.style.left = "0px";}
    if(len==1) {i.style.left = "-740px";}
    if(len==2) {i.style.left = "-1480px";}
    if(len==3) {i.style.left = "-2220px";}
    if(len<0) {len=0;}
  }
}

//  cartdata=JSON.parse(localStorage.getItem("cartdata"))|| [];
// document.getElementById("addToCartbutton").addEventListener("click", function () { addtoCartfunction(el)})

// function addtoCartfunction(el) {
//   cartdata.push(el);
//   localStorage.setItem("cartdata", JSON.stringify(cartdata));
// }

// cart js
