import generatePasswd from "./generate";

const passwd = document.querySelector(".passwd-generate");

const amount = document.querySelector(".chk-amount");
const numbers = document.querySelector(".chk-number");
const upper = document.querySelector(".chk-upper");
const lower = document.querySelector(".chk-lower");
const symbols = document.querySelector(".chk-symbol");

const generator = document.querySelector(".generatorPasswd");


export default () => { generator.addEventListener("click", () => {
        return passwd.innerHTML = generatePasswd(
            amount.value,
            upper.checked,
            lower.checked,
            numbers.checked,
            symbols.checked
        ) || "Nada Selecionado...";
    });
}