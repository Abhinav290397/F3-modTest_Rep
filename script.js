
let ipAdd = '';
window.onload = function(){
    const Info = document.getElementById("info");

    fetch("https://api.ipify.org?format=json").then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data.ip);
        ipAdd = data.ip;
        return Info.innerText = `Your Current IP Address is ${data.ip}`;
    }).catch((error) => {
        console.log(error);
    });
}

const Btn = document.getElementById("btn");
const Main = document.getElementById("main");
const Main2 = document.getElementById("main2");


let pincode = ``;
async function fn(){
const response = await fetch(`https://ipapi.co/${ipAdd}/json/`);
const data = await response.json();
console.log(data);
Main.style.display = "none";
Main2.style.display = "block";

const P1 = document.getElementById("p1");
P1.innerText = `IP Address: ${ipAdd}`;

const Lat = document.getElementById("Lat");
const City = document.getElementById("city");
const Org = document.getElementById("org");
const Long = document.getElementById("Long");
const Region = document.getElementById("region");
const HostName = document.getElementById("hostname");

Lat.innerText = `Lat: ${data.latitude}`;
Long.innerText = `Long: ${data.longitude}`;
City.innerText = `City: ${data.city}`;
Org.innerText = `Organization: ${data.org}`;
Region.innerText = `Region: ${data.region}`;
HostName.innerText = `Hostname: ${data.ip}`;

const TZ = document.getElementById("tz");
const DT = document.getElementById("dt");
const Pcode = document.getElementById("pc");

TZ.innerText = `TimeZone : ${data.timezone}`;
Pcode.innerText = `Pincode: ${data.postal}`;

pincode = Pcode.innerText;

let getDateAndTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

DT.innerText = `Date: ${getDateAndTime} `;
}

Btn.addEventListener("click",fn,{ passive: true });

async function getPostOffices(pincode){
    const res = await fetch(`https//api.postalpincode.in/pincode/${pincode}`)
    const Data = res.json();
    console.log(Data);
}
getPostOffices(pincode);


