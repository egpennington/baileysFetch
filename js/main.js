const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const lettersNums = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let eightCharEl = document.getElementById("eightChar-el")
let fifteenCharEl = document.getElementById("fifteenChar-el")
let lettersNumsEl = document.getElementById("lettersNums-el")

function genPassWord() {
    eightCharEl.textContent = " "
    fifteenCharEl.textContent = " "
    lettersNumsEl.textContent = " "

    for (let i =0; i < 8; i++) {
        let num = Math.floor(Math.random() * characters.length)
        eightCharEl.textContent += characters[num]
    }

    for (let i =0; i < 15; i++) {
        let num = Math.floor(Math.random() * characters.length)
        fifteenCharEl.textContent += characters[num]
    }

    for (let i =0; i < 15; i++) {
        let num = Math.floor(Math.random() * lettersNums.length)
        lettersNumsEl.textContent += lettersNums[num]
    }  
}