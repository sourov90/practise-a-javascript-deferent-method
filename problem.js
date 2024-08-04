const problem= 'i am learning web dev.';
// console.log(problem.split("").reverse().join(""))

//another way...
let reverse = ''
for(let i of problem){
    // console.log(i)
    reverse = i + reverse;
}
console.log(reverse)