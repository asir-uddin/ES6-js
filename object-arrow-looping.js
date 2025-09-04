// const numbers = [45,87,89,67,737,];
// for(const number of numbers){
//     console.log(number);
// }



const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

for(const key in employee ){
    const value = employee[key];
    console.log(key, value);
}