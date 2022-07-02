/* Exercices reproduire les méthodes sur les tableaux "manuellement"*/ 

/* ARRAY.MAP */ 
let myTable = ['1','2', '3', '4'];

for (i = 0; i < 4; i++){
    let newTable = myTable[i]*2;
    myTable.push(newTable)
}
console.log(myTable);

/* ARRAY.FILTER */ 
let myCats = ['Daisy', 'Vagabond', 'Cowboy']
for(let ladyCat of myCats){
    ladyCat = 'Daisy';
    console.log(ladyCat);
}

/* ARRAY.FIND */ 
const ages = [16, 17, 18, 20,21];

function majorAge(age){
    for(i=0; i < ages.length; i++){
        if (ages[i].majorAge < 18){
            return age
        }
    }
    majorAge(age);

}



/* ARRAY.SOME */ 
let fruits = ["apple", "pineapple", "melon", "banana"]

function some(fruits) {

    if ((fruits = "apple") || (fruits = "banana")) {
        fruits.push("apple")
    } else {
      console.log(fruits);
    }
  }
some(fruits);

  


/* ARRAY.EVERY*/ 

let veggie = ["carrot", "cumcuber", "pepper"]

function every(veggie) {

    if ((veggie = "patato") && (fruits = "corn")) {
      veggie.push("patato")
    } else {
        console.log(veggie);
      
    }
  }

every(veggie);



