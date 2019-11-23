var body = document.getElementsByTagName("BODY")[0];

var bouncingarrow0000 = document.querySelector("#bouncingarrow0000");
var bouncingarrow0Turn = document.querySelector("#bouncingarrow0Turn");
var arrow0Cover = document.querySelector("#arrow0Cover");
var arrow1Cover = document.querySelector("#arrow1Cover");
// var subffm = document.querySelector("#subffm");
var lefty4adevt = document.querySelector(".lefty4adevt");

var header021 = document.querySelector(".header021");
var header022 = document.querySelector(".header022");
var header01 = document.querySelector(".header01");
var header02 = document.querySelector(".header02");
var list_group_item = document.querySelector(".list_group_item");
var list_group_item2 = document.querySelector(".list_group_item2");
var displayff0 = document.querySelector("#display");
var displayff2 = document.querySelector("#display2");

// bouncingarrow0000.addEventListener("click", tera);
// bouncingarrow0Turn.addEventListener("click", tera1);
function myFunction(element) {
    var name, arr;
    name = "kilo";
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
        element.className += " " + name;
    }
}


// lefty4adevt.addEventListener("click", clLis);





function tera() {

    myFunction(header01);
    header02.className = header02.className.replace(/\bkilo\b/g, " ");
    bouncingarrow0Turn.style.display = "block";
    bouncingarrow0000.style.display = "none";
    displayff0.style.display = "none";
    displayff2.style.display = "block";
}




function tera1() {

    myFunction(header02);
    header01.className = header01.className.replace(/\bkilo\b/g, " ");
    bouncingarrow0Turn.style.display = "none";
    bouncingarrow0000.style.display = "block";
    displayff2.style.display = "none";
    displayff0.style.display = "block";

}

var container_4_unavilability0 = document.querySelector(
    ".container_4_unavilability0"
);
var intro = document.querySelector("#intro");
var tt = document.querySelector("#tt");
var bodyCover = document.querySelector("#bodyCover");
var aboutus = document.querySelector("#aboutus");
var formultimate = document.querySelector("#formultimate");
var formultimate1 = document.querySelector("#formultimate1");
var BrandName = document.querySelector("#BrandName");
var sidebar = document.querySelector("#sidebar");
// var bS = document.querySelector(".bS");
// // bS.addEventListener("click", bsevent);
// var a10 = document.getElementsByClassName("a1")[0];
// var a11 = document.getElementsByClassName("a1")[1];
// var a12 = document.getElementsByClassName("a1")[2];
// var a13 = document.getElementsByClassName("a1")[3];
// var a16 = document.getElementsByClassName("a1")[3];

// console.log(body);
// a13.addEventListener("click", addEvent01);



// function addEvent01() {
//     lefty4adevt.style.display = "block";
//     bouncingarrow0Turn.style.display = "none";
//     bouncingarrow0000.style.display = "none";
//     container_4_unavilability0.style.display = "none";
//     myFunction(bodyCover);
//     myFunction(aboutus);
//     //body.style.background = "url(aa0.jpg)";
//     body.style.margin = "0";
//     body.style.padding = "0";
//     body.style.zIndex = "1";
//     intro.style.display = "block";
//     tt.style.display = "block";
//     //formultimate.className = formultimate.className.replace(/\bkilo\b/g, " ");
//     //myFunction(formultimate1);
//     a10.style.color = "white";
//     a10.style.borderBottom = "1px solid white";
//     a11.style.color = "white";
//     a11.style.borderBottom = "1px solid white";
//     a12.style.color = "white";
//     a12.style.borderBottom = "1px solid white";
//     a13.style.color = "white";
//     a13.style.borderBottom = "1px solid white";
//     a16.style.color = "white";
//     a16.style.borderBottom = "1px solid white";

// }
//header022.addEventListener("click", addEvent0);

// function addEvent0() {
//     var formultimate = document.querySelector("#formultimate");
//     var formultimate1 = document.querySelector("#formultimate1");

