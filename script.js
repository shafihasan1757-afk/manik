/* ===========================
SOCIAL ORBIT BD V3
=========================== */

/* ===========================
DARK MODE
=========================== */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeBtn.innerHTML="☀️";

localStorage.setItem("theme","dark");

}else{

themeBtn.innerHTML="🌙";

localStorage.setItem("theme","light");

}

});


if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark");

themeBtn.innerHTML="☀️";

}


/* ===========================
MOBILE MENU
=========================== */

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

menuBtn.onclick=()=>{

nav.classList.toggle("show");

};
/* ===========================
BACK TO TOP BUTTON
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* ===========================
SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* ===========================
ACTIVE MENU
=========================== */

const currentPage=window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link=>{

if(link.getAttribute("href")===currentPage){

link.classList.add("active");

}

});
/* ===========================
LIVE SEARCH
=========================== */

const searchBox=document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener("keyup",()=>{

let value=searchBox.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let text=card.innerText.toLowerCase();

if(text.indexOf(value)>-1){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}


/* ===========================
CATEGORY FILTER
=========================== */

const filterBtns=document.querySelectorAll(".filter-btn");

const filterCards=document.querySelectorAll(".filter-card");

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

let category=btn.dataset.filter;

filterCards.forEach(card=>{

if(category==="all" || card.dataset.category===category){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});


/* ===========================
SCROLL ANIMATION
=========================== */

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveals.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

const visible=window.innerHeight-120;

if(top<visible){

sec.classList.add("show");

}

});

});
/* =====================================
COPY OFFER CODE
===================================== */

document.querySelectorAll(".copy-btn").forEach(button=>{

button.addEventListener("click",()=>{

const code=button.dataset.code;

navigator.clipboard.writeText(code);

button.innerHTML="✅ Copied!";

setTimeout(()=>{

button.innerHTML="📋 Copy Code";

},2000);

});

});


/* =====================================
OFFER COUNTDOWN TIMER
===================================== */

const timer=document.getElementById("offerTimer");

if(timer){

let end=new Date("December 31, 2026 23:59:59").getTime();

setInterval(()=>{

let now=new Date().getTime();

let gap=end-now;

if(gap<=0){

timer.innerHTML="Offer Expired";

return;

}

let days=Math.floor(gap/(1000*60*60*24));

let hours=Math.floor((gap%(1000*60*60*24))/(1000*60*60));

let minutes=Math.floor((gap%(1000*60*60))/(1000*60));

let seconds=Math.floor((gap%(1000*60))/1000);

timer.innerHTML=
days+" Days "
+hours+" Hours "
+minutes+" Min "
+seconds+" Sec";

},1000);

}
/* ===========================
SCREENSHOT LIGHTBOX
=========================== */

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightboxImg");

document.querySelectorAll(".filter-card img").forEach(img=>{

img.onclick=()=>{

if(lightbox){

lightbox.style.display="flex";

lightboxImg.src=img.src;

}

};

});

if(lightbox){

lightbox.onclick=()=>{

lightbox.style.display="none";

};

}
/* ==========================================
REVIEW SEARCH
========================================== */

const reviewSearch = document.getElementById("reviewSearch");

if (reviewSearch) {

    reviewSearch.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        document.querySelectorAll(".filter-card").forEach(card => {

            let text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}


/* ==========================================
REVIEW FILTER
========================================== */

document.querySelectorAll(".filter-btn").forEach(button => {

    button.addEventListener("click", () => {

        let category = button.dataset.filter;

        document.querySelectorAll(".filter-card").forEach(card => {

            if (category === "all") {

                card.style.display = "";

            } else {

                card.style.display =
                    card.dataset.category === category ? "" : "none";

            }

        });

    });

});
/* ==========================================
FAQ ACCORDION
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {

        question.addEventListener("click", function () {

            const answer = this.nextElementSibling;

            // অন্য সব FAQ বন্ধ করবে
            document.querySelectorAll(".faq-answer").forEach(item => {

                if (item !== answer) {
                    item.style.display = "none";
                }

            });

            // বর্তমান FAQ খুলবে/বন্ধ করবে
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }

        });

    });

    /* ==========================================
    FAQ SEARCH
    ========================================== */

    const search = document.getElementById("faqSearch");

    if (search) {

        search.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            document.querySelectorAll(".faq-item").forEach(item => {

                const text = item.textContent.toLowerCase();

                if (text.includes(value)) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }

            });

        });

    }

});