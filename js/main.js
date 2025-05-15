// update pour age enfants :

function updateAgesEnfants() {
    const enfantsInput = document.getElementById('enfants');
    const agediv = document.getElementById('ages-enfants');
    const nbEnfants = parseInt(enfantsInput.value, 10);

    agediv.innerHTML = "";

    for (let i = 1; i <= nbEnfants; i++) {
        const div = document.createElement('div');
        div.className = "mb-2";
        div.innerHTML = `
            <label for="age-enfant-${i}" class="form-label">Âge de l'enfant n°${i}</label>
            <input type="number" class="form-control" id="age-enfant-${i}" name="age-enfant-${i}" min="0" max="17" required>
        `;
        const input = div.querySelector('input');
        input.addEventListener('input', function() {
            if (parseInt(this.value, 10) > 17) {
                this.value = 17;
            }
        });
        agediv.appendChild(div);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('p-enfants').addEventListener('click', function() {
        updateAgesEnfants();
    });
    document.getElementById('m-enfants').addEventListener('click', function() {
        updateAgesEnfants();
    });

    updateAgesEnfants();
});

// calcul enfants et chambres et adultes

function addadulte() {
    const adulteInput = document.getElementById('adultes');
    adulteInput.value = parseInt(adulteInput.value, adultes) + 1;
}

function rmvadulte() {
    const adulteInput = document.getElementById('adultes');
    if (parseInt(adulteInput.value, 10) === 0) {
        alert("Il ne peut pas y avoir aucun adulte.");
    } else {
        adulteInput.value = parseInt(adulteInput.value, 10) - 1;
    }
}

function addchambre() {
    const chambresInput = document.getElementById('chambres');
    chambresInput.value = parseInt(chambresInput.value, chambres) + 1;
}

function rmvchambre() {
    const chambresInput = document.getElementById('chambres');
    if (parseInt(chambresInput.value, 10) === 0) {
        alert("Vous ne pouvez pas avoir moins de 0 chambres.");
    } else {
        chambresInput.value = parseInt(chambresInput.value, 10) - 1;
    }
}

function addenfant() {
    const enfantsInput = document.getElementById('enfants');
    enfantsInput.value = parseInt(enfantsInput.value, 10) + 1;
}

function rmvenfant() {
    const enfantsInput = document.getElementById('enfants');
    if (parseInt(enfantsInput.value, 10) === 0) {
        alert("Vous ne pouvez pas avoir moins de 0 enfants.");
    } else {
        enfantsInput.value = parseInt(enfantsInput.value, 10) - 1;
    }
}

// reaction du bouton rechercher

function rechercher() {

const pays = document.getElementById('pays');
const adultes = document.getElementById('adultes');
const enfants = document.getElementById('enfants');
const chambres = document.getElementById('chambres');
const arrive = document.getElementById('arrive');
const depart = document.getElementById('depart');

const travail = document.getElementById('travail');

// Vérification âge pas vide

for (let i = 1; i <= enfants.value; i++) {
    const ageInput = document.getElementById(`age-enfant-${i}`);
    if (!ageInput || ageInput.value === "") {
        alert(`Veuillez renseigner l'âge de l'enfant n°${i}.`);
        return;
    }
}

// Verification de la date d'arrivée et de départ


if (arrive.value < depart.value) {
    alert("La date d'arrivée doit être avant la date de départ.");
    return;
}




let msgtravail;
if(document.getElementById("travail").checked){
    msgtravail = "Vous voyagez pour le travail";
} else {
    msgtravail = "Vous ne voyagez pas pour le travail";
}

let msgpays;
if (pays.value) {
    msgpays = `${pays.value}`;
} else {
    msgpays = "Aucun pays sélectionné";
}

document.getElementById('msgpays').innerText = msgpays;
document.getElementById('msgtravail').innerText = msgtravail;
document.getElementById('msgadultes').innerText = adultes.value;

const msgenfants = document.getElementById('msgenfants');
msgenfants.innerHTML = enfants.value + "<br>";

// enfant N° + age

for (let i = 1; i <= enfants.value; i++) {
    const ageInput = document.getElementById(`age-enfant-${i}`);
    if (ageInput) {
        const age = ageInput.value;
        const msg = `Enfant n°${i} : ${age} ans`;
        let msgDiv = document.getElementById(`msg-age-enfant-${i}`);
        if (!msgDiv) {
            msgDiv = document.createElement('div');
            msgDiv.id = `msg-age-enfant-${i}`;
            document.getElementById('msgenfants').appendChild(msgDiv);
        }
        msgDiv.innerText = msg;
        document.getElementById('ages-confirm').innerHTML += `Enfant n°${i} : ${age} ans<br>`;
    }
}

document.getElementById('msgchambres').innerText = chambres.value;

document.getElementById('ages-confirm').innerHTML = "";
}

function annuler() {
document.getElementById('msgtravail').innerText = "";
}

addchambre() 

rmvchambre() 

addenfant() 

rmvenfant()