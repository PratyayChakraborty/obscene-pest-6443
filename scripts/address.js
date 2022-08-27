getlocation()
function getlocation() {
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
                    const crd = pos.coords;

                    // console.log('Your current position is:');
                    // console.log(`Latitude : ${crd.latitude}`);
                    // console.log(`Longitude: ${crd.longitude}`);
                    // console.log(`More or less ${crd.accuracy} meters.`);
                    getOnlocation(crd.latitude, crd.longitude)
                }

}
function getOnlocation(lat, lon) {
                url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f21e69d43a3b47c6d862db310d5ecf8f&units=metric`

                fetch(url).then(function (res) {

                    return res.json()

                })
                    .then(function (res) {

                        // console.log(res);
                        let url = `https://maps.google.com/maps?q=${res.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

                        document.querySelector(".gmap_canvas>iframe").src = url
                    })

            }
let addressarr;
let save = document.getElementById('save');
let loca=document.getElementById("input-box").value;
let flat=document.getElementById("flat").value;
let mark=document.getElementById("landmark").value;
let city=document.getElementById("city").value;
let mob=document.getElementById("mobile").value;
document.getElementById("hch").addEventListener("click",chgh)
// let addressarr=JSON.parse(localStorage.getItem("addressarr"));
// mob=document.getElementById("mobile").value.length=10;
// let save=document.getElementById("save");
function chgh(){
    document.getElementById("cnfm").style.display="none";
    document.getElementById("from").style.display="flex";
}
function ppld(){
loca=document.getElementById("input-box").value;
 flat=document.getElementById("flat").value;
 mark=document.getElementById("landmark").value;
 city=document.getElementById("city").value;
 mob=document.getElementById("mobile").value;

 if(loca.length>0&& flat.length>0&&city.length>0&&mob.length>9){ 
    document.getElementById("save").addEventListener('click', ()=>{
        savefun(event)
    })
document.getElementById("save").style.backgroundColor="rgb(253, 48, 82)"
document.getElementById("save").style.color="white"
if(mob.length>=10){document.getElementById("mobile").disabled="true"}

 }
//  if(mob.length>10){document.getElementById("mobile").disabled="true"}
// else{
//     document.getElementById("save").style.backgroundColor="none"
// document.getElementById("save").style.color="gary"
//  }
} 

async function savefun(e){
    // e.preventDefault();
 loca=document.getElementById("input-box").value;
 flat=document.getElementById("flat").value;
 mark=document.getElementById("landmark").value;
 city=document.getElementById("city").value;
 mob=document.getElementById("mobile").value;
 let nad=await new addobj(loca,flat,mark,city,mob);
  addressarr=[];
 console.log(nad)
 addressarr.push(nad);
localStorage.setItem("placeadd",loca);
    localStorage.setItem("addressarr", JSON.stringify(addressarr));
    document.getElementById("lots").innerText = `${loca}, ${city}`;
// localStorage.setItem("addressarr",JSON.stringify(addressarr));
// console.log(city.length,(loca.length>0&& flat.length>0&& city.length>0&&mob.length==10));
// if(loca.length>0&& flat.length>0&&city.length>0&&mob.length==10){ 
    // console.log("city");cnfm
    document.getElementById("cnfm").style.display="flex";
    document.getElementById("from").style.display="none";
    let url = `https://maps.google.com/maps?q=${loca}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    document.querySelector(".gmap_canvas>iframe").src = url
// }
}
console.log(addressarr)
function addobj(loca,flat,mark,city,mob){
    this.location=loca;
    this.flat=flat;
    this.mark=mark;
    this.city=city;
    this.mob=mob;
}
