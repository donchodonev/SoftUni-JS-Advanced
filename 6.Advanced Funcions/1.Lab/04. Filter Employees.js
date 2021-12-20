function filterEmployees(employees, stringPredicate) {

    const data = JSON.parse(employees);
    let predicateArgs = stringPredicate.split('-');

    let splitProperty = predicateArgs[0];
    let splitValue = predicateArgs[1];

    let resultData = [];
    let counter = 0;

    if (stringPredicate == 'all') {
        resultData = data;
    } else {
        if (splitProperty == 'id') {
            splitValue = Number(splitValue);
        }
        resultData = data.filter(x => x[splitProperty] == splitValue);
    }

    resultData
        .forEach((employee) => console.log(`${counter++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`));
}
