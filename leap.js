function lear(lep) {
    if (lep % 100 !== 0 && lep % 4 === 0) {
        return true
    } else if (lep %100 ==0 && lep%400) {
        return true;
    }
    return false
}
const one = lear(2100);
const two = lear(2400);
const three = lear(1900);
console.log(one, two, three);