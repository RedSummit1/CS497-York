//Read https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
// https://www.w3schools.com/js/js_string_templates.asp

let student = {
    name: "John Doe",
    age: 24,
    id: "123456789",
    gender: "male",
    address: {
        number: "56",
        street: "Main St.",
        city: "Brooklyn",
        zip: "12345",
        state: "NY"
    },
    courses: ["CS497", "CS291", "CS341", "CS172"];
    getAddress: function (){
            return this.address.number +" "+ this.address.street +" "+ this.address.city +" "+ this.address.zip +" "+ this.address.state;
    }
}

document.getElementById('txtName').innerHTML = student.name;
document.getElementById("txtID").innerHTML = student.id;
document.getElementById("txtCourses").innerHTML = "courses";
document.getElementById("txtAge").innerHTML = student.age;
document.getElementById("txtAddress").innerHTML = student.address;

let empList =[
{
    "fname": "Sharad",
    "lname": "Volz"
},
{
    "fname": "Constance",
    "lname": "Dech"
},
{
    "fname": "Myra",
    "lname": "Comeau"
},
{
    "fname": "Noriess",
    "lname": "Dabbs"
},
{
    "fname": "Esperanza",
    "lname": "Shrestha"
},
{
    "fname": "Eugene",
    "lname": "Barron"
},
{
    "fname": "Petr",
    "lname": "Ravenelle"
},
{
    "fname": "Cristina",
    "lname": "Terry"
},
{
    "fname": "Victoria",
    "lname": "Aresti"
},
{
    "fname": "Byron",
    "lname": "Yarber"
},
];

let strInnerHTML = "";
for(let i =0; i <10; i++){
    strInnerHTML = strInnerHTML + "<tr><td>Row" + i + "<tr><td>Row" + i + "</td></tr>";
}
document.getElementById.('empData').innerHTML = strInnerHTML;





