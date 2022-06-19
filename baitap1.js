nameOne = 'Marks';
nameTwo = 'John';

const mass1 = 78;
const height1 = 1.69;
const mass2 = 92;
const height2 = 1.95;
const BMI1 = mass1 / height1 ** 2;
console.log(`BMI của ${nameOne} là ${BMI1}`);
const BMI2 = mass2 / height2 ** 2;
console.log(`BMI của ${nameTwo} là ${BMI2}`);
if (BMI1 > BMI2) {
    console.log(`BMI của ${nameOne} cao hơn BMI của ${nameTwo}`)
} else {
    console.log(`BMI của ${nameTwo} cao hơn BMI của ${nameOne}`)
}