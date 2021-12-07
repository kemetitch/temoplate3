
let countdowntimer=new Date("Dec 31, 2021 23:59:59").getTime();
let section=document.querySelector(".our-skills")
let spans=document.querySelectorAll(".prog span")
let nums=document.querySelectorAll(".price .num")
let sec=document.querySelector(".pricing")
let stats=document.querySelector(".stats")
let statsnum=document.querySelectorAll(".stats .box .number")
let started=false
let starte=false

window.onscroll=function(){
    if(window.scrollY>=section.offsetTop){
        spans.forEach((span)=>{
            span.style.width=span.dataset.width;
           })
    }
    if(window.scrollY>=sec.offsetTop){
        if(!started){
            nums.forEach((num)=>timer(num))
        }
        started=true;
    }
    if(window.scrollY>=stats.offsetTop){
        if(!starte){
            statsnum.forEach((n)=>timer(n))
        }
        starte=true;
    }

}
let countdown=setInterval(()=>{
    let datenow=new Date().getTime();
    let diff=countdowntimer-datenow;
        let days=Math.floor(diff/(1000*60*60*24));
        let hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
        let minuts=Math.floor((diff%(1000*60*60))/(1000*60));
        let seconds=Math.floor((diff%(1000*60))/1000);
        document.querySelector(".days").innerHTML = `${days}`;
        document.querySelector(".hours").innerHTML = `${hours}`;
        document.querySelector(".minuts").innerHTML = `${minuts}`;
        document.querySelector(".seconds").innerHTML = `${seconds}`;
    },1000)
function timer(el){
    let goal=el.dataset.goal
    let count=setInterval(()=>{
        el.textContent++;
        if(el.textContent==goal){
            clearInterval(count);
        }
    },3000/goal)
}