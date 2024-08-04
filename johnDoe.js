let myObject ={
    name:'john doe',
    age:25,
    city:'example city',
    isStudent: true,
}
for(let i in myObject){
    let key = i;
    let type = myObject[i]
    let result = 'key :'+ i
    let typeResult = 'type :' + typeof type;
    const re = result+' | '.concat(typeResult)
    console.log(re)
}