let local=["streak","divisionHigh","percentageHigh","equalHigh","discountHigh","divisionDiff","percentageDiff","equalDiff","discountDiff"];
let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
document.addEventListener("DOMContentLoaded", function() {
    let nan=0;
    if (localStorage.getItem("name")==null) {
        let n= prompt("Enter your name").split(" ");
        let t="";
        for(i=0;i<n.length;i++){
            if (n[i][0]==undefined||n[i][0]==" ") {
                continue;
            }
            t+=n[i][0];
        }
        if (t.length==0) {
            t=alpha[~~(Math.random()*26)]
        }
        t=t.toUpperCase();
        localStorage.setItem("name",t);
    }
    if (localStorage.getItem("checkStreak")==null) {
        localStorage.setItem("checkStreak",["0","0","0","0"]);
    }
    if (localStorage.getItem("time")==null){
        const date1 = new Date();
        let t=date1.getFullYear();
        let t1=date1.getMonth();
        let t2=date1.getDate();
        localStorage.setItem("time",[t,t1+1,t2+1]);
    }
        const date1 = new Date(localStorage.time);
        const date=new Date();
        var t=localStorage.time.split(",");
        t[2]= +(t[2])+1;
        let date2=new Date(t.join(","));
        // console.log(date+"\n"+date1+"\n"+date2);
        var c=0;
        if (date1[Symbol.toPrimitive]('number')<date[Symbol.toPrimitive]('number')&&date[Symbol.toPrimitive]('number')<date2[Symbol.toPrimitive]('number')){
            let set=localStorage.checkStreak.split(",");
            for(i=0;i<set.length;i++){
                if(set[i]==="0"){
                    localStorage.setItem("streak",0);
                    let t=date.getFullYear();
                    let t1=date.getMonth();
                    let t2=date.getDate();
                    localStorage.setItem("time",[t,t1+1,t2+1]);
                    break;
                }else{
                    c++;
                }
            }
            if(c==4){
                localStorage.setItem("streak",+(localStorage.streak)+1);
                let t=date.getFullYear();
                let t1=date.getMonth();
                let t2=date.getDate();
                localStorage.setItem("time",[t,t1+1,t2+1]);
            }
            localStorage.setItem("checkStreak",[0,0,0,0]);     
        }else if(date.getDate()+1!==date1.getDate()){
            localStorage.setItem("streak",0);
            let t=date.getFullYear();
            let t1=date.getMonth();
            let t2=date.getDate();
            localStorage.setItem("time",[t,t1+1,t2+1]);
        }
    
        if (localStorage.getItem(local[0])==null) {
            localStorage.setItem("streak",0);
            nan=1;
        }

    for(i=1;i<local.length;i++)
        if(localStorage.getItem(local[i])==null)
            localStorage.setItem(local[i],0);
            
            document.getElementById("hi1").innerHTML=localStorage.name;
            document.getElementById("hi2").innerHTML="Streak : "+localStorage.streak;
            document.getElementById("one").innerHTML="High Score : "+localStorage.divisionHigh;
            document.getElementById("two").innerHTML="Difficulty :"+localStorage.divisionDiff+"/400";
            document.getElementById("three").innerHTML="High Score : "+localStorage.percentageHigh;
            document.getElementById("four").innerHTML="Difficulty :"+localStorage.percentageDiff+"/400";
            document.getElementById("five").innerHTML="High Score : "+localStorage.equalHigh;
            document.getElementById("six").innerHTML="Difficulty :"+localStorage.equalDiff+"/400";
            document.getElementById("seven").innerHTML="High Score : "+localStorage.discountHigh;
            document.getElementById("eight").innerHTML="Difficulty :"+localStorage.discountDiff+"/400";

    if (nan==1) {
        setTimeout(function(){ localStorage.setItem(local[0],0);document.getElementById("hi2").innerHTML="Streak : "+localStorage.streak;},3000);
    }
});