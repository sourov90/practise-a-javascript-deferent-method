const sentense = 'i am learning Programming to become a programmer';
function coundSentense(str) {
    const splitNum = str.split(" ");
    // console.log(splitNum);
    let sum = '';
    for (let i of splitNum) {
        if (i.length > sum.length) {
            sum = i;
        }
    }
    return sum;
}
 const result = coundSentense(sentense);
 console.log(result);

 