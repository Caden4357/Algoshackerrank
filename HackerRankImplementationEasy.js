// ? Grading Students 
// Sam is a professor at the university and likes to round each student's grade according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
const gradingStudents = (grades) => {
    let roundedGrades = []
    grades.forEach(grade => {
        if (grade < 38) {
            roundedGrades.push(grade)
        }
        else {
            let nextMultOfFive = Math.ceil(grade / 5) * 5
            if((nextMultOfFive - grade) >= 3){
                roundedGrades.push(grade)
            }
            else{
                roundedGrades.push(nextMultOfFive)
            }
        }
    });
    return roundedGrades
}
console.log(gradingStudents([73,67,38,33]));

// ? Apples and Oranges
// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.
// we are givin: 
    // * s & t = the start and end point of sams house 
    // * a & b = where the apple tree and orange tree are located 
    // * apples: integer array, distances at which each apple falls from the tree.
    // * oranges: integer array, distances at which each orange falls from the tree.
// * we need to add the position of the tree to each number in each array and then see if that number falls within the range of sams house 

const applesAndOranges = (s,t,a,b,apples,oranges) => {
    let applesOnSamsHouse = 0
    let orangesOnSamsHouse = 0
    apples.forEach((apple) => {
        if((apple+a) >= s && (apple+a) <= t){
            applesOnSamsHouse++
        }
    })
    oranges.forEach((orange) => {
        if((orange+b) >= s && (orange+b) <= t){
            orangesOnSamsHouse++
        }
    })
    console.log(applesOnSamsHouse);
    console.log(orangesOnSamsHouse);
}
console.log(applesAndOranges(7,10,4,12,[2,3,-4], [3,-2,-4]));

// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

const numberLineJumps = (x1,v1, x2, v2) => {
    // let stillJumping = true
    while (true){
        x1+=v1
        x2+=v2
        if(x1 === x2){
            return 'YES'
        }
        // if there one kangaroos position is greater than the others AND the velocity at which that kangaroo travels is greater than or == to the velocity of the other kangaroo they will never meet and we break
        if(x1 > x2 && v1 >= v2|| x2 > x1 && v2 >= v1){
            return 'NO'
        } 
    }
}
console.log(numberLineJumps(0, 2, 5, 3));
console.log(numberLineJumps(0, 3, 4, 2));

// Subarray division 
// s = [2,2,1,3,2] // chocolate bar segments 
// d = 4 -> rons bday 
// s = 2 rons bday month 
// return all the segments that items add up to the birth day and length of the arrays match the birth month no duplicates
// this would return 2 because [2,2] and [1,3]
const subarrayDivision = (s,d,m) => {
    let count = 0;
    for(let i = 0; i < s.length; i++){
        let tempArray = s.slice(i, i+m)
        let sum = 0
        tempArray.forEach((num) => {
            sum+=num
        })
        if(d===sum){
            count++
        }
    }
    return count
}
console.log(subarrayDivision([2,2,1,3,2], 4, 2));
// Migratory Birds 
// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
const migratoryBirds = (arr) => {
    let lowestId = arr[0]
    let mostOccurances = 0
    const counter = {}

    arr.forEach((id) => {
        if(counter[id]){
            counter[id]++
        }
        else{
            counter[id] = 1
        }
    })
    for(let [key, val] of Object.entries(counter)){
        if(val > mostOccurances){
            mostOccurances = val
            lowestId = key
        }
    }
    return lowestId
}
console.log(migratoryBirds([1, 1, 1, 4, 4, 4, 5, 3,0,0,0 ]));


// Between Two Sets
// You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:
// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.
const betweenTwoSets = (a,b) => {
    let count = 0
    let maxA = Math.max(...a)
    let minB = Math.min(...b)
    for(let i = maxA; i <= minB; i++){
        if(a.every((num) => i % num === 0) && b.every((num) => num % i === 0)){
            count++
        }
    }
    return count
}
console.log(betweenTwoSets([2,4],[16,32,96]));