let bonus = 20;

function sum(first, second) {
    // let result = first + second;
    // console.log(bonus);
    let result = first + second + bonus;
    if (result > 9){
        var mood = "Happy";
            mood = "Pusi";
            console.log(mood);
    }

    return result;
}
const output = sum(7, 9);
console.log(bonus);
console.log(output);
// console.log(mood);