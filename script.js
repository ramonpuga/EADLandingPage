// ------ CONST'S ------
const cupom = document.querySelectorAll('.field')[3];
const username = document.querySelector('.username'); 
const icones = document.querySelectorAll('.icones');
const addcupom = document.querySelector('.addcupom');
const cupomok = document.querySelector('.cupomok');
const removcupom = document.querySelector('.cupomok h1');
const criar = document.querySelector('a .criar');

// ------ INPUT'S CSS adjusts ------
username.style.paddingLeft = "8px";
username.style.width = "246px";
cupom.style.marginTop = "14px";
icones[4].style.top = "35px"

// ------ CUPOM Validation function/events -------
function verifcupom() {
    if (cupom.value == "blacknov5") {
        cupom.style.display = "none";
        addcupom.style.display = "none";
        cupomok.style.display = "flex";
        } else {
            cupom.style.display = "flex";
            cupom.style.color = "red";
            addcupom.style.display = "flex";
            cupomok.style.display = "none";
            cupom.value += "*inválido";
    }; 
};
addcupom.addEventListener('click', (e) => {
    verifcupom();
});

// ------ REMOVE CUPOM Events -------
removcupom.addEventListener('click', (e) => {
    cupom.style.display = "flex";
    addcupom.style.display = "flex";
    cupomok.style.display = "none";
});