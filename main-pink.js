"use strict";

function clearActive() {
    for (var a in elements) for (var b in elements[a].classList) "active" === elements[a].classList[b] && elements[a].classList.remove("active");
}

function addActive(a) {
    elements[a].classList.add("active");
}

function printSequence(a) {
    for (var b = sequence[a], c = 0; c < b.length; c++) "1" === b[c] && addActive(c);
}

function stepSequence() {
    clearActive(), counter >= sequence.length && (counter = 0), printSequence(counter), 
    document.getElementById("display").innerHTML = sequence[counter], counter++, setTimeout(stepSequence, frequency);
}

var frequency = 1e3, sequence = [ "000000", "000001", "000010", "000100", "001000", "010000", "100000", "000011", "000101", "000110", "001001", "001010", "001100", "010001", "010010", "010100", "011000", "100001", "100010", "100100", "101000", "110000", "000111", "001011", "001101", "001110", "010011", "010101", "010110", "011001", "011010", "011100", "100011", "100101", "100110", "101001", "101010", "101100", "110001", "110010", "110100", "111000", "001111", "010111", "011011", "011101", "011110", "100111", "101011", "101101", "101110", "110011", "110101", "110110", "111001", "111010", "111100", "011111", "101111", "110111", "111011", "111101", "111110", "111111"], elements = document.getElementById("shape").getElementsByTagName("*"), counter = 0;

window.onload = function() {
    stepSequence();
};