
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const asciiUpper = () => String.fromCharCode(rand(65, 91)); 
const asciiLower = () => String.fromCharCode(rand(97, 123));
const asciiNumber = () => String.fromCharCode(rand(48, 58));

const symbolsManual = "!@<#$%}&*([)_+,.;/?:>]{|";
const asciiSymbol = () => symbolsManual[rand(0, symbolsManual.length)]; 

export default function generatePasswd(amount, upper, lower, numbers, symbols) {

    const passwdArray = [];

    for(let i = 0; i < amount; i++) {
        upper && passwdArray.push(asciiUpper());
        symbols && passwdArray.push(asciiSymbol());        
        lower && passwdArray.push(asciiLower());
        numbers && passwdArray.push(asciiNumber());
    }

    return passwdArray.join("").slice(0, amount);
}