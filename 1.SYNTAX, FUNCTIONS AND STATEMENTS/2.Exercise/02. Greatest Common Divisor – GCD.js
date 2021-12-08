function findGCD(num1, num2) {

    let smallerNum = Math.min(num1, num2);
    let largerNum = Math.max(num1, num2);

    let gdc = 0;

    for (let index = smallerNum; index > 0; index--) {
        if (smallerNum % index == 0 && largerNum % index == 0) {
            gdc = index;
            break;
        }  
    }
    console.log(gdc);
}