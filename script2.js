let p = [];
let heart = 4;
let percentageArr= [[5,4,1],[5,4,9],[10,1,9],[10,1,11],[20,5,25],[20,5,15],[30,20,50],[30,20,10],[33,3,20],[1,30,31],[5,6,1],[5,9,14],[25,50,75],[35,25,60],[24,26,50],[45,50,5],[23,7,30],[34,4,30],[22,8,30],[43,7,50],[50,3,47],[33,13,20],[12,13,25]];
let tot, per, check, score, matchCount, roundPlay,perArr;
document.addEventListener("DOMContentLoaded", function() {
    document.body.style = "background-color:rgba(" + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ",1)";
    roundPlay = 0;
    start();
    heart = 4;
    score = 0;
    reset();
    myTimer();
});

function start() {
    tot = getRandomInt(100, 2900);
    if(roundPlay % 2==0){
        tot+=(100-(tot%100));
    }else{
        tot-=tot%100;
    }
    perArr=percentageArr[~~(Math.random()*percentageArr.length)];
    per =perArr[0];
    check = tot / 100 * per;
    matchCount = 0;
    roundPlay++;
    document.getElementById("number").innerText = tot;
    document.getElementById("p1").innerText = roundPlay + "/4";
    document.getElementById("per").innerText = per+"%";
    if (roundPlay == 5) {
        stop();
        reset();
        let set=localStorage.checkStreak.split(",");
        if (set[1]=="0"&&set[1]==0) {
            set[1]="1";
        }
        localStorage.setItem("checkStreak",[set[0],set[1],set[2],set[3]]);
        if (+(localStorage.percentageHigh)<score) {
            localStorage.setItem("percentageHigh",score);
        }
        if (+(localStorage.percentageDiff)<180) {
            localStorage.setItem("percentageDiff",+(localStorage.percentageDiff)+2);
        } else {
            localStorage.setItem("percentageDiff",+(localStorage.percentageDiff)+1);
        }
        document.body.style = "background-color:black";
        document.body.innerHTML = "<a href='index.html' <div id='wrongAns'><img id='img1' src='win.jpg'/><p id='p2'>" + score + "</p></div></a>";
    }
}

function start1() {
    per = perArr[matchCount];
    check = tot / 100 * per;
    document.getElementById("number").innerText = tot;
    document.getElementById("per").innerText = per+"%";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function checkwon(a) {
    if (p.length == 5) {
        return;
    }
    p.push(a);
    match(1);
}

function match(a) {
    let ans = "";
    for (let i = 0; i < p.length; i++) {
        ans += p[i];
    }
    if (a == 2) {
        return ans;
    }
    document.getElementById("result").innerText = ans;
}

function scoreIncrease() {
    if (cnt<5) {
        score += getRandomInt(200, 250) ;
    } else {
        score += 1000 - (getRandomInt(40, 50) *(15-cnt));
    }
    document.getElementById("score").innerText = score;
}

function submit() {
    stop();
    matchCount++;
    let result1 = match(2);
    if (+(result1) == check) {
        scoreIncrease();
        if (matchCount == 3) {
            start();
        } else {
            start1();
        }
        reset();
        myTimer();
    } else {
        reset();
        document.body.innerHTML += "<div onclick='remover()' id='wrongAns'>" + tot + "/100*" + per + " = " + check + "</div>";
    }
    p = [];
    document.getElementById("result").innerText = "";
}

function dele() {
    p.splice(-1);
    match(1);
}
let timerst = null;
let cnt = 0;

function myTimer() {
    if (timerst == null) {
        timerst = setInterval(function() {
            cnt -= 1;
            document.getElementById("time").innerText = cnt;
            if (cnt <=0) {
                submit();
            }
        }, 1000);
    }
}

function reset() {
    stop();
    cnt = 15;
}

function stop() {
    clearInterval(timerst);
    timerst = null;
}

function remover() {
    document.getElementById("wrongAns").remove();
    heart--;
    if (heart == 3) {
        document.getElementById("heart1").style.display = "none";
    } else if (heart == 2) {
        document.getElementById("heart2").style.display = "none";
    } else if (heart == 1) {
        document.getElementById("heart3").style.display = "none";
    } else if (heart <= 0) {
        stop();
        reset();
        document.body.style = "background-color:black";
        document.body.innerHTML = "<a href='index.html'> <div id='wrongAns'><img src='gameover.gif'/><div></div></div></a>";
        return;
    }
    myTimer();
    if (matchCount >= 3) {
        start();
    } else {
        start1();
    }
}