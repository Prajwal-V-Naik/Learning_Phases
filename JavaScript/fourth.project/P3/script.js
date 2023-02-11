const url = "http://api.weatherapi.com/v1/current.json?key=dc73cc4621524c7cb43105951231102&q=bengaluru";
fetch(url)
.then((response)=> response.json())
.then((data)=> console.log(data.location.country))
.catch((err)=> console.log(err));

let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temperature = document.getElementById("temperature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
    event.preventDefault();
    if(!inputBox.value){
        alert("Please Enter City name:");
        return;
    }
    const city = inputBox.value;

    const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=dc73cc4621524c7cb43105951231102&q=${city}`);
    const orgData = await fetchData.json();
    console.log(orgData);


}