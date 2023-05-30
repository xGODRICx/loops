const cars = ["Chevy", "Ferrari", "Maserati", "Porsche"];
//console.log("Cars Array:", cars);
// Transform above array to reflect "["Dodge", "Ferrari", "Fiat", "Maserati", "Audi"]" instead.
cars.pop(); //removes Porsche (end)
cars.pop(); //removes Maserati (end)
cars.push("Fiat", "Ford", "Audi"); //adds back "Fiat", "Maserati", "Audi".
cars.shift(); //removes "Chevy"
cars.unshift("Dodge"); //adds in "Dodge", "Fiat", "Maserati", "Audi"

const sentence = "The snozzberry tastes like snozzberry."
let counter = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "e") {
        counter++
    }
}

console.log(counter); //returns with "7"