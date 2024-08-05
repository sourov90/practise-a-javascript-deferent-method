//return  will be sum number

function problemSolve(arr){
    let sum =0;
    for(let i=0; i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

// console.log(problemSolve([23,43,56,7,78]))



//return will be an even number;

function evenOfNumber(arr){
    // let evenNumber =[];
    let sum=0;
    for(let i of arr){
        if(i%2===0){
            // evenNumber.push(i);
            sum+=i
        }
    }
  return sum ;
}

const result = evenOfNumber([23,22,12,13,24,54])
console.log(result);