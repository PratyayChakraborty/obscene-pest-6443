document.getElementById("login-pop").innerHTML=`
    <span id="login-popclo">X</span>
            <div id="lggsjd">
                <h1><img src="https://www.licious.in/img/rebranding/logo-white.png" alt=""></h1>
                    
                <div id="login-form-uypt">
                    <h2>Sign In/Sign Up</h2>
                    <input type="text" placeholder="Enter Your Mobile Number" id="moblog" onkeypress="moblogin()" maxlength=10>
                    <input type="text" placeholder="Enter your OTP" id="pto">
                    <button id="login-btnhgfjfj">Proceed Via OTP</button>
                    <button class="login-btnhgfjclass">Confrim OTP</button>
                    <p>By signing in you agree to our  <span>terms and conditions</span> </p>
                </div>
            </div>`
            document.getElementById("moblog").maxlength=10;
function moblogin(){
    let mosff=document.getElementById("moblog").value;
// document.getElementById("login-btnhgfjfj").style.backgroundColor="gray";
// document.getElementById("login-btnhgfjfj").addEventListener("click","disabled");
    if(mosff.length==10){
document.getElementById("login-btnhgfjfj").style.backgroundColor="rgb(245, 58, 89)";
document.getElementById("login-btnhgfjfj").addEventListener("click",loginfungt)

    }
  
}
function loginfungt(){
    document.getElementById("login-btnhgfjfj").style.display="none";
document.querySelector("#login-form-uypt>#pto").style.display="block";
let otp=0;
while(otp<=9999){
 otp=Math.floor(Math.random()*99999);
//  console.log(otp)
}
    
    // console.log(otp);
    alert(otp);
    // document.getElementById("login-btnhgfjfj").innerText="Confrim OTP"
    document.querySelector(".login-btnhgfjclass").style.display="block";
document.querySelector(".login-btnhgfjclass").style.backgroundColor="rgb(245, 58, 89)";


document.querySelector(".login-btnhgfjclass").addEventListener("click",()=>{subg(otp)});


}
function subg(otp){
let pot=document.getElementById("pto").value;
if(otp==pot){
    alert("Login successfully")
clolog()
}
else{
    alert(" please give correct otp")
}

}
document.getElementById("letslogg").addEventListener("click",logpopsee)
function logpopsee(){
    document.getElementById("login-pop").style.display="flex";
}
