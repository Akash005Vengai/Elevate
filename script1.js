let check = 0;
let tot, divi, roundPlay, score, heart,one, five, ten, twenty, fifty, hun, twohun;
document.addEventListener("DOMContentLoaded", function(){
    divisionNumber();
    roundPlay = 0;
    document.getElementById("round").innerText = roundPlay + "/7";
    score = 0;
    document.getElementById("score").innerText = score;
    heart = 3;
    document.body.style = "background-color:rgba(" + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ",1)";
    reset();
    myTimer();
});

function divisionNumber() {
        document.getElementById("mainans").style = "background:transparent";
        tot = getRandomInt(50, 1500);
        divi = getRandomInt(2, 20);
        tot-=(tot%divi);
        check = tot / divi;
        document.getElementById("number").innerText = tot;
        document.getElementById("divisionno").innerText = "DIVIDED BY " + divi;
        setValue(tot);
        one = 0;
        five = 0;
        ten = 0;
        twenty = 0;
        fifty = 0;
        hun = 0;
        twohun = 0;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function setValue(a) {
    if (a < 500) {
        document.getElementById("last1").innerText = 100;
        document.getElementById("last1").setAttribute("onclick", "checkwon(100)");
        document.getElementById("last2").innerText = 20;
        document.getElementById("last2").setAttribute("onclick", "checkwon(20)");
        document.getElementById("last3").innerText = 5;
        document.getElementById("last3").setAttribute("onclick", "checkwon(5)");
        document.getElementById("last4").innerText = 1;
        document.getElementById("last4").setAttribute("onclick", "checkwon(1)");
    } else {
        document.getElementById("last1").innerText = 200;
        document.getElementById("last1").setAttribute("onclick", "checkwon(200)");
        document.getElementById("last2").innerText = 50;
        document.getElementById("last2").setAttribute("onclick", "checkwon(50)");
        document.getElementById("last3").innerText = 10;
        document.getElementById("last3").setAttribute("onclick", "checkwon(10)");
        document.getElementById("last4").innerText = 1;
        document.getElementById("last4").setAttribute("onclick", "checkwon(1)");
    }
}
let value = 0;

function checkwon(a){
    if (a == 200) {
        if (twohun == 10){
            return;
        }
        twohun++;
        document.getElementById("childrens").innerHTML += "<div class='twohun' onclick='checkwon2(200)' id='twohun" + twohun + "'></div>";
        document.getElementById("twohun" + twohun).style.display = "block";
    } else if (a == 100) {
        if (hun == 10) {
            return;
        }
        hun++;
        document.getElementById("childrens").innerHTML += "<div class='hun' onclick='checkwon2(100)' id='hun" + hun + "'></div>";
        document.getElementById("hun" + hun).style.display = "block";
    } else if (a == 50) {
        if (fifty == 10) {
            return;
        }
        fifty++;
        document.getElementById("childrens").innerHTML += "<div class='fifty' onclick='checkwon2(50)' id='fifty" + fifty + "'></div>";
        document.getElementById("fifty" + fifty).style.display = "block";
    } else if (a == 20) {
        if (twenty == 10) {
            return;
        }
        twenty++;
        document.getElementById("childrens").innerHTML += "<div class='twenty' onclick='checkwon2(20)' id='twenty" + twenty + "'></div>";
        document.getElementById("twenty" + twenty).style.display = "block"
    } else if (a == 10) {
        if (ten == 10) {
            return;
        }
        ten++;
        document.getElementById("childrens").innerHTML += "<div class='ten' onclick='checkwon2(10)' id='ten" + ten + "'></div>";
        document.getElementById("ten" + ten).style.display = "block";
    } else if (a == 5) {
        if (five == 10) {
            return;
        }
        five++;
        document.getElementById("childrens").innerHTML += "<div class='five' onclick='checkwon2(5)' id='five" + five + "'></div>";
        document.getElementById("five" + five).style.display = "block";
    } else if (a == 1) {
        if (one == 10) {
            return;
        }
        one++;
        document.getElementById("childrens").innerHTML += "<div class='one' onclick='checkwon2(1)' id='one" + one + "'></div>";
        document.getElementById("one" + one).style.display = "block";
    }
    value += a;
    document.getElementById("mainans1").innerText = value;
    if (value == 0) {
        document.getElementById("mainans").style = "background:transparent";
        document.getElementById("mainans1").innerText = "";
    } else {
        document.getElementById("mainans").style = "background-color:teal";
    }
}

function submit() {
    hideAll();
    stop();
    if (value == check) {
        divisionNumber();
        roundPlay++;
        document.getElementById("round").innerText = roundPlay + "/7";
        scoreIncrease();
        document.getElementById("mainans1").innerText = "";
        value = 0;
        reset();
        myTimer();
    } else {
        document.body.innerHTML += "<div onclick='remover()' id='wrongAns'>" + tot + "/" + divi + " = " + check + "</div>";
        reset();
    }
    if (roundPlay > 6){
        Win();
    }
}

function Win() {//Winning set highScore and increase difficulty
        stop();
        reset();
        let set=localStorage.checkStreak.split(",");
        if (set[0]=="0"&&set[0]==0) {
            set[0]="1";
        }
        localStorage.setItem("checkStreak",[set[0],set[1],set[2],set[3]]);
        document.body.style = "background-color:black";
        if (+(localStorage.divisionHigh)<score) {
            localStorage.setItem("divisionHigh",score);
        }
        if (+(localStorage.divisionDiff)<180) {
            localStorage.setItem("divisionDiff",+(localStorage.divisionDiff)+2);   
        } else {
            localStorage.setItem("divisionDiff",+(localStorage.divisionDiff)+1);
        }
        document.body.innerHTML = "<a href='index.html'><div id='wrongAns'><img id='img1' src='win.jpg'/><p>" + score + "</p></div></a>";
}

function scoreIncrease() {//Score Increase
    if (cnt<5) {
        score += getRandomInt(200, 250) ;
    } else {
        score += 1000 - (getRandomInt(40, 50) *(15-cnt));
    }
    document.getElementById("score").innerText = score;
}

function checkwon2(a) {
    if (a == 200) {
        document.getElementById("twohun" + twohun).remove();
        twohun--;
    } else if (a == 100) {
        document.getElementById("hun" + hun).remove();
        hun--;
    } else if (a == 50) {
        document.getElementById("fifty" + fifty).remove();
        fifty--;
    } else if (a == 20) {
        document.getElementById("twenty" + twenty).remove()
        twenty--;
    } else if (a == 10) {
        document.getElementById("ten" + ten).remove();
        ten--;
    } else if (a == 5) {
        document.getElementById("five" + five).remove();
        five--;
    } else if (a == 1) {
        document.getElementById("one" + one).remove();
        one--;
    }
    value -= a;
    document.getElementById("mainans1").innerText = value;
    if (value == 0) {
        document.getElementById("mainans").style = "background:transparent";
        document.getElementById("mainans1").innerText = "";
    } else {
        document.getElementById("mainans").style = "background-color:teal";
    }
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
    if (heart == 2) {
        document.getElementById("heart1").style.display = "none"
    } else if (heart == 1) {
        document.getElementById("heart2").style.display = "none"
    } else if (heart == 0) {
        document.body.style = "background-color:black";
        document.body.innerHTML = "<a href='index.html' <div id='wrongAns'><img src='gameover.gif'/><div></div></div></a>"
    }
    divisionNumber();
    roundPlay++;
    stop();
    myTimer();
    document.getElementById("round").innerText = roundPlay + "/7";
    document.getElementById("mainans1").innerText = "";
    value = 0;
    if (roundPlay > 6) {
        Win();
    }
}
var g = 0;

function hideAll() {
    g++;
    var count = document.getElementById("childrens").childElementCount;
    if (g == 1) {
        count++;
    }
    if (count != 0) {
        for (let k = 0; k < count; k++)
            document.getElementById("childrens").firstChild.remove();
    }
}
