const N = 100; // Définition de la valeur max

if (N > 0) { // On vérifie que N soit positif
  for (let i = 1; i <= N; i++) {

    // Utilisation de l'opérateur ternaire pour gérer chaque cas
    const output = (i % 3 === 0 && i % 5 === 0) ? 'FizzBuzz' :
                   (i % 3 === 0) ? 'Fizz' :
                   (i % 5 === 0) ? 'Buzz' :
                   i; 
    console.log(output); // Affichage du résultat
  }
} else {
  console.log("N doit être supérieur ou égal à 1."); // Gestion d'erreur
}
