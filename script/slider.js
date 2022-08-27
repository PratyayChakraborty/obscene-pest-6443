// slide container javascript
let span_slide = document.getElementsByClassName('arrow-1');
let div_slide = document.getElementsByClassName('slide-data-1')

let leng = 0;
span_slide[0].onclick = ()=>{
    leng++;
    for(let i of div_slide)
    {
      if(leng==0) {i.style.left = "0px";}
      if(leng==1) {i.style.left = "-1190px";}
      if(leng==2) {i.style.left = "-2400px";}
      if(leng==3) {i.style.left = "-3600px";}
      if(leng>3) {leng=3;}
    }
}
span_slide[1].onclick = ()=>{
  leng--;
  for(var i of div_slide)
  {
    if(leng==0) {i.style.left = "0px";}
    if(leng==1) {i.style.left = "-1190px";}
    if(leng==2) {i.style.left = "-2400px";}
    if(leng==3) {i.style.left = "-3600px";}
    if(leng<0) {leng=0;}
  }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
let span_slide2 = document.getElementsByClassName('arrow-2');
let div_slide2 = document.getElementsByClassName('slide-data-2')

let lengt = 0;
span_slide2[0].onclick = ()=>{
    lengt++;
    for(let i of div_slide2)
    {
      if(lengt==0) {i.style.left = "0px";}
      if(lengt==1) {i.style.left = "-1190px";}
      if(lengt==2) {i.style.left = "-2400px";}
      if(lengt==3) {i.style.left = "-3600px";}
      if(lengt>3) {lengt=3;}
    }
}
span_slide2[1].onclick = ()=>{
  lengt--;
  for(var i of div_slide2)
  {
    if(lengt==0) {i.style.left = "0px";}
    if(lengt==1) {i.style.left = "-1190px";}
    if(lengt==2) {i.style.left = "-2400px";}
    if(lengt==3) {i.style.left = "-3600px";}
    if(lengt<0) {lengt=0;}
  }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

let span_slide3 = document.getElementsByClassName('arrow-3');
let div_slide3 = document.getElementsByClassName('slide-data-3')

let length = 0;
span_slide3[0].onclick = ()=>{
    length++;
    for(let i of div_slide3)
    {
      if(length==0) {i.style.left = "0px";}
      if(length==1) {i.style.left = "-1190px";}
      if(length==2) {i.style.left = "-2400px";}
      if(length==3) {i.style.left = "-3600px";}
      if(length>3) {length=3;}
    }
}
span_slide3[1].onclick = ()=>{
  length--;
  for(var i of div_slide3)
  {
    if(length==0) {i.style.left = "0px";}
    if(length==1) {i.style.left = "-1190px";}
    if(length==2) {i.style.left = "-2400px";}
    if(length==3) {i.style.left = "-3600px";}
    if(length<0) {length=0;}
  }
}