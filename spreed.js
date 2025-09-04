const numbers = [ 45, 67, 89, 35, 34,];
// console.log( numbers);
// console.log(...numbers);

// const max = Math.max(63, 34, 55, 56, 98, 245,34, 53,);
// console.log(max);


// const first = [ 3, 4, 5, 6, 7];
// const second = first;
// second.push(9);
// console.log(first);
// console.log(second);

const first = [ 3, 4, 5, 6, 7];
const second = [first];
const third = [...first, 875, 56, 34, 353];
second.push(9);
// console.log(...first);
// console.log(second);
// console.log(third);


const num1 = [45, 56, 235, 778, 235, 55];
const num2 = [23, 24, 23, 45, 46, 66, 77, 55];
const all = [...num1, 768, 78, ...num2];
console.log(...all);


// object 
const person = {
    name: 'Asir Uddin',
    age: 25
}
    const employee = {...person, desicnation: 'Web dev'};
console.log(employee);