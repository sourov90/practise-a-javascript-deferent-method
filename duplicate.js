function duplite(arr) {
    let uniqe = [];
    for (let i of arr) {
        if (uniqe.includes(i) === false){
            uniqe.push(i)
        }
    }
    return uniqe;
}
const result = duplite([2, 3, 4, 5, 2, 3, 4, 7, 8, 6, 45, 3]);
console.log(result);