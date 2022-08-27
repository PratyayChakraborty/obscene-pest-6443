let id;
    let i = 0;
    let images = ["https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/779826e7-4acc-3006-feab-225088df6150/original/Chicken_Fry_Cut_Small_Pieces_Hero_Shot.jpg?format=webp",
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/acce8d0e-edb9-b641-df4c-b40359a381ad/original/Chicken_Fry_Cut_Small_Pieces_No_of_Piece_Shot.jpg?format=webp",
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/5ac72cc8-9728-0612-db02-290214378580/original/1623485172.jpg?format=webp",
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/9889ddd3-3aea-1e1d-31fb-1060d7a14a8b/original/1632402586.png?format=webp",

    ]
    function slideShow() {

        let container = document.getElementById("Image_Section");


        id = setInterval(function () {
            //console.log(i);
            if (i === images.length) {
                i = 0;
            }
            let img = document.createElement("img");
            img.src = images[i];
            container.innerHTML = null;
            container.append(img);
            i++;

        }, 3000);
    }
    slideShow();
    // function pause(){
    //     clearInterval(id);
    // }
    // pause();



    // new code about chicken data
    // var chickenDataLS = JSON.parse(localStorage.getItem("chickenData2")) || [];
    // console.log("chickenDataLS",);
    // _combo(chickenDataLS);


    // function _combo(chickenDataLS) {
    //     console.log("chcikendata:",chickenDataLS);



    //     chickenDataLS.map(function (e, index, array) {
    //         var main = document.createElement("div");
    //         main.setAttribute("class", "main");
    //         var img = document.createElement("img");

    //         img.setAttribute("src", e.imgUrl);
    //         img.setAttribute("class", "image");
    //         var name = document.createElement("h4");
    //         name.innerText = e.name;
    //         var des = document.createElement("p");
    //         des.setAttribute("class", "des");
    //         des.innerText = e.des;
    //         var wgt = document.createElement("div");
    //         wgt.setAttribute("class", "wgt");
    //         var net_tag = document.createElement("h6");
    //         net_tag.innerText = e.net_tag;

    //         var net = document.createElement("h6");
    //         net.innerText = e.net;
    //         var n_gm = document.createElement("h6");
    //         n_gm.innerText = e.unit;

    //         var gross_tag = document.createElement("h6");
    //         gross_tag.innerText = e.gross_tag;
    //         var gross = document.createElement("h6");
    //         gross.innerText = e.gross;
    //         var g_gm = document.createElement("h6");
    //         g_gm.innerText = e.unit;

    //         var hold = document.createElement("div");
    //         hold.setAttribute("class", "hold");
    //         var pri = document.createElement("div");
    //         pri.setAttribute("class", "pri");
    //         var price_tag = document.createElement("h5");
    //         price_tag.innerText = e.price_tag;
    //         var cuurency = document.createElement("h5");
    //         cuurency.innerText = e.cuurency;
    //         var price = document.createElement("h5");
    //         price.innerText = e.price;
    //         var strikePrice = document.createElement("strike");
    //         strikePrice.innerText = e.strikePrice;


    //         var btndiv = document.createElement("div");
    //         btndiv.setAttribute("class", "btndiv");
    //         var addCart = document.createElement("button");
    //         addCart.setAttribute("class", "addcartbtn");
    //         addCart.innerText = "Add to Cart";
    //         addCart.addEventListener("click", function () {
    //             addToCart(e);
    //         });

    //         wgt.append(net_tag, net, n_gm, gross_tag, gross, g_gm);

    //         btndiv.append(addCart)
    //         pri.append(price_tag, cuurency, price, strikePrice, addCart);


    //         main.append(img, name, des, wgt, pri);
    //         document.querySelector("#chickenContainer").append(main);
    //     })

    // };

    // function addToCart(e) {
    //     // e.quant = 1
    //     // cardArr.push(e)
    //     // localStorage.setItem("cardArr", JSON.stringify(cardArr));
    //     // display(cardArr);
    //     // subto();
    //     // addE()
    //     //console.log(cardArr)
    //     //
    // };
    //   //chicken data code ends