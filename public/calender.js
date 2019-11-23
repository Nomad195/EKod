var jan = document.querySelector("#jan");
var Feb = document.querySelector("#Feb");
var Mar = document.querySelector("#Mar");
var Apr = document.querySelector("#Apr");
var May = document.querySelector("#May");
var Jun = document.querySelector("#Jun");
var Jul = document.querySelector("#Jul");
var Aug = document.querySelector("#Aug");
var Sep = document.querySelector("#Sep");
var Oct = document.querySelector("#Oct");
var Nov = document.querySelector("#Nov");
var Dec = document.querySelector("#Dec");


var rightarrow0 = document.querySelector("#rightarrow0");
var rightarrow1 = document.querySelector("#rightarrow1");
var rightarrow2 = document.querySelector("#rightarrow2");
var rightarrow3 = document.querySelector("#rightarrow3");
var rightarrow4 = document.querySelector("#rightarrow4");
var rightarrow5 = document.querySelector("#rightarrow5");
var rightarrow6 = document.querySelector("#rightarrow6");
var rightarrow7 = document.querySelector("#rightarrow7");
var rightarrow8 = document.querySelector("#rightarrow8");
var rightarrow9 = document.querySelector("#rightarrow9");
var rightarrow10 = document.querySelector("#rightarrow10");
var rightarrow11 = document.querySelector("#rightarrow11");








var leftarrow0 = document.querySelector("#leftarrow0");
var leftarrow1 = document.querySelector("#leftarrow1");
var leftarrow2 = document.querySelector("#leftarrow2");
var leftarrow3 = document.querySelector("#leftarrow3");
var leftarrow4 = document.querySelector("#leftarrow4");
var leftarrow5 = document.querySelector("#leftarrow5");
var leftarrow6 = document.querySelector("#leftarrow6");
var leftarrow7 = document.querySelector("#leftarrow7");
var leftarrow8 = document.querySelector("#leftarrow8");
var leftarrow9 = document.querySelector("#leftarrow9");
var leftarrow10 = document.querySelector("#leftarrow10");
var leftarrow11 = document.querySelector("#leftarrow11");



rightarrow0.addEventListener("click", janFun);
rightarrow1.addEventListener("click", febFun);
rightarrow2.addEventListener("click", marFun);
rightarrow3.addEventListener("click", aprFun);
rightarrow4.addEventListener("click", mayFun);
rightarrow5.addEventListener("click", junFun);
rightarrow6.addEventListener("click", julFun);
rightarrow7.addEventListener("click", augFun);
rightarrow8.addEventListener("click", sepFun);
rightarrow9.addEventListener("click", octFun);
rightarrow10.addEventListener("click", novFun);
rightarrow11.addEventListener("click", decFun);






leftarrow0.addEventListener("click", janFunleft);
leftarrow1.addEventListener("click", febFunleft);
leftarrow2.addEventListener("click", marFunleft);
leftarrow3.addEventListener("click", aprFunleft);
leftarrow4.addEventListener("click", mayFunleft);
leftarrow5.addEventListener("click", junFunleft);
leftarrow6.addEventListener("click", julFunleft);
leftarrow7.addEventListener("click", augFunleft);
leftarrow8.addEventListener("click", sepFunleft);
leftarrow9.addEventListener("click", octFunleft);
leftarrow10.addEventListener("click", novFunleft);
leftarrow11.addEventListener("click", decFunleft);

function janFun() {
    jan.style.display = 'none';
    Feb.style.display = 'block';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}


function janFunleft() {
    jan.style.display = 'none';
    Feb.style.display = 'block';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'block';
}



function febFun() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'block';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}






function febFunleft() {
    jan.style.display = 'block';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}




function marFun() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'block';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}







function marFunleft() {
    jan.style.display = 'none';
    Feb.style.display = 'block';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}



function aprFun() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'block';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}


function aprFunleft() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'block';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}


function mayFun() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'block';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}





function mayFunleft() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'block';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}


function junFun() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'block';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}








function junFunleft() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'block';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}




function julFun() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'block';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}




function julFunleft() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'block';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}

function augFun() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'block';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}






function augFunleft() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'block';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}


function sepFun() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'block';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}







function sepFunleft() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'block';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}


function octFun() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'block';
    Dec.style.display = 'none';
}





function octFunleft() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'block';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}





function novFun() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'block';
}




function novFunleft() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'block';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}


function decFun() {
    jan.style.display = 'block';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'none';
    Dec.style.display = 'none';
}





function decFunleft() {
    jan.style.display = 'none';
    Feb.style.display = 'none';
    Mar.style.display = 'none';
    Apr.style.display = 'none';
    May.style.display = 'none';
    Jun.style.display = 'none';
    Jul.style.display = 'none';
    Aug.style.display = 'none';
    Sep.style.display = 'none';
    Oct.style.display = 'none';
    Nov.style.display = 'block';
    Dec.style.display = 'none';
}