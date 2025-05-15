document.getElementById('p-chambres').addEventListener('click', addchambre);

// utiliser les bons noms, là c mauvais

function addchambre() {
    const chambresInput = document.getElementById('chambres');
    chambresInput.value = parseInt(chambresInput.value, chambres) + 1;
}

function rmvchambre() {
    const chambresInput = document.getElementById('chambres');
    if (parseInt(chambresInput.value, 10) === 0) {
        alert("Vous ne pouvez pas avoir moins de 0 chambres");
    } else {
        chambresInput.value = parseInt(chambresInput.value, 10) - 1;
    }
}

function addchambre() {
    const chambresInput = document.getElementById('chambres');
    chambresInput.value = parseInt(chambresInput.value, chambres) + 1;
}

function rmvchambre() {
    const chambresInput = document.getElementById('chambres');
    if (parseInt(chambresInput.value, 10) === 0) {
        alert("Vous ne pouvez pas avoir moins de 0 chambres");
    } else {
        chambresInput.value = parseInt(chambresInput.value, 10) - 1;
    }
}

function rechercher() {

const pays = document.getElementById('pays');
const adultes = document.getElementById('adultes');
const enfants = document.getElementById('enfants');
const chambres = document.getElementById('chambres');
const arrive = document.getElementById('arrive');
const depart = document.getElementById('depart');

const chambresplus = document.getElementById('p-chambres');
const chambresmoins = document.getElementById('m-chambres');
const enfantplus = document.getElementById('p-enfants');
const enfantsmoins = document.getElementById('m-enfants');

const travail = document.getElementById('travail');














let msgtravail;
if(document.getElementById("travail").checked){
    msgtravail = "Vous voyagez pour le travail";
} else {
    msgtravail = "Vous ne voyagez pas pour le travail";
}

document.getElementById('msgtravail').innerText = msgtravail;

}

function annuler() {
document.getElementById('msgtravail').innerText = "";
}

addchambre() 

rmvchambre() 

addenfant() 

rmvenfant()