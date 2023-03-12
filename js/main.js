// Abbriviate this mess (1.0000000000013 Points and 1113110) 
function abbrNum(value) {
    let newValue = value;
    const suffixes = ["", "K", "M", "B","T","Qa","Qi","Sx","Sp","Oc","No","Dc","Ud","Dd","Td","Qad","Qid","Sxd","Spd","Ocd","Nod","Vg","Uvg"];
    let suffixNum = 0;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }
  
    newValue = newValue.toPrecision(3);
  
    newValue += suffixes[suffixNum];
    return newValue;
  }

// Player Data
var gameData = {
    // Version
    version: "InDev V0.0.0",
    // Points
    Points: 0,
    PointsPerClick: 1,
    ClicksPerSecond: 0,
}

function getVersion() { 
    document.getElementById("Version").innerHTML = gameData.version
}

// Items For Sale
var shopItems = {
    // Max Level. cmon its not that hard to read.
    maxLevel: 100,
    // ---Points Per Click---

    // Better Mouse
    bmCost: 10,
    bmGive: 1,
    bmLevel: 0,
    bmXCost: 1.10,

    // Mouse Application by [REDACTED]
    maCost: 25,
    maGive: 2,
    maLevel: 0,
    maXCost: 1.25,

    // Quadruple Click Mod
    qcCost: 50,
    qcGive: 4,
    qcLevel: 0,
    qcXCost: 1.325,

    // ---Clicks Per Second---

    // Auto Clicker
    acCost: 50,
    acSecond: 1,
    acLevel: 0,
    acXCost: 1.20,

    // Good Auto Clicker
    gaCost: 165,
    gaSecond: 5,
    gaLevel: 0,
    gaXCost: 1.50,

    // OP Auto Clicker
    oaCost: 374.9,
    oaSecond: 10,
    oaLevel: 0,
    oaXCost: 2.22,
}

// X Point/c Button
function getPoints() {
    gameData.Points += gameData.PointsPerClick
    document.getElementById("pDisplay").innerHTML = abbrNum(gameData.Points) + " Points"
}

function itemBought(item) {
    if (shopItems.maxLevel > shopItems[item+'Level']) {
        if (gameData.Points >= shopItems[item+'Cost']) {
            gameData.Points -= shopItems[item+'Cost']
            shopItems[item+'Cost'] *= shopItems[item+'XCost']
            shopItems[item+'Level'] += 1
            document.getElementById(item+'Button').innerHTML = "Level: " + abbrNum(shopItems[item+'Level']) + " | Cost: " + abbrNum(shopItems[item+'Cost']) + " Points"
            if (shopItems.maxLevel == shopItems[item+'Level']) {
                document.getElementById(item+'Button').innerHTML = "Level: MAX (100)"
            }
            document.getElementById("pDisplay").innerHTML = abbrNum(gameData.Points) + " Points"
            if (shopItems[item+'Second']) {
                gameData.ClicksPerSecond += shopItems[item+'Second']
                document.getElementById("cpsDisplay").innerHTML = abbrNum(gameData.ClicksPerSecond) + " Clicks/s"
            }
            if (shopItems[item+'Give']) {
                gameData.PointsPerClick += shopItems[item+'Give']
                document.getElementById("ppcDisplay").innerHTML = abbrNum(gameData.PointsPerClick) + " Points/c"
            }
        }
    }
}

function clicksPerSecond() {
    gameData.Points += gameData.ClicksPerSecond * gameData.PointsPerClick
    document.getElementById("pDisplay").innerHTML = abbrNum(gameData.Points) + " Points"
    document.getElementById("cpsDisplay").innerHTML = abbrNum(gameData.ClicksPerSecond) + " Clicks/s"
}

function resetData() {
    let check = prompt("Are you sure you want to refresh? (Yes, there is no save function.)","Y/N Only")
    if (check == "Y") {
        location.reload()
    }
}

setTimeout(getVersion,1)
setInterval(clicksPerSecond, 1000);