const employee = {
    Name: 'Alex Shanda',
    desicnation: 'QA',
    salary: 45000,
    experiance: 3,
    age: 56
    };

    Object.freeze(employee);
    // delete employee.experiance;

    employee.salary = employee.salary + 20000;
    employee.location = 'Dhaka';
    employee.numOfFaltu = 9;
    console.log(employee);