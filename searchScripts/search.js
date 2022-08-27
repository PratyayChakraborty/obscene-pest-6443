let searchData = [
    {
            name: "Today's Deals",
            url: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d52759ea-ba5a-0f5b-3dc1-d28875335a3f/original/Todays_Deal_1.png",
        },
        {
            name: "Chicken",
            url: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png",
        },
        {
            name: "Fish & Seafood",
            url: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/eb162d28-5f88-a381-1d45-7f2f66d2c776/original/FIsh.png",
        },
        {
            name: "Mutton",
            url: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7113e792-7025-9e6f-6057-7174edf30856/original/Mu.png",
        },
        {
            name: "Read to Cook",
            url: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/43faaebc-f2ae-102a-ea01-af3e6c37a890/original/RTC.png",
        },
        {
            name: "Prawns",
            url: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/404e48e5-c887-1e12-7a3a-232e01fc9771/original/Prawn.png",
        },
        {
            name: "Cold Cuts",
            url: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c7f1b3a-47b4-3ade-f170-f003cace2482/original/Coldcuts.png",
        },
        {
            name: "Spreads",
            url: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/88d8c760-ee1f-7696-7827-fcc9661925cc/original/Spread_Bottle1.png",
        },
        {
            name: "Eggs",
            url: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/04d58840-f014-e613-24d4-1908db9a7e63/original/Eggs.png",
        },
        {
            name: "Biryani & Kebab",
            url: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/189690c6-c9d5-2441-938b-6c7e124972c7/original/Biryani.png",
        },
        {
            name: "Combos",
            url: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/9d531fa3-8969-b105-6e93-f8810d54ab4c/original/Combo_(1).png",
        },
        {
            name: "Featured Collections",
            url: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4720e482-c73d-6cca-3616-466432b4d0da/original/Ft_Collection_3_(1).png",
        },

    ];
    let searchDiv = document.getElementById("searchDiv");

    function displayData(searchData) {
        console.log(searchData);
        //searchDiv.innerHTML = "";
        searchData.forEach(function (el) {
            let card = document.createElement("div");
            card.setAttribute("class","cardDiv")

            let image = document.createElement("img");
            image.src = el.url;
            image.setAttribute("class","image");

            let pTag = document.createElement("p");
            pTag.innerText = el.name;
            pTag.setAttribute("class","name");

            card.append(image, pTag);
            searchDiv.append(card);


        });
    }
    displayData(searchData);
let chicken;
    
    function AppendFunc(){
        let query = document.getElementById("item-lkfdk").value;
    console.log(query);
        console.log(query);
        if(query==="chicken"){
            window.location.href="./searchResults.html"
        }
        else{
            alert("Search category is available only for chicken!");
        }

    }
    let id;
    function debounce(func, delay) {
        if (id) { //if id alreday present then clear it
            clearTimeout(id);
        }
        id = setTimeout(function () {
            func();
        }, delay);
    }
