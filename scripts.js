let SearchArea = document.querySelector(".search-area");

let SearchBtn = document.querySelector(".search-icon").onclick=function(){
SearchArea.style.display="block";
}

let close = document.querySelector(".close").onclick  = function(){
   SearchArea.style.display="none";

}