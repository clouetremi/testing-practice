// testing-practice.js

function capitalize(string) {
return string[0].toUpperCase() + string.slice(1); 
}


function reverseString(string) {
    // split("") convertit une chaîne en un tableau de caractères
    // reverse("") inverse ordre éléments du tableau
    // join("" recombine le tableau en une chaîne de caractères)
    return string.split("").reverse().join(""); 
}

module.exports = {
    capitalize,
    reverseString
};