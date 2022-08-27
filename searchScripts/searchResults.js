let totalContainer = document.getElementById("Total_Container");
//let mainContainer = document.getElementById("Search_Container");
let data = JSON.parse(localStorage.getItem("chickenData2")) || [];
console.log(data);

data.forEach(function(el){
    let image = document.createElement("img");
    image.src = el.imgUrl;
    let name = document.createElement("p");
    name.innerText= el.name;
    let net = document.createElement("p");
    net .innerText = el.net;
    let unit = document.createElement("p");
    unit .innerText = el.unit;
    let cuurency = document.createElement("p");
    cuurency .innerText = el.cuurency;
    cuurency.setAttribute("class","currency")
    let price = document.createElement("p");
    price .innerText = el.price;
    let image2 = document.createElement("img");
    image2.src = "https://www.licious.in/img/rebranding/express_delivery.svg";
    image2.setAttribute("class","image2Gap")
    let AddtoCart= document.createElement("button");
    AddtoCart.innerText = "ADD TO CART";

    let horizontal = document.createElement("hr");
    horizontal.setAttribute("class","horizontal");

    let h2 = document.createElement("p");
    h2.innerText ="|";
    h2.setAttribute("class","gap")
    
    let Imgdiv=document.createElement("div");
    Imgdiv.setAttribute("class","Imgdiv")
    Imgdiv.append(image);

    let Ratediv=document.createElement("div");
    Ratediv.setAttribute("class","RateDivFlex");
    Ratediv.append(net,unit,h2,cuurency,price,image2,AddtoCart);

    let Sidediv=document.createElement("div");
    Sidediv.setAttribute("class","Sidediv");
    Sidediv.append(name,Ratediv);

    let div=document.createElement("div");
    div.setAttribute("class","TotalDivFlex");
    div.append(Imgdiv,Sidediv);

    let Hrdiv=document.createElement("div");
    Hrdiv.setAttribute("class","Hrdiv");
    Hrdiv.append(horizontal);

    let mainContainer=document.createElement("div");
    mainContainer.setAttribute("class","mainContainer");
    mainContainer.addEventListener("click",function(){
        window.location.href ="./SearchEachItemPage.html"
    });
    //mainContainer.append(Imgdiv,Sidediv)

   //div.append(image,name,net,unit,cuurency,price)
    mainContainer.append(div,Hrdiv)
    totalContainer.append(mainContainer)


});