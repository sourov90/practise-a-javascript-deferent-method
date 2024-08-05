const statments = 'I am a hard working person .';
const idit= statments.split(' ')
// console.log(idit)
let container = []
for(let i=0; i<idit.length;i++){
    const result = idit[i];
    // console.log(result)
    container.unshift(result)
}
console.log(container.join(" "))