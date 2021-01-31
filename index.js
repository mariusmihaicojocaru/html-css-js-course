// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let mynumber = 5;
if (mynumber == 6) {
  appDiv.innerHTML = "<h2>Bigger Text</h2>";
}

// const mynumber2 = [1, 'Calin', 2, 'Marius' , 3, 'Emma', 4, 'Andreea', 5, 'Ciprian',6, 'Andrei'];

// for(let i = 0; i < mynumber2.length; i++){
// appDiv.innerHTML = appDiv.innerHTML.concat(mynumber2[i] + " ")
// }

let countries = [
  {
    name: "Romania",
    population: 19000000,
    continent: "Europe",
    neighborsIndexes: [1, 2]
  },
  {
    name: "Ukraine",
    population: 385456565,
    continent: "Europe",
    neighborsIndexes: [0, 2]
  },
  {
    name: "Bulgary",
    population: 16983738,
    continent: "Europe",
    neighborsIndexes: [0, 1]
  },
  {
    name: "SUA",
    population: 199283738,
    continent: "America",
    neighborsIndexes: [5]
  },
  {
    name: "Canada",
    population: 132828348,
    continent: "America",
    neighborsIndexes: [4]
  }
];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].continent === "Europe") {
    appDiv.innerHTML = appDiv.innerHTML.concat(countries[i].name + " ");
  }
}

let resDiv = document.getElementById("result1");

for (let i = 0; i < countries.length; i++) {
  if (countries[i].name.length > 6) {
    resDiv.innerText = resDiv.innerText.concat(" " + countries[i].population);
  }
}

let resDiv2 = document.getElementById("result2");

let maxVal = 0;
for (let i = 0; i < countries.length; i++) {
  if (countries[i].neighborsIndexes.length > maxVal) {
    maxVal = countries[i].neighborsIndexes.length;
  }
}
resDiv2.innerText = maxVal;

let resDiv3 = document.getElementById("result3");

for(let i = 0; i < countries.length; i++){
  if(countries[i].neighborsIndexes.length === maxVal){
    resDiv3.innerText = resDiv3.innerText.concat(" " + countries[i].continent);

  }
}



