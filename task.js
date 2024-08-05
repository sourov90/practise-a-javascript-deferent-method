const color = ['red', 'blue', 'white', 'yellow', 'green'];
// console.log(color)
let contain = [];
for(let i =0; i<color.length; i++){
    const sum = color[i];
    contain.unshift(sum);
}
console.log(contain.join(" , "));