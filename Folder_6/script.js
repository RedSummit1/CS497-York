let responseUrl = 'https://fakestoreapi.com/products?limit=10'
var obj; 
fetch(responseUrl)
        .then(res1 => res1.json())
        .then(res3 => display(res3))
    

;
// function display(obj_array){
//     obj = obj_array;
// }


function display(obj_array){
    obj = obj_array;
    let stringInnerHTML = "";
    const getRating = element => ("Rate: " + element.rate +"<br/> Count: " + element.count);
    stringInnerHTML += obj_array.map((element)=>{
        return( 
        `<div>
            <img src=${element.image} width="200" height="200" align="right">
            <h2>${element.title}</h2>
            <h3>$${Number(element.price)}</h3>
            ${element.description}
            <h3>${element.category}</h3>
            ${getRating(element.rating)}
            <br/>
            <button class="btn btn-outline-secondary" id=${element.id} onclick=toggle(this.id)>Dismiss</button>
            <hr>
        </div>
        `)});
    document.getElementById('test').innerHTML = stringInnerHTML;

    console.log(obj)
}

function toggle(y){  
    const tag = document.getElementById(y);
    const z = tag.innerText === "Dismiss";
    if (z){
       tag.innerHTML = "Dismissed";
       tag.className = "btn btn-danger";
    }else{
       tag.innerHTML = "Dismiss";
       tag.className = "btn btn-outline-secondary";
    } 
 }



function Search(htmlObject){
   const user_input = htmlObject.value;
   obj2 = obj.filter((element)=>element.title.includes(user_input));
   display(obj2);
}

// ${element.title}
// ${element.price}
// ${element.description}
// ${element.category}
// ${element.image}
// ${element.rating}