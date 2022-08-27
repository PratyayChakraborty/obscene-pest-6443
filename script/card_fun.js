
    let cardNumber = () => {

        let input = document.getElementById("input_card").value

        console.log(input)
        let p = document.getElementById("error_first")
        if (input.length == "") {
            p.innerText = ""

        }
        else if (input.length < 16) {

            p.innerText = "Card Number must be of 16 Digits"
            p.style.color = "red"
        }


    }


    let card__MM = () => {
        let input1 = document.getElementById("input_MM").value
        console.log(input1)
        let p1 = document.getElementById("error_s")
        if (input1.length == "") {
            p1.innerText = null
        }
        else if (input1 > 12) {

            console.log(input1.length)
            p1.style.color = "red"
            p1.innerText = "Enter expiry month of card"
        } else {
            p1.innerText = null
        }



    }

   let  card_YYYY = () =>{
        let input2 = document.getElementById("input_YYYY").value
        console.log(input2)
       // console.log(getFullYear())
       let p3=document.getElementById("error_YYYY")
      
       
        if (input2.length == 0) {
            p3.innerText = ""
        }
        else if (input2<2022) {

            console.log(input2.length)
            p3.innerText = "Expiry year of card should be greater than current year"
            p3.style.color = "red"
            
        }  

    }
    let  card_cvv = () =>{
        let input2 = document.getElementById("input_cvv").value
        console.log(input2)
       // console.log(getFullYear())
       let p3=document.getElementById("error_cv")
      
       
        if (input2.length == 0) {
            p3.innerText = ""
        }
        else if (input2.length<=3) {

            console.log(input2.length)
            p3.innerText = "CVV must be of Min. 3 digits"
            p3.style.color = "red"
            
        }  

    }
    
   
    let payment = () => {
        
        // let input1 = document.getElementById("input_card").value
         let input2 = document.getElementById("input_MM").value
         let input3 = document.getElementById("input_YYYY").value
         let input4 = document.getElementById("input_cvv").value
         let input5=document.getElementsByClassName("input_card").value
        
         let p1 = document.getElementById("error_first")
         let p2 = document.getElementById("error_s")
         let p3=document.getElementById("error_YYYY")
         let p4=document.getElementById("error_cv")
 
     if( input2 && input3 &&input4 &&input5!==null ){
        console.log('pav')
        setTimeout(() => {
            document.querySelector("body").innerHTML=""
            let div=document.createElement("div")
            let img=document.createElement("img")
             img.src='./img/PAY.png'
            img.style.width="100%"
           img.style.height="100%"
          
            
            document.querySelector("body").append(img)
       
            
        }, 2000);
            
    
 
          
     }else{
         let input = document.getElementById("input_card").value
         console.log(input)
         
          p1.innerText="please enter you card number"
          p1.style.color="red"
          p1.style.margin="18"
          
          p2.innerText="please enter  card month"
          p2.style.color="red"
          p2.style.margin="18"
          
          p3.innerText="please enter you card year"
          p3.style.color="red"
          p3.style.margin="18"
          
          p4.innerText="please enter you card cvv"
          p4.style.color="red"
          p4.style.margin="18"
     }
 }
