let totalMoney = 2600000000
const amountOfMoney = document.getElementById("amountOfMoney");

const spreeTotal = document.querySelector(".spreeTotal");
let spreeTotalMoney = 0;

const buttonsBuy = document.querySelectorAll(".buttonBuy");

let spreeTotalActive = false;

let itemsAmount = {
    cookie:0,
    feastables:0,
    pizza:0,
    funkoPop:0,
    jackLinks:0,
    tshirt:0,
    nokia:0,
    robux:0,
    gta:0,
    nike:0,
    xbox:0,
    headphones:0,
    champagne:0,
    bike:0,
    zhiguli:0,
    puppy:0,
    balenciaga:0,
    pc:0,
    iphone18:0,
    cow:0,
    iphoneDuo:0,
    bag:0,
    golfCart:0,
    gold:0,
    jetSki:0,
    rolex:0,
    dessertWithDiamond:0,
    truck:0,
    cybertruck:0,
    porshe:0,
    island:0,
    flycar:0,
    house:0,
    privateJet:0,
    art:0,
    footballClub:0,
    ronaldo:0,
    helicopter:0,
    yacht:0,
    penthouse:0,
    spacex:0,
    makeMovie:0,
    boeing:0,
    masterpiece:0,
    liner:0
}

let itemsCost = {
    cookie:0,
    feastables:0,
    pizza:0,
    funkoPop:0,
    jackLinks:0,
    tshirt:0,
    nokia:0,
    robux:0,
    gta:0,
    nike:0,
    xbox:0,
    headphones:0,
    champagne:0,
    bike:0,
    zhiguli:0,
    puppy:0,
    balenciaga:0,
    pc:0,
    iphone18:0,
    cow:0,
    iphoneDuo:0,
    bag:0,
    golfCart:0,
    gold:0,
    jetSki:0,
    rolex:0,
    dessertWithDiamond:0,
    truck:0,
    cybertruck:0,
    porshe:0,
    island:0,
    flycar:0,
    house:0,
    privateJet:0,
    art:0,
    footballClub:0,
    ronaldo:0,
    helicopter:0,
    yacht:0,
    penthouse:0,
    spacex:0,
    makeMovie:0,
    boeing:0,
    masterpiece:0,
    liner:0
}

const items = [
    {price:1,name:"cookie"},
    {price:3,name:"feastables"},
    {price:10,name:"pizza"},
    {price:15,name:"funkoPop"},
    {price:20,name:"jackLinks"},
    {price:25,name:"tshirt"},
    {price:35,name:"nokia"},
    {price:50,name:"robux"},
    {price:80,name:"gta"},
    {price:115,name:"nike"},
    {price:150,name:"xbox"},
    {price:230,name:"headphones"},
    {price:400,name:"champagne"},
    {price:600,name:"bike"},
    {price:700,name:"zhiguli"},
    {price:800,name:"puppy"},
    {price:1000,name:"balenciaga"},
    {price:2000,name:"pc"},
    {price:2500,name:"iphone18"},
    {price:3000,name:"cow"},
    {price:3200,name:"iphoneDuo"},
    {price:4000,name:"bag"},
    {price:10000,name:"golfCart"},
    {price:12000,name:"gold"},
    {price:18000,name:"jetSki"},
    {price:20000,name:"rolex"},
    {price:35000,name:"dessertWithDiamond"},
    {price:40000,name:"truck"},
    {price:150000,name:"cybertruck"},
    {price:200000,name:"porshe"},
    {price:250000,name:"island"},
    {price:350000,name:"flycar"},
    {price:400000,name:"house"},
    {price:4500000,name:"privateJet"},
    {price:6200000,name:"art"},
    {price:10000000,name:"footballClub"},
    {price:11000000,name:"ronaldo"},
    {price:15000000,name:"helicopter"},
    {price:20000000,name:"yacht"},
    {price:30000000,name:"penthouse"},
    {price:100000000,name:"spacex"},
    {price:200000000,name:"makeMovie"},
    {price:440000000,name:"boeing"},
    {price:450000000,name:"masterpiece"},
    {price:1000000000,name:"liner"}

]

for(let i = 0; i < items.length; i++){
    buttonsBuy[i].addEventListener("click",function(){
        buyItem(items[i].price,items[i].name);
    })
}

amountOfMoney.textContent = "$" + totalMoney.toLocaleString("en-Us");

function buyItem(price,nameItem){

    if(!spreeTotalActive){
        spreeTotal.style.display = "flex";
        spreeTotalActive = true;
    }

    totalMoney -= price;
    amountOfMoney.textContent = "$" + totalMoney.toLocaleString("en-US");
    spreeTotalMoney += price;
    document.querySelector(".spreeTotalMoney").textContent = "$" + spreeTotalMoney.toLocaleString("en-US");

    document.getElementById((nameItem + "Purchased")).style.display = "grid";

    itemsAmount[nameItem]++;
    document.getElementById("spree" + nameItem[0].toUpperCase() + nameItem.slice(1)  + "Amount").textContent = "x" + itemsAmount[nameItem];
    itemsCost[nameItem] += price;
    document.getElementById("spree" + nameItem[0].toUpperCase() + nameItem.slice(1) + "Cost").textContent = "$" + formatMoney(itemsCost[nameItem]);
    if(totalMoney === 0){
        stopTimer();
    }
    updateButtons();
}

function updateButtons(){
    for(let i = 0; i < buttonsBuy.length; i++){
        buttonsBuy[i].disabled = totalMoney - items[i].price < 0
    }
}

function formatMoney(number){
    if(number >= 1000000000){
        return (number/1000000000).toFixed(1) + "b";
    }
    else if(number >= 1000000){
        return (number/1000000).toFixed(1) + "m";
    }
    else if(number >= 1000){
        return(number/1000).toFixed(1) + "k";
    }
    return number;
}

function formatTotalMoney(number){
    if(number >= 1000000000){
        return number/1000000000 ;
    }
    else if(number >= 1000000){
        return number/1000000 ;
    }
    else if(number >= 1000){
        return number/1000;
    }
    return number;
}

let seconds = 0;
let stopTime = false;

function updateTimer(){
    if(!stopTime){
        seconds++;
        const timer = document.getElementById("timer");
    
        let hours = Math.floor(seconds/3600)
        let minutes = Math.floor((seconds % 3600) / 60);
        let sec = seconds % 60
    
        timer.textContent = String(hours).padStart(2,"0") + ":" + String(minutes).padStart(2,"0") + ":" + String(sec).padStart(2,"0");
    }
}

setInterval(updateTimer,1000);

function stopTimer(){
    stopTime = true;
}