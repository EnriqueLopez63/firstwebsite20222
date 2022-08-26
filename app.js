function getData(){
    var place = document.getElementById("place").value;
    var name = document.getElementById("name").value;
    var verb = document.getElementById("verb").value;
    var adj = document.getElementById("adjetive").value;
    var adverb = document.getElementById("adverb").value;

    
    document.getElementById("sentence").innerHTML = sentences
    (verb, adverb, name, adjetive, place);
    
    
    console.log([place, name, verb, adj, adverb])
    return [place, name, verb, adj, adverb]
}   


function sentences(verb, adverb, name, adj, place){
    sentenceArray = [`Today I had to ${verb} ${name} but right in the middle of it ${verb} came with this ${adj} book and i wanted to go too ${adverb}`
    , `insert verb here with name ${verb} ${name} now a ${adj} and a ${place}`]

    ranN = Math.floor(Math.random() * sentenceArray.length)

    return sentenceArray[ranN];
    
}

console.log (sentences())



//second 


var = [1, 2, 4, 9]

var wordArr = [
    {
        word: "dog"
        hint: "company you keep at home"
    },
    {
        word: "place"
        hint: "were you are anytime"
    },
    {
        word: "tree"
        hint: "it grouws on the ground"
    },
    {
        word: "computer"
        hint: "youre using it right now"
    },
]

var rN = Math.floor(Math.random() * )

var word = wordArr[rN].word;
var hint = wordArr[rN].hint;

document.getElementById('word').innerHTML= word;
document.getElementById('hint').innerHTML = hint;

var splitWord = word.split("");

var emptySplitWord = [];

for (i = 0, i < splitWord.length; i++)_ {
    emptySplitWord[i] = "_"
    console.log (emptySplitWord);
    document.getElementById("word") .innerHTML= emptySplitWord.
    join("")

}