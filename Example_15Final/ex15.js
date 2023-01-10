//https://www.w3schools.com/js/js_function_definition.asp
function handleClickNumber(){
    let x = document.getElementById("input").value;
    document.getElementById("btn1").innerHTML = x;
    // console.log(x);

}

function handleCheckWeather(){
    let x = document.getElementById("temp").value; 
    document.getElementById("weather").innerHTML = x; 
}
//