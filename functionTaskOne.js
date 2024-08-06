//cound repeted number of array

function coundRepetedNumber(arr,find){
    let coundNumber=0;
    for(let i of arr){
        if(i===find){
            coundNumber++;
        }
    }
    return coundNumber;
}
const result=coundRepetedNumber([2,4,7,5,5,5,5,5,,3,5,4,3,4,5],4n)
console.log(result)
