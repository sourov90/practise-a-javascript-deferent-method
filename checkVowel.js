//retun a sentens same number aeiou....

let container = 'hare krihsno hare krishno aeyyyyiu45o krishno aeiou  aeukrishno hare adsaaAsasaa ediou iou hare';
let splitContainer = container.split(" ")
// onsole.log(splitContainer)
for (let i of splitContainer) {
    if (i.includes('a') && i.includes('e') && i.includes('i') && i.includes('o') && i.includes('u')) {
        console.log(i)
    }

}
