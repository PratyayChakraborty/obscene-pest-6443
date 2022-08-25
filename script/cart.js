// var cartdata=[
//   {
//       imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_avakgtb7ywh/11/prod_display_image/1631077587.2029--2021-09-0810:36:27--1818",
//       name:"Chiken Curry Cut (Large pcs) - Large Pack",
//       des:"Half chiken cut to chunky pieces including Two leg a...",
//       net_tag:"Net wt",
//       net:"1000",
//       gross_tag:"Gross wt",
//        gross:"1026",
//        pieces_tag:"Pieces:",
//        pieces:"",
//        unit:"gms",
//        price_tag:"MRP:",
//        currency:"₹",
//       price:"318",
//       strikePrice:"335",
//       off:"5",
//       off_tag:"% OFF"

//   },
//   {
//       imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_3lyki5xft44/11/prod_display_image/1612636456.399--2021-02-0700:04:16--738",
//       name:"Eggs - Brown, Antibiotic Residue Free(Pack of 12",
//       des:"Brown shell eggs laid naturally by healthy hens",
//       net_tag:"Net wt",
//       net:"12",
//       gross_tag:"Gross wt",
//        gross:"500",
//        pieces_tag:"Pieces:",
//        pieces:"12",
//        unit:"gms",
//        price_tag:"MRP:",
//        currency:"₹",
//       price:"115",
//       strikePrice:"135",
//       off:"15",
//       off_tag:"% OFF"

//   },
//   {
//       imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_4cyjya5ry5e/11/prod_display_image/1634636534.1399--2021-10-1915:12:14--1818?format=webp",
//       name:"Chunky Butter Chiken Spread",
//       des:"Mildly spiced chunks of freshly rosted chiken blended...",
//       net_tag:"Net wt",
//       net:"200",
//       gross_tag:"Gross wt",
//        gross:"200",
//        pieces_tag:"Pieces:",
//        pieces:"",
//        unit:"gms",
//        price_tag:"MRP:",
//        currency:"₹",
//       price:"149",
//       strikePrice:"199",
//       off:"25",
//       off_tag:"% OFF"

//   },
//   {
//       imgUrl:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/6d8cefaa-06fa-494a-b67d-74a7f0d78387/original/Chunky-Shawarma-Chicken-Spread_(7).jpg?format=webp",
//       name:"Chunky Shawarma Chiken Spread",
//       des:"A creamy base with freshly rosted chiken chunks alon...",
//       net_tag:"Net wt",
//       net:"200",
//       gross_tag:"Gross wt",
//        gross:"200",
//        pieces_tag:"Pieces:",
//        pieces:"",
//        unit:"gms",
//        price_tag:"MRP:",
//        currency:"₹",
//       price:"149",
//       strikePrice:"",
//       off:"25",
//       off_tag:"% OFF"


//   },
//   {
//       imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_7olkuhu3ohb/11/prod_display_image/1634748531.1979--2021-10-2022:18:51--1818",
//       name:"Lean Goat Curry Cut - Small Pieces",
//       des:"Trimmed bone-in & boneless pieces",
//       net_tag:"Net wt",
//       net:"450",
//       gross_tag:"Gross wt",
//        gross:"979",
//        pieces_tag:"Pieces:",
//        pieces:"",
//        unit:"gms",
//        price_tag:"MRP:",
//        currency:"₹",
//       price:"537",
//       strikePrice:"565",
//       off:"5",
//       off_tag:"% OFF"

//   },
  
//   {
//       imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_1qzjxbz6jmj/11/prod_display_image/1636909667.0048--2021-11-1422:37:47--1818?format=webp",
//       name:"Indian salmon(Rawas/Gurjali) - boneless Cubes",
//       des:"Boneless cubes of omega 3 rich, low fat, white fleshed...",
//       net_tag:"Net wt",
//       net:"300",
//       gross_tag:"Gross wt",
//        gross:"900",
//        pieces_tag:"Pieces:",
//        pieces:"",
//        unit:"gms",
//        price_tag:"MRP:",
//        currency:"₹",
//       price:"620",
//       strikePrice:"729",
//       off:"15",
//       off_tag:"% OFF"

//   },

// ]
//  cartdata=[];
// localStorage.setItem("placeadd", undefined);
var cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
var placeadd = localStorage.getItem("placeadd") || " ";
let quntarr= JSON.parse(localStorage.getItem("quntarr")) ||[];
let popcon=document.getElementById("popup-screen");
let sld;
function popconfun() {
popcon.innerHTML=`  <div id="kkk" onclick="kkkcross()">X</div>
               <div id="cart-sidebar" >
                    
               </div>
<div id="ccg">
     
</div>`;
 sld=document.getElementById("cart-sidebar");
slidorder()
}
popconfun()
// sld.style.backgroundColor="red"



