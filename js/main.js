function abbrNum(value) {
    let newValue = value;
    const suffixes = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud', 'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Ocd', 'Nod', 'V', 'Uv', 'Dv', 'Tv', 'Qav', 'Qiv', 'Sxv', 'Spv', 'Ocv', 'Nov', 'Tg', 'Utg', 'Dtg', 'Ttg', 'Qatg', 'Qitg', 'Sxtg', 'Sptg', 'Octg', 'Notg', 'Qaa', 'Uqa', 'Dqa', 'Tqa', 'Qaqa', 'Qiqa', 'Sxqa', 'Spqa', 'Ocqa', 'Noqa', 'Qia', 'Uqi', 'Dqi', 'Tqi', 'Qaqi', 'Qiqi', 'Sxqi', 'Spqi', 'Ocqi', 'Noqi', 'Sxa', 'Usx', 'Dsx', 'Tsx', 'Qasx', 'Qisx', 'Sxsx', 'Spsx', 'Ocsx', 'Nosx', 'Spa', 'Usp', 'Dsp', 'Tsp', 'Qasp', 'Qisp', 'Sxsp', 'Spsp', 'Ocsp', 'Nosp', 'Oca', 'Uoc', 'Doc', 'Toc', 'Qaoc', 'Qioc', 'Sxoc', 'Spoc', 'Ococ', 'Nooc', 'Na', 'Una', 'Dna', 'Tna', 'Qana', 'Qina', 'Sxna', 'Spna', 'Ocna', 'Nona', 'De', 'Ude', 'Dde', 'Tde', 'Qade', 'Qide', 'Sxde', 'Spde', 'Ocde', 'Node', 'Ue', 'Uue', 'Due', 'Tue', 'Quue', 'Quiue', 'Sxue', 'Spue', 'Ocue', 'Noue', 'Duotrigintillion', 'Uduotrigintillion', 'Dduotrigintillion', 'Tduotrigintillion', 'Qaduotrigintillion', 'Qiduotrigintillion', 'Sxduotrigintillion', 'Spduotrigintillion', 'Ocduotrigintillion', 'Noduotrigintillion', 'Tritrigintillion', 'Utritrigintillion', 'Dtritrigintillion', 'Ttritrigintillion', 'Qatritrigintillion', 'Qitritrigintillion', 'Sxtritrigintillion', 'Sptritrigintillion', 'Octritrigintillion', 'Notritrigintillion', 'Quattuortrigintillion', 'Uquattuortrigintillion', 'Dquattuortrigintillion', 'Tquattuortrigintillion', 'Qaquattuortrigintillion', 'Qiquattuortrigintillion', 'Sxquattuortrigintillion', 'Spquattuortrigintillion']
    let suffixNum = 0;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }
  
    newValue = newValue.toPrecision(3);
  
    newValue += suffixes[suffixNum];
    return newValue;
}
const gameData = {
    version: "InDev V0.0.0",
    points: 0,
    pointsPerClick: 1,
    clicksPerSecond: 0,
    };
    
const shopItems = {
    maxLevel: 1000,
    
    bm: {
    cost: 10,
    give: 1,
    level: 0,
    xCost: 1.10,
    },
    
    ma: {
    cost: 25,
    give: 2,
    level: 0,
    xCost: 1.25,
    },
    
    qc: {
    cost: 50,
    give: 4,
    level: 0,
    xCost: 1.325,
    },
    
    ha: {
    cost: 175,
    give: 12,
    level: 0,
    xCost: 1.5,
    },
    
    ie: {
    cost: 325,
    give: 28,
    level: 0,
    xCost: 1.9,
    },
    
    ac: {
    cost: 50,
    second: 1,
    level: 0,
    xCost: 1.20,
    },
    
    ga: {
    cost: 165,
    second: 5,
    level: 0,
    xCost: 1.50,
    },
    
    oa: {
    cost: 374.9,
    second: 10,
    level: 0,
    xCost: 2.22,
    },

    sm: {
        cost: 750,
        second: 25,
        level: 0,
        xCost: 1,
    },

    fc: {
        cost: 150,
        second: 60,
        level: 0,
        xCost: 2.75,
    },
};
    
    function getVersion() {
    document.getElementById("Version").innerHTML = gameData.version;
    }
    
    function getPoints() {
    gameData.points += gameData.pointsPerClick;
    document.getElementById("pDisplay").innerHTML = abbrNum(gameData.points) + " Points";
    }
    
    function itemBought(item) {
    const shopItem = shopItems[item];
    if (shopItems.maxLevel > shopItem.level) {
    if (gameData.points >= shopItem.cost) {
    gameData.points -= shopItem.cost;
    shopItem.cost *= shopItem.xCost;
    shopItem.level += 1;
    const buttonElement = document.getElementById(item + "Button");
    buttonElement.innerHTML = 'Level: ' + abbrNum(shopItem.level) + ' | Cost: ' + abbrNum(shopItem.cost) + ' Points'
    if (shopItems.maxLevel === shopItem.level) {
    buttonElement.innerHTML = 'Level: MAX (' + shopItems.maxLevel + ')';
    }
    document.getElementById("pDisplay").innerHTML = abbrNum(gameData.points) + " Points";
    if (shopItem.second) {
    gameData.clicksPerSecond += shopItem.second;
    document.getElementById("cpsDisplay").innerHTML = abbrNum(gameData.clicksPerSecond) + " Clicks/s";
    }
    if (shopItem.give) {
    gameData.pointsPerClick += shopItem.give;
    document.getElementById("ppcDisplay").innerHTML = abbrNum(gameData.pointsPerClick) + " Points/c";
    }
    }
    }
    }
    
    function clicksPerSecond() {
    gameData.points += gameData.clicksPerSecond * gameData.pointsPerClick;
    document.getElementById("pDisplay").innerHTML = abbrNum(gameData.points) + " Points";
    document.getElementById("cpsDisplay").innerHTML = abbrNum(gameData.clicksPerSecond) + " Clicks/s";
    }
    
    function resetData() {
    const check = prompt("Are you sure you want to reset?");
    if (check === "Y") {
    location.reload();
    }
    }
    
    function toB64() {
    const encoded = btoa(JSON.stringify(gameData));
    console.log(encoded)
}
function fromB64(text) {
    const decoded = atob(text);
    console.log(decoded);
}
setTimeout(getVersion,1)
setInterval(clicksPerSecond, 1000);