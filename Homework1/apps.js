function typefunction(){
   var x = document.getElementById("search").value;
   document.getElementById("searchterm").innerHTML = x;
}

var x = 1;
function toggle(y){ 
   var z = document.getElementsByClassName("my-3")[y].getElementsByClassName("btn btn-outline-secondary")[0];
   if (z){
      document.getElementsByClassName("my-3")[y].getElementsByClassName("btn btn-outline-secondary")[0].innerHTML = "Dismissed";
      document.getElementsByClassName("my-3")[y].getElementsByClassName("btn btn-outline-secondary")[0].className = "btn btn-danger";
      console.log(document.getElementsByClassName("my-3")[y].getElementsByClassName("btn btn-danger")[0].className);
   }else{
      document.getElementsByClassName("my-3")[y].getElementsByClassName("btn btn-danger")[0].innerHTML = "Dismiss";
      document.getElementsByClassName("my-3")[y].getElementsByClassName("btn btn-danger")[0].className = "btn btn-outline-secondary";
   } 
}
// var x = document.getElementsByClassName("my-3")[0];
// console.log(x.getElementsByClassName("btn btn-outline-secondary")[0].innerHTML);