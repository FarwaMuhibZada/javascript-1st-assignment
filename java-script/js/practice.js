// swith statment

let language = "chinese";
switch(language){
    case "chinese":case "Mandarin": console.log("Most number of native speakers.");
    break;

    case "spanish": console.log("2nd place in number of native speakers.");
    break;

    case "english": console.log("3rd place.");
    break;

    case "hindi": console.log("number 4");
    break;

    case "arabic": console.log("5th most spoken language.");
    break;

    case "spanish": console.log("2nd place in number of native speakers.");
    break;

    default: console.log("Great lnguage too  :D");
}



// Equality oprators(==)


// let numNeighbours = prompt("how many neighhbor contries does your country have?");

// if(numNeighbours == 1){
//     console.log("Only 1 border");
// }else if(numNeighbours > 1){
//     console.log("More then 1 border");
// } else{
//     console.log("No border");
// }
 
// Equality oprators(===)
  
// let numNeighbours =  Number(prompt("how many neighhbor contries does your country have?"));

// if(numNeighbours === 1){
//     console.log("Only 1 border");
// }else if(numNeighbours > 1){
//     console.log("More then 1 border");
// } else{
//     console.log("No border");
// }





// Logical oprator
let lang = 'english'
let population  = 40;
let island = true; 

if(lang =='english' && population < 50 && island){
    console.log("you should live in purtogal");
}else{
    console.log("protugal does not meet your criteria");
}



// function 


function describeCountry( Country, population, capitalCity){
  return Country +' has'+ population +' million people and its capital city is '+ capitalCity;
}

let afghanistatan = describeCountry('afghanistan', 40 , 'kabul');
let turkey = describeCountry('turkey', 80 , 'istanbul');
let austrlia= describeCountry('Austrlia', 90 , 'sedney');


console.log(afghanistatan);
console.log(turkey);
console.log(austrlia);


// function declaraion and experssion

function percetageOfWorld1(population){
let result = (population/7900*100);
 return  'china has'+population+'million people so its about'+result+ '% of the world populaton.';
}


let chaina = percetageOfWorld1(1441);
let germany = percetageOfWorld1(1345);
let saudiArabia =percetageOfWorld1(1467);

console.log(chaina);
console.log(germany);
console.log(saudiArabia);

// function percetageOfWorld2(population){
//     let result = (population/7900*100);
  
//     }   
// console.log(percetageOfWorld2(1441));
//  console.log(percetageOfWorld2(1345));
//   console.log(percetageOfWorld2(1467));
//  this function will not return any value



// introduction to Array

let populations = [1400,1500,1700,1800];

if(populations.length == 4){
    console.log(true);
}else{
    console.log(false);
}


// using percentgeofworld function to find out the percentage of population array ...
 console.log (percetageOfWorld1(1400));
 console.log (percetageOfWorld1(1500));
 console.log (percetageOfWorld1(1700));
 console.log (percetageOfWorld1(1800));
 //this array is the result of percentageofworlt()
let percentages = [17.72, 18.98,21.51,22.78];


// basic array Operations

let neighhbor = ['Tajekistan','pakistan','iran'];

 //change the value of arraye

 neighhbor[2] = 'china';
 
for(let i=0; i<=3; i++){
    console.log(neighhbor[i]);
}
 neighhbor.push('Utopia');
//  neighhbor.pop();

//use include methods of array
 if(neighhbor.includes('germany')){
    console.log('probably a central eurpean country :D');
 }else{
    console.log('probably not a central eurpean country :D');

 }



