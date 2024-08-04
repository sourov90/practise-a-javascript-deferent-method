//cound the letter a 

let container ='hare krihsno hare krishno krishno krishno hare adsaaAsasaa hare';
let coundLetter = 0;
for(let i of container){
    if(i==='a' || i === 'A'){
        coundLetter++
    }
}
console.log(coundLetter)