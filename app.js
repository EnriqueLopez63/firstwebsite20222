function getData(){
    var place = document.getElementById("place").value
    var name = document.getElementById("name").value
    var verb = document.getElementById("verb").value
    var adj = document.getElementById("adjetive").value
    var adverb = document.getElementById("adverb").value

    console.log([place, name, verb, adj, adverb])
    return [ place, name, verb, adj, adverb]
}   


function sentences(){
    sentenceArray = ['Today I had to ${verb} ${name} but right in the middle of it ${verb} came with this ${adjetive} book and i wanted to go too ${place}']


}