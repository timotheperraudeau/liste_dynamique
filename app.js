
let search = document.querySelector('input');
let firstName = ['Axel', 'Arthur', 'Evan', 'Adrien', 'Alexis', 'Antoine', 'Adam', 'Alexandre', 'Baptiste', 'Enzo', 'Julien', 'Leo', 'Lucas', 'Matteo', 'Mael', 'Maxime', 'Gabriel', 'Raphael', 'Pierre', 'Quentin', 'Hugo', 'Romain', 'Theo', 'Tom', 'Jules', 'Nicolas', 'Louis', 'Mathis', 'Nathan', 'Paul', 'Valentin', 'Ethan', 'Kylian', 'Matheo', 'Aaron', 'Antonin', 'Anthony', 'Ayoub', 'Bastien', 'Alan', 'Aymeric', 'Bryan', 'Charles', 'Elias', 'Dorian', 'Dylan', 'Alex', 'Augustin', 'Alban', 'Aurelien', 'Benjamin', 'Arnaud', 'Gael', 'Gabin', 'Guillaume', 'Florian', 'Corentin', 'Jean', 'Jeremy', 'Diego', 'Emilien', 'Esteban', 'David', 'Etienne', 'Damien', 'Erwan', 'Lukas', 'Loic', 'Lorenzo', 'Mathias', 'Matthieu', 'Gaetan', 'Gaspard', 'Morgan', 'Rafael', 'Kilian', 'Samuel', 'Simon', 'Kevin', 'Sacha', 'Tristan', 'Victor', 'Jordan', 'Killian', 'Marius', 'Vincent', 'Martin', 'Yann', 'Mateo', 'William', 'Luca', 'Remi', 'Oscar', 'Robin', 'Noé', 'Tony', 'Tiago', 'Thibaut', 'Bilal', 'Thibault', 'Eliot', 'Elouan', 'Ilan', 'Eliott', 'Julian', 'Kyllian', 'Ewan', 'Luka' ]
let Sort = firstName;
let table = document.querySelector('table');
let visuel = "";

for(value of firstName){
    visuel += `<tr><td>${value}</td></tr>`;
    affiche();
}

function affiche(){
    table.innerHTML = visuel;
}

search.addEventListener('input',(e)=>{
    visuel = "";
    for(value of firstName){
        let valeur = value.toString();
        valeur = valeur.toUpperCase();
        let cible = e.target.value;
        cible = cible.toString()
        cible = cible.toUpperCase();
        if(valeur.startsWith(cible)){
            visuel += `<tr><td>${value}</td></tr>`;
        }
    }
    affiche();
})
