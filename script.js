let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let stored;
document.addEventListener("DOMContentLoaded", function(){
    
    if (localStorage.getItem("name")==null) {
        let n= prompt("Enter your name");
        if (n.trim().length==0) {
            console.log('hi');
            let name=alpha[~~(Math.random()*26)];
            localStorage.setItem("name", name);
        }else{
        localStorage.setItem("name",n);
        }
    }
    if (localStorage.getItem(localStorage.name)==null){
        const date1 = new Date();
        let st=date1.getFullYear();
        let st1=date1.getMonth();
        let st2=date1.getDate();
        let obj={
            streak:0,
            divisionHigh:0,
            divisionDiff:0,
            percentageHigh:0,
            percentageDiff:0,
            equalHigh:0,
            equalDiff:0,
            discountHigh:0,
            discountDiff:0,
            checkStreak:[0,0,0,0],
            time:[st,st1+1,st2+1],
        };
        localStorage.setItem(localStorage.name,JSON.stringify(obj));
    }
        stored=JSON.parse(localStorage.getItem(localStorage.name));
    
    
        const date1 = new Date(stored.time);
        const date=new Date();
        var t=stored.time;
        t[2]= +(t[2])+1;
        let date2=new Date(t.join(","));
        var c=0;
        if (date1[Symbol.toPrimitive]('number')<date[Symbol.toPrimitive]('number')&&date[Symbol.toPrimitive]('number')<date2[Symbol.toPrimitive]('number')){
            let set=stored.checkStreak;
            for(i=0;i<set.length;i++){
                if(set[i]===0){
                    stored.streak=0;
                    let t=date.getFullYear();
                    let t1=date.getMonth();
                    let t2=date.getDate();
                    stored.time=[t,t1+1,t2+1];
                    break;
                }else{
                    c++;
                }
            }
            if(c==4){
                stored.streak= +(stored.streak)+1;
                let t=date.getFullYear();
                let t1=date.getMonth();
                let t2=date.getDate();
                stored.time=[t,t1+1,t2+1];
            }
            stored.checkStreak=[0,0,0,0];     
        }else if(date.getDate()+1!==date1.getDate()){
            console.log("wrong");
            stored.streak=0;
            let t=date.getFullYear();
            let t1=date.getMonth();
            let t2=date.getDate();
            stored.time=[t,t1+1,t2+1];
        }

            
            document.getElementById("hi1").innerHTML=localStorage.name;
            document.getElementById("hi2").innerHTML="Streak : "+stored.streak;
            document.getElementById("one").innerHTML="High Score : "+stored.divisionHigh;
            document.getElementById("two").innerHTML="Difficulty :"+stored.divisionDiff+"/400";
            document.getElementById("three").innerHTML="High Score : "+stored.percentageHigh;
            document.getElementById("four").innerHTML="Difficulty :"+stored.percentageDiff+"/400";
            document.getElementById("five").innerHTML="High Score : "+stored.equalHigh;
            document.getElementById("six").innerHTML="Difficulty :"+stored.equalDiff+"/400";
            document.getElementById("seven").innerHTML="High Score : "+stored.discountHigh;
            document.getElementById("eight").innerHTML="Difficulty :"+stored.discountDiff+"/400";

            localStorage.setItem(localStorage.name,JSON.stringify(stored));
            console.log(stored.time);
});