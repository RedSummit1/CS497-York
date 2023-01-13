// https://www.w3schools.com/js/js_arrays.asp
//https://www.w3schools.com/jsref/jsref_filter.asp
// https://www.w3schools.com/jsref/jsref_map.asp
// https://www.w3schools.com/jsref/jsref_push.asp

const sentenceInput = document.getElementById("sentence");
const wordInput = document.getElementById("word");
// const alert = document.getElementById("alert");
// const btnAdd = document.getElementById("btnAdd");
//const wordList = document.getElementById("wordList");
var wordList = [];
function inWord(){
    var word = document.getElementById('word2').value;
    var sentence= document.getElementById('sentence');
    document.getElementById('word').value = word;
    var alert = document.getElementById('alert');
    sentence.value.includes(word)? alert.innerHTML = "Found": alert.innerHTML="Not Found";
    wordList.push(sentence.value);
    console.log(wordList);
    document.getElementById('wordList').innerHTML = wordList;
}



