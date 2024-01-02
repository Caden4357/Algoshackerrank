let arr = [3,2,2,3]
let val = 3

const removeVal2 = (arr,val) => {
    arr = arr.filter((element) => element !== val)
    console.log(arr);
}
console.log(removeVal2(arr,val));

let ans = arr.concat(arr)
console.log('ANSWER', ans);


let tree = {
    root:{
        val:9,
        left:{
            val:6
        },
        right:{
            val:3
        }
    },

}

var checkTree = function(tree) {
    return tree.root.left.val + tree.root.right.val === tree.root.val?  true:  (false)
};
console.log(checkTree(tree));




// Count how many of each character in a string 
// return an object with all the letters that are present and how many of each dont count capitals seperate 

function countCharsOfString(str){
    let result = {};
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++){
        let char = str[i]
        if(char.match(/^[0-9a-zA-Z]+$/))
        if (result[char]){
            result[char]++
        }
        else{
            result[char] = 1
        }
    }
    console.log(result);
}
countCharsOfString('hello Hi!@#')

const countChars = (str) => {
    let result = {};
    for (let char of str){
        console.log(char , str.charCodeAt(char));
    }
}
countChars('hello Hi!@#');


function reverseArr(arr){
    for (let i = 0; i < arr.length/2; i++){
        let temp = arr[i]
        arr[i] = arr[arr.length-i-1]
        arr[arr.length-i-1] = temp
    }
    console.log(arr);
}
console.log(reverseArr([1,2,3,4,5]));

// Hacker rank

function basketballScores(scores){
    let scoresCount = {
        highScore: scores[0],
        lowScore: scores[0]
    }
    let scoreCount = [0,0]
    scores.forEach((score,idx) => {
        if(score > scoresCount['highScore']){
            scoresCount['highScore'] = score
            scoreCount[0]++
        }
        else if(score < scoresCount['lowScore']){
            scoresCount['lowScore'] = score
            scoreCount[1]++
        }
    });
    return scoreCount
}
console.log(basketballScores([10, 5, 20, 20, 4, 5, 2, 25, 1]))


// Number line Jumps 

// x1=starting location of first kangaroo
// v1=number of spaces first kangaroo jumps at a time 
// x2=starting location of second kangaroo
// v2=number of spaces second kangaroo jumps at a time 
// goal to see if the kangaroos will jump on the same space at the same time if they do return yes 
// 
function circusShow(x1,v1,x2,v2){
    let k1start = x1
    let k1jump = v1
    let k2start = x2
    let k2jump = v2
    if (k1start < k2start && k1jump <= k2jump){
        return 'NO'
    }else{
        return 'YES'
    }
}
console.log(circusShow(0, 3, 4, 2));




function push(arr, val){
    arr[arr.length] = val
    return arr
}
console.log(push([1,2,3],4));


const date = new Date()
console.log(date);

date.setHours(date.getHours() + 2)
console.log(date.toLocaleString('en-US', {timeZone:"America/Los_Angeles"}));


// var createCounter = function(n) {
//     let times = 0
//     return function count() {
//         if(times === 0){
//             times++
//             return n;
//         }
//         else{
//             n = n + 1
//             times++
//             return n;
//         }
//     };
// };
// let result = createCounter(5)
// // result()
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());

var createCounter = function(n) {
    return function count() {
        return n++;
    };
}
let result = createCounter(5)
// result()
console.log(result());
console.log(result());
console.log(result());
console.log(result());

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

let t = Date.now();
sleep(100).then(() => {
    console.log(Date.now() - t);
}
);