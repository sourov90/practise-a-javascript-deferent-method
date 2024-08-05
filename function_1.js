function fourParameters(numb1, num2, num3, num4) {
    const result = numb1 * num2 * num3 * num4
    return result
}
// console.log(fourParameters(2,3,4,5));


// problems number 2
// take a number if the number is odd multiply it by 2 adn retun 
//the result and it the number even then return the even;

function checkEvenOrOddNumber(num) {
    if (num % 2 === 0) {
        const result = num / 2;
        return result;
    } else {
        return num * 2
    }
}
// console.log(checkEvenOrOddNumber(4))

//problems number 3;

function averageNumber(arr) {
    const lengthOfArray = arr.length;
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    const result = sum / lengthOfArray;
    return result;

}
// const result = averageNumber([2,4,6,8,3,5,7,9]);
// console.log(result)


 