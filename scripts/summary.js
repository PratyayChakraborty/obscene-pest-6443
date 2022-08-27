  const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


let month = months[d.getMonth()];
let date=d.getDate();
let day = days[d.getDay()];
let nmonth,ndate,time="";
let ddatearr=["Today",date,month]
document.getElementById("kidlp").innerHTML=`<h3>1 Item Delivered ${ddatearr[0]} (${ddatearr[1]} ${ddatearr[2]}) </h3>`;
if(month=="January"||month=="March"||month=="May"||month=="July"||month=="August"||month=="October"||month=="December"){
if(date==31){
nmonth=months[d.getMonth()+1]
     ndate=1
}
else{
    nmonth=months[d.getMonth()]
     ndate=d.getDate()+1;;
}
}

if(month=="April"||month=="June"||month=="September"||month=="November"){
if(date==30){
nmonth=months[d.getMonth()+1]
     ndate=1
}
else{
    nmonth=months[d.getMonth()]
     ndate=d.getDate()+1;;
}
}
if(month=="February"){
    if(date==28&& +d.getYear()%4==1 ){
        nmonth=months[d.getMonth()+1]
     ndate=1
    }
    else if(idate==29&& +d.getYear()%4!==1 ){
        nmonth=months[d.getMonth()+1]
     ndate=1
    }
    else{
    nmonth=months[d.getMonth()]
     ndate=d.getDate()+1;;
}
}
// console.log(typeof())
// console.log(month)
// console.log(day)
// d.getTime();
// console.log(date,day,month)
// getDate(),getMonth()
//     let data=[
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
// localStorage.setItem("cartdata", JSON.stringify(data));
// addressarr
var addressarr = JSON.parse(localStorage.getItem("addressarr")) ||[];
var cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
var placeadd = localStorage.getItem("placeadd") || "kolkata";
let quntarr= JSON.parse(localStorage.getItem("quntarr")) ||[1,1,1,1,1,1];
let total = localStorage.getItem('total') || 1180;
document.getElementById("lots").innerText= `${placeadd}`
cartdata.forEach(function(el,ind){
    let samabox=document.createElement("div");
    let samabox1=document.createElement("div");
    let samabox2=document.createElement("div");
    let samabox3=document.createElement("div");
    let samabox4=document.createElement("div");
    samabox.className = "itembox";
    let img=document.createElement("img");
    img.src = el.imgUrl;
    let name=document.createElement("h3");
    name.innerText = el.name;
    let wgt=document.createElement("p");
    wgt.innerText=`${el.gross}gms`;
    let prc=document.createElement("p")
    prc.className="prc";
    prc.innerText=`₹${el.price}`;
    let qty=document.createElement("p")
    qty.innerText=`qty: ${quntarr[ind]}`;
    let cxxo=document.createElement("h3");
    cxxo.innerText=`X`;
    cxxo.addEventListener("click",function(e) {
       delpro(ind)
    })
    samabox1.append(img,name);
    samabox2.append(wgt,prc,qty);
    samabox3.append(samabox2,cxxo);
    samabox4.append(samabox1,samabox3);
    samabox.append(samabox4);
    document.getElementById("cratsummary").append(samabox);
});
function sdt(){
    document.getElementById("stpp").style.display="block"
}
document.getElementById("stpp").innerHTML=`
<div id="stpp-uyt">
            <h2><span>Select slot for Shipment ${cartdata.length} of 1</span> <span onclick="btncn()">X</span></h2>
            <h3><span id="viy1" onclick="viy(id)">Today ${date} ${month}</span>    <span id="viy2" onclick="viy(id)">Tomorrow ${ndate} ${nmonth}</span></h3>
            <button id="btn1111" onclick="btn1111()">8 AM - 11 AM</button>
            <button id="btn2222" onclick="btn2222()">4 PM - 7 PM</button>
            <div id="stpp-ld">
                <h5 onclick="btncn()">CANCCLE</h5> 
                <button id="spffp">SELECT & PROCEED</button>
            </div>
        </div>`
        function viy(id){
            // let id=document.getElementById("viy1");
            ddatearr=[];
            if(id=="viy1"){
                document.getElementById(id).style.color="black";
                document.getElementById("viy2").style.color="gray";
            }else{
                document.getElementById(id).style.color="black";
                document.getElementById("viy1").style.color="gray";
            }
            let [a,b,c]=document.getElementById(id).innerText.split(" ")
            ddatearr.push(a,b,c)
            ddatearr.push("0")
            console.log(ddatearr)
            if(time!==""&&ddatearr[3]==0){
                document.getElementById("spffp").addEventListener("click",chool)
                 document.getElementById("spffp").style.backgroundColor="rgb(246, 61, 92)";
            document.getElementById("spffp").style.color="white";
            }
            
        }
        function btncn(){
            document.getElementById("stpp").style.display="none";
        }
        function btn1111(){
            document.getElementById("btn1111").style.border="1px solid rgb(238, 25, 103)";
            document.getElementById("btn1111").style.color="rgb(238, 25, 103)";
            document.getElementById("btn2222").style.border="gray";
            document.getElementById("btn2222").style.color="gray";
            // document.getElementById("spffp").style.backgroundColor="rgb(246, 61, 92)";
            // document.getElementById("spffp").style.color="white";
             time=document.getElementById("btn1111").innerText;
             console.log(time);
            if(time!==""&&ddatearr[3]==0){
                document.getElementById("spffp").addEventListener("click",chool)
                 document.getElementById("spffp").style.backgroundColor="rgb(246, 61, 92)";
            document.getElementById("spffp").style.color="white";
            
            }

        }
        function btn2222(){
            document.getElementById("btn2222").style.border="1px solid rgb(238, 25, 103)";
            document.getElementById("btn2222").style.color="rgb(238, 25, 103)";
            document.getElementById("btn1111").style.border="gray";
            document.getElementById("btn1111").style.color="gray";
            time=document.getElementById("btn2222").innerText;
            console.log(time,ddatearr);
            if(time!==""&&ddatearr[3]==0){
                document.getElementById("spffp").addEventListener("click",chool)
                 document.getElementById("spffp").style.backgroundColor="rgb(246, 61, 92)";
            document.getElementById("spffp").style.color="white";
            }
        
        }
        function chool(){
        document.getElementById("kidlp").innerHTML=`<h3>1 Item Delivered ${ddatearr[0]} (${ddatearr[1]} ${ddatearr[2]}) </h3>`;
        
        document.querySelector("#sdt>h4").innerText=`${time}`;
        document.getElementById("letpay").style.backgroundColor="rgb(246, 61, 92)";
            document.getElementById("letpay").style.color="white";
            document.getElementById("letpay").addEventListener("click",function(){window.location.href="payment.html" 
            localStorage.setItem("dltim",time)
            localStorage.setItem("ddatearr",JSON.stringify(ddatearr));
        })
        btncn()
        
}
        document.getElementById("lots").innerText = `${loca}, ${city}`;