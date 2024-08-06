const mybio = 'hellow Edevlopers. you are a honest as well as hardworking person.pray for you';
function coundVowel(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        const devided = str[i].toLowerCase();
        // if (devided.includes('a') || devided.includes('e') || devided.includes('i') || devided.includes('o') || devided.includes('u')){
        //     sum++
        // }

        //another way........................................__-------------------

        // if (devided == 'a' || devided == 'e' || devided == 'i' || devided == 'o' || devided == 'u'){
        //     sum++
        // }
        
    }
    return sum;
}
const result = coundVowel(mybio);
console.log(result);