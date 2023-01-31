#!/usr/bin/env node
import inquirer from "inquirer";
var count = 1;
// var words:string[] = [];
var total = 0;
async function word_count() {
    const words = await inquirer.prompt([{
            name: "input_word",
            type: "string",
            message: "Enter the sentence: "
        }]);
    var Out = 0;
    var inp = 1;
    var state = Out;
    var wc = 0;
    var i = 0;
    while (i < words.input_word.length) {
        if (words.input_word[i] == ' ' || words.input_word[i] == '\n' || words.input_word[i] == '\t') {
            state = Out;
        }
        else if (state === Out) {
            state = inp;
            ++wc;
        }
        ++i;
    }
    total = wc;
    console.log("Total count of the words: ", total);
}
word_count();
