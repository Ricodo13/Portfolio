/* LES TABLEAUX (ARRAYS) */

// ------ TODO 1 ------
var prices = [12, 3, 25, 4, 987, 22, 15,];

// 1. En accédant aux éléments du tableau, faire en sorte que le chiffre 4 s'affiche dans la console.
console.log(prices[3])
// 2. Afficher dans la console la longueur du tableau "prices".
console.log(prices.length)
// 3. Ajouter un prix au tableau et afficher le tableau dans la console.
prices.push(13)
console.log(prices)
// ------ TODO 2 ------
var random = ["A", 123, "hello"];

// 1. Remplacer un élément du tableau.
random.splice(1,1,23)
// 2. Afficher le tableau dans la console.
console.log(random)
// ------ TODO 3 ------
var array = [1, 2, 3, 5, 6, 7, 9, 10];

// 1. Ajouter dans le tableau les éléments 4 et 8 manquants grâce à la méthode splice afin d'obtenir le tableau suivant :
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Documentation de la méthode splice : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice

array.splice(3,0,4)
array.splice(7,0,8)
// 2. Afficher le tableau dans la console.
console.log(array)
// 3. Ajouter la valeur 11 à la fin du tableau.
array.splice(10,0,11)
// 4. Ajouter la valeur 0 au début du tableau.
array.splice(0,0,0)
// 5. Afficher le tableau dans la console.
console.log(array)
// ------ TODO 4 -------
// Créer dans votre projet de borne un array qui liste les items vendus, et un array qui liste leurs prix



/* LES OBJETS */

// ------ TODO 5 ------

// 1. Déclarer une variable student qui contient un objet avec les propriétés et valeurs suivantes :
// - name : Votre nom
// - age : Votre age
// - city: Votre ville
let student ={
  name: "Rick",
  age : 21,
  city : "Auber",
};
// 2. Afficher dans la console l'objet student.
console.log(student)
// ------ TODO 6 ------
let user = {
  name: "John",
  age: 30,
  city: "Nice"
};

// 1. Ajouter une propriété (clé) "city" de valeur "Paris" à l'objet user.

// 2. Afficher dans la console l'âge de John.

console.log(user.name)

// 3. Remplacer la valeur de "city" avec "Nice".

// ------ TODO 7 ------
let users = [user, { name: "Emma", age: 32, city: "London" }];
let nem = "name" ;
// 1. Afficher dans la console l'objet dont le name est "John".
console.log(user[nem])
// 2. Afficher dans la console "Emma", en accédant aux élements du tableau
// puis à la propriété de l'objet.
console.log(users[1])
let nam = 1
console.log(users[nam].name)

