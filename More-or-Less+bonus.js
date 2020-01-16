/*Notre prochain programme est un petit jeu que nous appellerons « More Or Less ». Créez un fichier MoreOrLess.js.
Le principe est le suivant :
L'ordinateur tire au sort un nombre entre 1 et 100.
Il vous demande de deviner le nombre.
Vous entrez donc un nombre entre 1 et 100.
L'ordinateur compare le nombre que vous avez entré avec le nombre « mystère » qu'il a tiré au sort.
Il vous dit si le nombre mystère est supérieur ou inférieur à celui que vous avez entré.
Puis l'ordinateur vous redemande le nombre.
… Et il vous indique si le nombre mystère est supérieur ou inférieur.
Et ainsi de suite, jusqu'à ce que vous trouviez le nombre mystère...
Le but du jeu, bien sûr, est de trouver le nombre mystère en un minimum de coups.

Créez un compteur de coups et affichez le résultat de ce dernier en fin de jeu :
Bravo, vous avez trouvé le nombre mystère en 6 coups !

Limitez le nombre de coups en passant un paramètre de limite à l'exécution du programme. 

Si le joueur dépasse le nombre de coups, terminez la partie :
$ node MoreOrLess.js 10
Il vous reste 10 coups à jouer...
Quel est le nombre ? 50
C'est plus !
Il vous reste 9 coups à jouer...
Quel est le nombre ? 75
...
Bravo, vous avez trouvé le nombre mystère !

En fin de partie, demandez au joueur s'il souhaite refaire une partie ou terminer le programme.*/

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout); // précise l'interface d'entrée et l'interface de sortie. stdin et stdout représentent le terminal qui exécute le programme.

let number = Math.floor(Math.random() * 100)

count = 10;

const onAnswer = answer => {

  console.log("Merci pour votre réponse: " + answer);

  if (answer === "O" || answer === "o") {
    count = 3;
    rl.question(`Bonjour, vous avez ${count} coups pour trouver le nombre.\nQuel est le nombre? `, onAnswer);
    let number = Math.floor(Math.random() * 100)
  }
  if (answer === "N" || answer === "n") {
    console.log("Au revoir");
    rl.close();
  }
  answer = Number(answer);
  if (answer < 0 || !answer || (answer % 1) !== 0) console.log("Je n'ai pas compris. Quel est le nombre ?");
  else if (answer === number) {
    count--;
    if (count === 9) console.log(`Bravo, vous avez trouvé le nombre mystère en ${10 - count} coup!`);
    else console.log(`Bravo, vous avez trouvé le nombre mystère en ${10 - count} coups!`);
    rl.close(); // cette ligne permet d'arrêter d'écouter les entrées de l'utilisateur. Elle doit être exécutée, une seule fois, à la toute fin du programme
  }
  else if (answer < number) {
    count--;
    
    if (count === 1) rl.question(`C'est plus !\nAttention, Il ne vous reste plus qu'${count} coup...\nQuel est le nombre ?  `, onAnswer);
    if (count > 1) rl.question(`C'est plus !\nIl vous reste ${count} coups...\nQuel est le nombre ?  `, onAnswer);
    if (count === 0) rl.question("Perdu ! Souhaitez-vous refaire une partie ? (O = oui, N = non)  ", onAnswer);
  }
  else {
    count--;

    if (count === 1) rl.question(`C'est moins !\nAttention, nIl ne vous reste plus qu'${count} coup...\nQuel est le nombre ? `, onAnswer);
    if (count > 1) rl.question(`C'est moins !\nIl vous reste ${count} coups...\nQuel est le nombre ? `, onAnswer);
    if (count === 0) rl.question("Perdu ! Souhaitez-vous refaire une partie ? (O = oui, N = non)  ", onAnswer);
  }
};

rl.question(`Bonjour, vous avez ${count} coups pour trouver le nombre.\nQuel est le nombre? `, onAnswer); // permet d'écouter les entrées de l'utilisateur , 1ere question