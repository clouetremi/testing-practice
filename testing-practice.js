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
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    }
}

function caesarCipher(string, number) {

    let result = "";

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (char >= "a" && char <= "z") {
            let shiftedCode = ((char.charCodeAt(0) - 97 + number) % 26) + 97;
            result += String.fromCharCode(shiftedCode);
        }
        else if (char >= "A" && char <= "Z") {
            let shiftedCode = ((char.charCodeAt(0) - 65 + number) % 26) + 65;
            result += String.fromCharCode(shiftedCode);
        }
        else {
            result += char;
        }
    }
    return result;
}

function analyzeArray(arrayNumber) {

    const result = arrayNumber.reduce((acc, val) => acc + val, 0);

    const average = result / arrayNumber.length;
    const min = Math.min(...arrayNumber);
    const max = Math.max(...arrayNumber);
    const length = arrayNumber.length; 


    return {
        average,
        min,
        max,
        length
    }; // retourne un objet

}




module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};