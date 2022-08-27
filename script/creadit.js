
    let id;
    let id1;
    let id3;
    let id4;
    credit = () => {

        let data = [
            {
                offer: "15% off | ICICI Credit Cards",
                heading: '15% off upto 150 on ICICI Credit Cards | On orders above 750 | Valid thrice per user per month | Valid everyday'
            },
            {
                offer: "15% off | Yes Bank Credit Cards",
                heading: '15% off upto 150 on Yes Bank Credit Cards | Minimum order value 599 | Valid twice per user | Valid everyday'
            },
            {
                offer: "10% off | Axis Credit and Debit cards",
                heading: '10% off upto 150 on all Axis Bank Cards | Minimum order value 750 | Valid once per user | Valid on Wednesday'
            },
            {
                offer: " 20% off | Federal Bank Debit Cards",
                heading: '20% off upto 200 on Federal Bank Debit Cards | Minimum order value 400 | Valid twice per user | Valid everyday'
            },
            {
                offer: "25% off | Slice Cards",
                heading: '25% off upto 200 on slice card | Minimum order value 600 | Valid once per user | Valid from Mon-Wed'
            },
            {
                offer: "10% off | HSBC Credit Card",
                heading: '10% off upto 150 on HSBC Credit Cards | Minimum order value 600 | Valid once per user | Valid from Mon to Fri'
            },
            {
                offer: "15% cashback on Simpl",
                heading: '15% cashback upto 150 on Simpl | Minimum order value 0 for new Simpl users and 500 for existing Simpl users | Valid once per user | Valid on all days'
            },
            {
                offer: "Up to Rs.100 cashback on CRED Pay",
                heading: 'Pay using CRED pay and get cashback upto Rs.100. T&Cs apply. Applicable 2 times per month'
            },
            {
                offer: "20% off | Bank of Baroda Credit Cards",
                heading: '20% off upto 200 on BoB Credit Cards | Minimum order value 600 | Valid twice per user | Valid everyday'
            },
            {
                offer: "25% off | Federal Bank Credit Cards",
                heading: '25% off upto 300 on Federal Bank Credit Cards | Minimum order value 400 | Valid twice per user | Valid everyday'
            },
            {
                offer: "25% off | Ring Cards",
                heading: '25% off upto 200 on Ring Cards | Minimum order value 300 | Valid twice per user | Valid everyday'
            },
            {
                offer: "Paytm Wallet",
                heading: '25-500 Cashback on Paytm Wallet | Minimum order value 399 | Valid twice per user | Valid everyday'
            }
        ]


        let creadit = document.getElementById("creadit")
        creadit.style.color = "red";
        creadit.style.backgroundColor = "#fdf6f6";
        // border-left: 4px solid green;
        //creadit.style.opacity="1"


        document.getElementById("payment_detail").innerHTML = ""
        let payment_detail = document.getElementById("payment_detail")
        let h1 = document.createElement("h1")
        h1.innerText = "New Card"
        payment_detail.append(h1)
        data.forEach(({ offer, heading }) => {

            let div = document.createElement("div")
            div.setAttribute("class", "offer")
            let img = document.createElement("img")
            img.src = "https://www.licious.in/img/rebranding/offer.svg"
            let div1 = document.createElement("div")
            div1.setAttribute("class", "offer_first")
            let p1 = document.createElement("p")
            p1.style.color = "red"
            p1.innerText = offer
            div1.append(img, p1)
            let p2 = document.createElement("p")
            p2.innerText = heading
            p2.setAttribute("class", "offer_secund")
            div.append(div1, p2)

            //   let div3=document.createElement("div")
            //      div3.style.border="2px  dashed #777777"

            payment_detail.append(div)

        });

        let div4 = document.createElement("div")
        div4.setAttribute("id", "card")
        let input = document.createElement("INPUT")
        input.setAttribute("id", "input_card")
        input.setAttribute("placeholder", "Enter card no.")
        input.setAttribute("type", "Number")
        let p1=document.createElement("p")
        p1.setAttribute("id","error_first")

        input.addEventListener("input", () => {
            if (id) {
                clearTimeout(id)
            }
            id = setTimeout(() => {
                cardNumber()
            }, 2000)

        })
        div4.append(input,p1)


        let div5 = document.createElement("div")
        div5.setAttribute("id", "card_cc")

        let div51 = document.createElement("div")
        div51.setAttribute("class", "error_second")
        let input1 = document.createElement("INPUT")
        input1.setAttribute("id", "input_MM")
        input1.setAttribute("placeholder", "MM")

       input1.addEventListener("input", () => {
            if (id1) {
                clearTimeout(id1)
            }
            id1 = setTimeout(() => {
              card__MM()
            }, 2000)

        })
        let p2=document.createElement("p")
        p2.setAttribute("id","error_s")
        div51.append(input1,p2)

        let div52 = document.createElement("div")
        div52.setAttribute("class", "error_yy")
        let input2 = document.createElement("INPUT")
        input2.setAttribute("id", "input_YYYY")
        input2.setAttribute("placeholder", "YYYY")
        let p3=document.createElement("p")
        p3.setAttribute("id","error_YYYY")
        
        input2.addEventListener("input", () => {
            if (id3) {
                clearTimeout(id3)
            }
            id3 = setTimeout(() => {
             card_YYYY()
            }, 2000)

        })
         
        div52.append(input2,p3)

        let div53=document.createElement("div")
        div53.setAttribute("id","error_cvv")
        let input3 = document.createElement("INPUT")
        input3.setAttribute("id", "input_cvv")
        input3.setAttribute("placeholder", "CVV")
        input3.setAttribute("type","password")
        input3.addEventListener("input", () => {
            if (id4) {
                clearTimeout(id4)
            }
            id4 = setTimeout(() => {
                card_cvv()
            }, 2000)

        })
        let p4=document.createElement("p")
        p4.setAttribute("id","error_cv")
        div53.append(input3,p4)
         
        div5.append(div51, div52, div53)

        let input4 = document.createElement("INPUT")
        input4.setAttribute("class", "input_card")
        input4.setAttribute("placeholder", "Name on card.")
        div4.append(div5, input4)
         

        let div6 = document.createElement("div")
        div6.setAttribute("id", "box")
        let input5 = document.createElement("INPUT")
        input5.setAttribute("id", "box_")
        input5.setAttribute("type", "checkbox")
        let p = document.createElement("p")
        p.innerText = "Securely save card for future use"
        div6.append(input5, p)
        let r = 239;
        let bottom = document.createElement("button")
        bottom.addEventListener("click", function () {
            payment()
            bottom.style.backgroundColor="#cbcbcb"
        })
        bottom.innerText = `Pay₹${r}`

        payment_detail.append(div4, div6, bottom)
    }
    credit()
     