function slidorder() {
     if(cartdata.length===0){ 
          sld.innerHTML =`<div id="dusra">
               <img src="https://www.licious.in/img/rebranding/empty_cart_icon.png" alt="">
          <p>Your cart awaits your next meal</p>
          <div id="continue" onclick="kkkcross()"><h3>Continue Shopping</h3></div>
          </div>`
     }
     else{sld.innerHTML =`<h4>Order Summary</h4>
                    <div id="free-delivery">
                        <p>Congratulations, Your delivery charge is waived off!!!</p>
                    </div>
                    <div id="order-summary">
                        
                        
                    </div>
                    <p id="p-gray">Stop paying delivery charges. Join Meatopia today!</p>
                    <div id="join-licious">
                    <img src="https://www.licious.in/img/rebranding/loyalty_licious_logo.svg" alt="">
                    <h5 id="join-licious-btn">JOIN NOW ></h5>
                    </div>
                    <div>
                    <div id="bill"></div>
               <div style="height:160px;"></div>
               </div>`
               summary= document.getElementById("order-summary");
               addtproducttocart()
               bill();
          }
}


function addtproducttocart(){
let total=0;


     let item=``
     cartdata.forEach((el,ind)=> {
          // console.log(el)
          quntarr.push(1)
          localStorage.setItem("quntarr",JSON.stringify(quntarr));
item+= `<div id="order-item">
                         <div id="order-summary1">
                              <button id="item-number" class="somke">${ind+1}</button>
                              
                              <h3 id="order-name">${el.name}</h3>
                                   
                                   <p id="cross" onclick="delpro(${quntarr,ind})">X</p>
                         </div>
                         <div id="order-summary2">
                              <div id="item-detail">
                                   <div id="item-weight">${el.gross} ${el.unit}</div>
                                   <div id="item-price">${el.currency} ${el.price}</div>
                              </div>
                         <div id="qut">
                         <div id="add-qut" onclick="addqun(${quntarr,ind})" class="somke">+</div>
                         <div id="item-qut">${quntarr[ind]}</div>
                         <div id="sub-qut" onclick="subqun(${quntarr,ind})" class="somke">-</div>
                         </div>
                         </div>
                         </div>
                         `
summary.innerHTML=item;
document.getElementById("add-qut").addEventListener("click",(quntarr)=>{
     quntarr[ind]++
})

     })
}
function addqun(ind){
// console.log(quntarr,ind)
quntarr[ind]++
// console.log(quntarr,ind)
localStorage.setItem("quntarr",JSON.stringify(quntarr));
slidorder() 
}
function subqun(ind){
// console.log(quntarr,ind)
quntarr[ind]--
localStorage.setItem("quntarr",JSON.stringify(quntarr));
// console.log(quntarr,ind)
if(quntarr[ind]==0){delpro(ind)}
slidorder() 
}
function delpro(ind){
     cartdata.splice(ind,1);
     quntarr.splice(ind,1);
     
    slidorder() 
}
function bill(){
     let total=Total();
     let billcon=document.getElementById("bill");
     billcon.innerHTML=`
     <h4>BILL DETAILS</h4>
                         <p id="subtotal">
                              <span>Subtotal</span>
                              <span id="total-amount">${total}</span>
                         </p>
                         <p>
                                   <span>Delivery Charge</span>
                                   <span>0</span>
                    </p>
                    <p>
                                   <span>Discount</span>
                                   <span>0</span>
                    </p>
                    <hr>
                    <h5 >
                         <span>Total</span>
                         <span id="total-amount">₹ ${total}</span>
                    </h5>
                    `;
     // console.log(total)
     cggg(total)
    
     
}
 let total=Total();
function Total(){
     let t=0
     for(let i=0;i<cartdata.length;i++){
          t+=(+cartdata[i].price*quntarr[i])}
          return t
}

function cggg(total) {
     // placeadd = kolkata || " ";
     let ccg=document.getElementById("ccg");
     ccg.innerHTML = `<div id="btm-content">
                         <div id="add-add">
                         <img src="https://www.licious.in/img/rebranding/map-icon.png" alt="">
                         <h2> Shipping address</h2>
                         <a href="./address.html">Add Address</a>
                         </div>
                         <p id="address">${placeadd}</p>
                         <div id="tp-box">
                              <h3 >
                              <span>Total :</span>
                              <span id="total-amount">₹ ${total} <img src="https://www.licious.in/img/rebranding/info-icon.svg" alt=""></span>
                              </h3>
                              <div id="proceed_ch">
                                   Proceed to checkout
                              </div>
                         </div>
          </div> `;
     if (placeadd == " ") { proceed_ch.style.backgroundColor = "gray" }
     else {
          proceed_ch.addEventListener("click", () =>{letsgo()});
      }
}
function letsgo() {
     // console.log("Please wait...");
     window.location.href = "./checkout.html"
}

function kkkcross() {
     document.getElementById("popup-screen").style.display = "none";
}
document.getElementById("cartlogobtn").addEventListener("click", seecart)
function seecart() { 
     document.getElementById("popup-screen").style.display = "block";
}