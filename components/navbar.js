

function navbar() {
    return `
    <div id="top-navbar">
    <a href="#">Why Licious?</a>
    <a href="#">Download App</a>
    <img src="https://www.licious.in/img/rebranding/ios_app_icon.svg" alt="appstore-logo">
    <img src="https://www.licious.in/img/rebranding/android_app_icon.svg" alt="playstore-logo">
    <a href="#" class="FSSC">FSSC 22000 Certification</a>
    <a href="#">About Us</a>
    <a href="#">Career @Licious</a>
    <a href="#">Contact US</a>
</div>

<div id="second-top-navbar">
    <div><a href="#"><img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="error"></a> </div>
    <div id="location-text">
        <p id="scity">Select City</p>
                    <select name="" id="location" onclick="showCities()">
                        <option value=""disabled selected hidden>Enter City</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="NCR ">NCR </option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Panchkula">Panchkula</option>
                        <option value="Mohali">Mohali</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Cochin">Cochin</option>
                        <option value="Vijayawada">Vijayawada</option>
                        <option value="Visakhapatnam">Visakhapatnam</option>
                        <option value="Pondicherry">Pondicherry</option>
                        <option value="Trichy">Trichy</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Lucknow">Lucknow</option>
                        <option value="Kanpur">Kanpur</option>
                        <option value="Agra">Agra</option>
                        <option value="Thrissur">Thrissur</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Bhilai">Bhilai</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Palakkad">Palakkad</option>
                    </select>
    </div>
    <div><input type="text" placeholder="Search for any delicious product"  id="search"></div>
    <div><span>Categories</span></div>
    <div><span>Login</span></div>
    <div id="cartlogobtn"><span>Cart</span></div>
</div>`;
    
}

export default navbar;

{/* <span class="material-symbols-outlined">
    person
    </span> */}