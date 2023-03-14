function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); 
  }
  let p=[2,5,15,5,1,2,7,3,1.25,1.30,1.75,2.5,3,10,10,20,20,2.3,4.5,7,5,10,10,1,2,1,5.8,5.8,3.5,9];
  let did=["90%","20%","66%","$1.45","35%","$1.75","$5","$2","55%","$0.7","$1","80%","50%","65%","70%","$16.3","70%","$1.1","50%","$2.7","50%","66%","$6.7","20%","55%","Tax 30%","$0.3","","50%","50%"];
  let ch=[0.2,4,5,3.55,0.65,0.25,2,1,0.56,0.6,0.75,0.5,1.5,3.5,3,3.7,6,1.2,2.25,4.3,2.5,3.4,3.3,0.8,0.9,1.3,5.5,5.8,1.75,4.5];
  let roundPlay,heart,choose,check;
  let score=0;
  function hi(count){
    let Main=document.body.appendChild(document.createElement("div"));
    Main.setAttribute("id","Pare");
    for (let i = 1; i <=count; i++) {
        let n=~~(Math.random()*p.length);
        if (check.includes(ch[n])) {
            i--;
            continue;
        }
      var t=Main.appendChild(document.createElement("div"));
      t.setAttribute("class","k"+i);
      t.setAttribute("onclick","checkWon("+Number(ch[n])+",this)");
      t.setAttribute("id",ch[n]);
      var one=t.appendChild(document.createElement("div"));
      one.setAttribute("class","for");
      var two=t.appendChild(document.createElement("div"));
      two.setAttribute("class","mid"); 
      var three=t.appendChild(document.createElement("div"));
      three.setAttribute("class","back");
      var cl=t.appendChild(document.createElement("div"));
      cl.setAttribute("class","cl");
      var last=t.appendChild(document.createElement("div"));
      last.setAttribute("class","last");
      last.innerText="$"+p[n];
      var lastone=t.appendChild(document.createElement("div"));
      lastone.setAttribute("class","last1");
      lastone.innerText=did[n];
      check.push(ch[n]);
    }
    check.sort(function(a,b){return a-b});
  }


  function disCountAll(){
    myTimer1();
    match=0;
    check=[];
    roundPlay++;
    if (roundPlay==6) {
      stop1();
      let set=localStorage.checkStreak.split(",");
      if (set[3]=="0"&&set[3]==0) {
          set[3]="1";
      }
      localStorage.setItem("checkStreak",[set[0],set[1],set[2],set[3]]);
      stop();
      if (+(localStorage.discountHigh)<score) {
        localStorage.setItem("discountHigh",score);
    }
    if (+(localStorage.discountDiff)<180) {
        localStorage.setItem("discountDiff",+(localStorage.discountDiff)+2);
    } else {
        localStorage.setItem("discountDiff",+(localStorage.discountDiff)+1);
    }
    localStorage.setItem("checkStreak",[set[0],set[1],set[2],set[3]]);
    stop();
    document.body.style = "background-color:black";
    document.body.innerHTML = "<a href='index.html' <div id='wrongAns'><img id='img1' src='win.jpg'/><p id='p2'>" + score + "</p></div></a>";
    }else if (roundPlay<3) {
      hi(2);
    }else if(roundPlay==3){
      hi(3);
    }else {
      hi(5);
    }
  }

  
  document.addEventListener("DOMContentLoaded", function () {
    roundPlay=0;
    heart=4;
    reset1();
    reset();
    myTimer();
    disCountAll();
  });
  function checkWon(a,id){
    if (a===check[match]){
      stop();
      if (cnt>2) {
        score+=getRandomInt(50,150);
    } else {
        score += (350 - (getRandomInt(20,30) * cnt));
    }
    document.getElementById("score").innerText = score;
      id.style="animation-name: none";
      id.childNodes[4].innerText="✔";
      id.childNodes[4].style="background-color:green;color:white";
      id.childNodes[1].style="background-color:green";
      id.childNodes[2].style="background-color:green";
      id.childNodes[3].style="background-color:green";
      id.childNodes[0].style="background-color:green";
      id.childNodes[5].innerText="";
      reset();
      myTimer();
    }else{
      remover();
      document.getElementById(check[match]).style="animation-name: rotater;animation-iteration-count: 2;transition:all;Animation-delay: 5millsec;animation-duration: 2s;";
      match--;
    }
    match++;
    if(match==check.length){
      stop1();
      reset1();
      document.getElementById("Pare").remove();
      setTimeout(disCountAll,100);
    }
  }
  function remover() {
    heart--;
    stop1();
    alert("You have lose your one heart");
      if (heart==3) {
        document.getElementById("heart1").style.display="none";
      }else if (heart==2) {
        document.getElementById("heart2").style.display="none";
      }else if(heart==1){
        document.getElementById("heart3").style.display="none";
      }else if(heart==0){
        document.body.style="background-color:black";
        document.body.innerHTML="<a href='index.html' <div id='wrongAns'><img src='gameover.gif'/><div></div></div></a>";
      }
      setTimeout(myTimer1,300)
  }

  function myTimer1(){
    if (timerst1 == null) {
        timerst1 = setInterval(function() {
            cnt1 -= 1;
            document.getElementById("time").innerText = cnt1;
            if (cnt1<0){
              stop1();
              if(match==check.length-1){
                stop1();
                reset1();
                document.getElementById("Pare").remove();
                setTimeout(disCountAll,100);
              }else{
                document.body.style = "background-color:black";
                document.body.innerHTML = "<a href='index.html' <div id='wrongAns'><img src='lose.jpg'/><div></div></div></a>";
              }
            }
        }, 1000);
    }
}

function myTimer() {
      if (timerst == null) {
        timerst = setInterval(function(){
          cnt += 1;
        }, 1000);
      }
    }

function stop1() {
    clearInterval(timerst1);
    timerst1 = null;
}
let timerst1,timerst,cnt,cnt1;
function reset() {
    stop();
    cnt = 0;
}

function stop() {
    clearInterval(timerst);
    timerst = null;
}

function reset1() {
  stop1();
  cnt1=10;
}