//     myFunction(arrow0Cover);
//     myFunction(arrow1Cover);
//     BrandName.style.color = "white";
//     sidebar.style.backgroundColor = "white";
//     myFunction(kill0);
//     myFunction(kill1);
//     myFunction(kill2);
//     myFunction(kill3);
//     myFunction(kill4);
//     myFunction(kill5);

//     myFunction(killX0);
//     myFunction(killX1);
//     myFunction(killX2);
//     myFunction(killX3);
//     myFunction(killX4);
//     myFunction(killX5);

//     container_4_unavilability0.style.display = "none";
//     myFunction(bodyCover);
//     myFunction(aboutus);
//     body.style.background = "url(aa0.jpg)";
//     body.style.margin = "0";
//     body.style.padding = "0";
//     body.style.zIndex = "1";
//     formultimate.className = formultimate.className.replace(/\bkilo\b/g, " ");
//     //myFunction(formultimate1);
//     a10.style.color = "#b33771";
//     a10.style.borderBottom = "1px solid #b33771";
//     a11.style.color = "#b33771";
//     a11.style.borderBottom = "1px solid #b33771";
//     a12.style.color = "#b33771";
//     a12.style.borderBottom = "1px solid #b33771";
//     a16.style.color = "#b33771";
//     a16.style.borderBottom = "1px solid #b33771";
// }


// formultimate.addEventListener("click", laBush0)
// bodyCover.addEventListener("click", laBush0)
// function laBush0() {
//     sidebar.style.width = "0px";
//     a10.style.display = "none";
//     a11.style.display = "none";
//     a12.style.display = "none";
//     a13.style.display = "none";
// }

// var linkSIgn = document.querySelector("#linkSIgn");
// linkSIgn.addEventListener("click", signUpp);

function signUpp() {
    var formultimate = document.querySelector("#formultimate");
    var formultimate1 = document.querySelector("#formultimate1");
    container_4_unavilability0.style.display = "none";
    myFunction(bodyCover);
    myFunction(aboutus);
    myFunction(formultimate);
    formultimate1.className = formultimate1.className.replace(/\bkilo\b/g, " ");
}


// function bsevent() {
//     myFunction(arrow0Cover);
//     myFunction(arrow1Cover);
//     container_4_unavilability0.style.display = "none";
//     bodyCover.className = bodyCover.className.replace(/\bkilo\b/g, " ");
//     myFunction(aboutus);
//     //body.style.background = "url(aa0.jpg)";
//     body.style.margin = "0";
//     body.style.padding = "0";
//     body.style.zIndex = "1";
//     intro.style.display = "none";
//     tt.style.display = "none";
//     //formultimate.className = formultimate.className.replace(/\bkilo\b/g, " ");
//     //myFunction(formultimate1);
//     a10.style.color = "white";
//     a10.style.borderBottom = "1px solid white";
//     a11.style.color = "white";
//     a11.style.borderBottom = "1px solid white";
//     a12.style.color = "white";
//     a12.style.borderBottom = "1px solid white";
//     a16.style.color = "white";
//     a16.style.borderBottom = "1px solid white";
// }

// subffm.addEventListener("click", clLis);

function clLis() {
    lefty4adevt.style.display = "none";
    arrow0Cover.className = arrow0Cover.className.replace(/\bkilo\b/g, " ");
    arrow1Cover.className = arrow1Cover.className.replace(/\bkilo\b/g, " ");
    container_4_unavilability0.style.display = "none";
    bodyCover.className = bodyCover.className.replace(/\bkilo\b/g, " ");
    intro.style.display = "none";
    tt.style.display = "none";
    //formultimate.className = formultimate.className.replace(/\bkilo\b/g, " ");
    //myFunction(formultimate1);
    a10.style.color = "white";
    a10.style.borderBottom = "1px solid white";
    a11.style.color = "white";
    a11.style.borderBottom = "1px solid white";
    a12.style.color = "white";
    a12.style.borderBottom = "1px solid white";
    a13.style.color = "white";
    a13.style.borderBottom = "1px solid white";
    a16.style.color = "white";
    a16.style.borderBottom = "1px solid white";

}





















