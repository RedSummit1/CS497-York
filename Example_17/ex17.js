const btn1 = document.getElementById("btnOne");
const btn2 = document.getElementById("btnTwo");
const btn3 = document.getElementById("btnThree");
const btn4 = document.getElementById("btnFour");
const input1 = document.getElementById("input");
btn1.onclick = incrementCount;
function incrementCount(){
    field = document.getElementById("paraOne").innerHTML;
    field++;
    document.getElementById("paraOne").innerHTML = field;
}
