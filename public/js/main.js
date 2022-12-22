// 1. Exo 1 Boucles FOR
//     - Creer une variable de type array et inserez toutes les personnes de la classe
//     - A l'aide d'une boucle for, dites `bonjour + prenom` à chaque personne du tableau


let classe = ['idrisse', 'bachir', 'brandon', 'denis'];

for (let i = 0; i < classe.length; i++) {
  console.log(`Bonjour, ${classe[i]}!`);
}



// 2. Exo 2 Boucles FOR (let)
//     - Dans un prompt inserés un nombre 
//     - A l'aide d'une boucle for, affichez les nombres de 0 jusqu'au nombre que vous avez choisi.


let number = prompt("Entrez un nombre:");

number = parseInt(number);

for (let i = 0; i <= number; i++) {
  console.log(i);
}


// 3. Exo 3 Boucles FOREACH
//      - Creer une varaible de type array et inserez toutes les personnes de la classe
//      - A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau

let student = ['idrisse', 'bachir', 'brandon', 'denis'];

student.forEach(function(person) {
  console.log("Bonjour, " + person + "!");
});


// 4. Exo 4 Boucle FOREACH
//     - Créez un un array qui contient 5 éléments
//     - Affichez touts les éléments a l'aide d'une boucle foreach

let array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
  console.log(element);
});
