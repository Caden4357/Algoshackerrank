// ? Compare triplets 
// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).
const compareTriplets = (a, b) => {
    const score = [0,0]
    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]){
            score[0]++
        }
        else if(b[i] > a[i]){
            score[1]++
        }
    }
    return score
}
console.log(compareTriplets([1,2,3], [3,2,1]));


// ? Diagonal difference 
// * The input is a square matrix, meaning the number of rows is equal to the number of columns.
// * Each element in the matrix is an integer.
// A square matrix has two diagonals: the main diagonal and the anti-diagonal (secondary diagonal).
// The main diagonal consists of elements where the row index is equal to the column index.
// The anti-diagonal consists of elements where the sum of the row index and column index is equal to one less than the size of the matrix.
const diagDifference = (arr) => {
    // console.log(arr.length);
    let firstDiag = 0
    let secondDiag = 0
    let size = arr.length
    for (let row = 0; row < size; row++){
        for (let col = 0; col < size; col++){
            if(row === col){
                firstDiag+=arr[row][col]
            }
            if(row+col === size - 1){
                secondDiag+=arr[row][col]
            }
        }
    }
    return Math.abs(firstDiag-secondDiag)
}
console.log(diagDifference([
    [-10, 3, 0, 5, -4],
    [2, -1, 0, 2, -8],
    [9, -2, -5, 6, 0],
    [9, -7, 4, 8, -2],
    [3, 7, 8, -5, 0]
]));

// ? Birthday cake candles 
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
const birthdayCandles = (candles) => {
    let tallestCandle = 0
    let count = 0
    for (let i = 0; i < candles.length; i++){
        if(candles[i] > tallestCandle){
            tallestCandle = candles[i]
        }
    }
    for (let i = 0; i < candles.length; i++){
        if (candles[i] === tallestCandle){
            count++
        }
    }
    return count
}
console.log(birthdayCandles([3,2,1,3]));

// ? Staircase 
// this is a staircase of size n = 4
//    #
//   ##
//  ###
// ####
// For loop starting with the top single stair 
// we need size - 1 spaces preceeding the first stair then size - 2 for the next and so on 
// Each time we add a new level to the staircase we need a new line 
const staircase = (size) => {
    let output = ``
    for (let i = 1; i <= size; i++){
        output+=' '.repeat(size-i) + '#'.repeat(i)+'\n'
    }
    return output
}
console.log(staircase(6));

// ? Time Conversion 
const timeConversion = (s) => {
    if(s === '12:00:00AM'){
        return '00:00:00'
    }
    if (s.includes('AM')){
        let hour = s.slice(0,2)
        if(hour == 12){
            return '00' + s.slice(2,8)
        }
        return s.slice(0,8)
    }
    else if(s.includes('PM')){
        let hour = parseInt(s.slice(0,2))
        if(hour == 12){
            return hour + s.slice(2,8)
        }
        else{
            hour+=12
            return hour + s.slice(2,8)
        }
    }
}
console.log(timeConversion('12:45:54PM'));