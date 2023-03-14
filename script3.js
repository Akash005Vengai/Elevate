let score,timerst,cnt,match,check,arrId,main,cnt1;
let Difficulty;
document.addEventListener("DOMContentLoaded", function() {
    cnt1=60;
    timerst1=null;
    init();
    Difficulty=+(localStorage.equalDiff);
    reset();
    document.body.style.backgroundColor="rgba(" + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ",1)";;
    myTimer1();
    number();
});

function myTimer1(){
    if (timerst1 == null) {
        timerst1 = setInterval(function() {
            cnt1 -= 1;
            document.getElementById("time").innerText = cnt1;
            if (cnt1<0){
                stop();
                if (match>8) {
                    let set=localStorage.checkStreak.split(",");
                    if (set[2]=="0"&&set[2]==0) {
                        set[2]="1";
                    }
                    localStorage.setItem("checkStreak",[set[0],set[1],set[2],set[3]]);
                    if (+(localStorage.equalHigh)<score){
                        localStorage.setItem("equalHigh",score);
                    }
                    if (+(localStorage.equalDiff)<180) {
                        localStorage.setItem("equalDiff",Number(localStorage.equalDiff)+2);   
                    } else {
                        localStorage.setItem("equalDiff",Number(localStorage.equalDiff)+1);
                    }       
                    document.body.style = "background-color:black";
                    document.body.innerHTML = "<a href='index.html'/> <div id='main'><img id='img1' src='win.jpg'/><p id='p1'>" + score + "</p></div></a>";   
                } else {
                    document.body.style = "background-color:black";
                    document.body.innerHTML = "<a href='index.html' <div id='main'><img id='img1' src='lose.jpg'/><div></div></div></a>"
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

function stop() {
    clearInterval(timerst1);
    timerst1 = null;
}

function reset() {
    stop1();
    cnt = 0;
}

function stop1() {
    clearInterval(timerst);
    timerst = null;
}

function init(){
    score=0;
    match=0;
    timerst=null;
    check=[];
    arrId=[];
    main=0;
}

function five(r,arr) {
    let a=[2,3,4,5,6];
    var b=[];
    var c =0;
    var d=a.length-1;
    for(let j = 0; j<=d;j++){
      c =Math.floor(Math.random() * a.length);
      b[j]=a[c];
      a.splice(c,1);
  }
    let t=b;

    document.getElementById("child"+t[0]).innerText=r+"/"+arr[0];
    document.getElementById("child"+t[0]).setAttribute("data-value",(r/arr[0]).toFixed(2));
    document.getElementById("child"+t[1]).innerText=r+"/"+arr[1];
    document.getElementById("child"+t[1]).setAttribute("data-value",(r/arr[1]).toFixed(2));
    document.getElementById("child"+t[2]).innerText=r+".00\nof\n"+arr[0]+".00\n";
    document.getElementById("child"+t[2]).setAttribute("data-value",(r/arr[0]).toFixed(2));
    document.getElementById("child"+t[3]).innerText=(r/arr[1]).toFixed(2);
    document.getElementById("child"+t[3]).setAttribute("data-value",(r/arr[1]).toFixed(2));
    let te=getRandomInt(10,20);
    document.getElementById("child"+t[4]).innerText=((r+2)/te).toFixed(2);
    document.getElementById("child"+t[4]).setAttribute("data-value",((r+2)/te).toFixed(2));
    for (let i = 2; i <=6; i++) {
        document.getElementById("child"+i).parentNode.setAttribute("onclick","submit(this)")
        document.getElementById("child"+i).parentNode.style="background-color:rgb(60, 60, 250);border: 2px solid blue";
        }
}

function four(r,arr) {
    let a=[1,2,3,4];
    var b=[];
    var c =0;
    var d=a.length-1;
    for(let j = 0; j<=d;j++){
      c =Math.floor(Math.random() * a.length);
      b[j]=a[c];
      a.splice(c,1);
  }
    let t=b;

    document.getElementById("child"+t[0]).innerText=(r/arr[1]).toFixed(2);
    document.getElementById("child"+t[0]).setAttribute("data-value",(r/arr[1]).toFixed(2));
    document.getElementById("child"+t[1]).innerText=(r/arr[0]).toFixed(2);
    document.getElementById("child"+t[1]).setAttribute("data-value",(r/arr[0]).toFixed(2));
    document.getElementById("child"+t[2]).innerText=r+"/"+arr[1];
    document.getElementById("child"+t[2]).setAttribute("data-value",(r/arr[1]).toFixed(2));
    document.getElementById("child"+t[3]).innerText=r+".00\nof\n"+arr[0]+".00\n";
    document.getElementById("child"+t[3]).setAttribute("data-value",(r/arr[0]).toFixed(2));
}

function start(arr){
    match++;
    document.getElementById("match").innerText="Match : "+match;
    if(arr.length==1){
        let y=getRandomInt(4,10)
        let r=getRandomInt(2,4);
        if(r==arr[0]&&r==5){
            r--;
        }
        if(r==arr[0]&&r!=5){
            r++;
        }
        if(r==2){
            document.getElementById("child1").innerText=r+"/"+arr[0];
            document.getElementById("child1").setAttribute("data-value",(r/arr[0]).toFixed(2));
            document.getElementById("child2").innerText=r+".00\nof\n"+arr[0]+".00\n";
            document.getElementById("child2").setAttribute("data-value",(r/arr[0]).toFixed(2));
            document.getElementById("child3").innerText=(1/y).toFixed(2);
            document.getElementById("child3").setAttribute("data-value",(1/y).toFixed(2));
            document.getElementById("child1").parentNode.style="background-color:rgb(60, 60, 250);border: 2px solid blue";
            document.getElementById("child1").parentNode.setAttribute("onclick","submit(this)")
        }else if(r==3){
            document.getElementById("child3").innerText=r+"/"+arr[0];
            document.getElementById("child3").setAttribute("data-value",(r/arr[0]).toFixed(2));
            document.getElementById("child2").innerText=(r/arr[0]).toFixed(2);
            document.getElementById("child2").setAttribute("data-value",(r/arr[0]).toFixed(2));
            document.getElementById("child4").innerText=(1/y).toFixed(2);
            document.getElementById("child4").setAttribute("data-value",(1/y).toFixed(2));
            document.getElementById("child4").parentNode.style="background-color:rgb(60, 60, 250);border: 2px solid blue";
            document.getElementById("child4").parentNode.setAttribute("onclick","submit(this)")
        }else if(r==4){
            document.getElementById("child3").innerText=r+"/"+arr[0];
            document.getElementById("child3").setAttribute("data-value",(r/arr[0]).toFixed(2));
            document.getElementById("child4").innerText=(r/arr[0]).toFixed(2);
            document.getElementById("child4").setAttribute("data-value",(r/arr[0]).toFixed(2));
            document.getElementById("child2").innerText=(1/y).toFixed(2);
            document.getElementById("child2").setAttribute("data-value",(1/y).toFixed(2));
            document.getElementById("child4").parentNode.style="background-color:rgb(60, 60, 250);border: 2px solid blue";
            document.getElementById("child4").parentNode.setAttribute("onclick","submit(this)")
        }else{
            document.getElementById("child1").innerText=r+"/"+arr[0];
            document.getElementById("child1").setAttribute("data-value",(r/arr[0]).toFixed(2));
            document.getElementById("child3").innerText=r+".00\nof\n"+arr[0]+".00\n";
            document.getElementById("child3").setAttribute("data-value",(r/arr[0]).toFixed(2));
            document.getElementById("child2").innerText=(1/y).toFixed(2);
            document.getElementById("child2").setAttribute("data-value",(1/y).toFixed(2));
            document.getElementById("child1").parentNode.style="background-color:rgb(60, 60, 250);border: 2px solid blue";
            document.getElementById("child1").parentNode.setAttribute("onclick","submit(this)")
        }
        document.getElementById("child3").parentNode.setAttribute("onclick","submit(this)")
        document.getElementById("child2").parentNode.setAttribute("onclick","submit(this)")
        document.getElementById("child2").parentNode.style="background-color:rgb(60, 60, 250);border: 2px solid blue";
        document.getElementById("child3").parentNode.style="background-color:rgb(60, 60, 250);border: 2px solid blue";

    }else if(arr.length==2){
        let r;
        if (cnt1<=30) {
            r=getRandomInt(1,5);
            five(r,arr);
        } else {
           r=getRandomInt(1,4);
       four(r,arr);
        for (let j = 1; j <=4; j++) {
        document.getElementById("child"+j).parentNode.setAttribute("onclick","submit(this)")
        document.getElementById("child"+j).parentNode.style="background-color:rgb(60, 60, 250);border: 2px solid blue";
        }
        }
    }
}

function number() {
    myTimer();
    var t=[];
    if(cnt1>50){
        t.push(getRandomInt(2,10));
        main=1;
    }else{
        t.push(getRandomInt(2,10));
        t.push(t[0]+getRandomInt(2,10));
        main=2;
    }
    init1();
    start(t);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function init1() {
    for(i=1;i<=6;i++){
    document.getElementById("child"+i).parentNode.setAttribute("onclick","")
    document.getElementById("child"+i).innerText="";
    document.getElementById("child"+i).parentNode.style="background-color:"+document.body.style.backgroundColor;;
    }
}


function submit(k){;
            k.style.transform="scale(1.1)";
            k.style.background="rgba(145,25,232,1)";
            arrId.push(k.childNodes[0].id);
            check.push(k.childNodes[0].dataset.value); 
            if(arrId[0]==arrId[1]){
            k.style.background="rgb(60, 60, 250)";
            k.style.transform="scale(1)";
            arrId=[];
            check=[];
            return;
            }
            setTimeout(function(){
            if(check.length==2){
            if (check[0]==check[1]){
                scoreIncrease();
                main--;
                for (let i = 0; i < arrId.length; i++) {
                document.getElementById(arrId[i]).innerText="";
                document.getElementById(arrId[i]).parentNode.setAttribute("onclick","")
                document.getElementById(arrId[i]).parentNode.style="background-color:"+document.body.style.backgroundColor;
                stop1();
                reset();
                }
                check=[];
                arrId=[];
                if(main<=0){
                    number();
                }
            }else{
                stop();
                document.body.innerHTML += "<div onclick='remover()'  id='wrongAns'><img id='img1' src='icon-x-outline.svg'/><div class='div' id='div1'>"+(document.getElementById(arrId[0]).innerText)+"</div><div class='div' id='div2'>"+(document.getElementById(arrId[1]).innerText)+"</div><div id='div3'>"+(document.getElementById(arrId[0]).dataset.value)+"</div><div id='div4'>"+(document.getElementById(arrId[1]).dataset.value)+"</div></div>";
            }
            
            
    }
},100);
}

function scoreIncrease() {
    if (cnt>10) {
        score+=getRandomInt(200,300);
    } else {
        score += (600 - (getRandomInt(20,30) * cnt));
    }
    document.getElementById("score").innerText = score;
}

function remover() {
        myTimer1();
        cnt1-=2;
        document.getElementById("wrongAns").style="display:none";
        document.getElementById("wrongAns").remove();
        document.getElementById(arrId[0]).parentNode.style.transform="scale(1)";
        document.getElementById(arrId[0]).parentNode.style="background-color:rgb(60, 60, 250)";
        document.getElementById(arrId[1]).parentNode.style.transform="scale(1)";
        document.getElementById(arrId[1]).parentNode.style="background-color:rgb(60, 60, 250)";
        check=[];
        arrId=[];
        if(main<=0){
            number();
        }
}