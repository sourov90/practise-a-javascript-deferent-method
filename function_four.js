function coundZero(num) {
    let sum = 0;
    for (let i of num) {
        // console.log(i)
        if (i == '0') {
            // console.log('dffds')
            sum += 1
        }
    }
    return sum;
}
// const result =coundZero([0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0]);
// console.log(result);


//problems number 2 
function coundEvenAndOddNumber(arr) {
    const evenNumber = [];
    for (let i of arr) {
        if (i % 2 === 0){
           evenNumber.push(i)
        }
    }return evenNumber
}
console.log(coundEvenAndOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]))
 