//Q1 Store Mark's and John's mass and height in variables.
let markName = "Mark";
let johnName = "John";
let markHeight = 1.6;
let markMass = 73.5;
let johnHeight = 1.65;
let johnMass = 78;

//Q2 Calculate both their BMIs and store their BMIs in variables.
const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.
const markMoreBeefCake = markBMI > johnBMI;

//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").
console.log(
  `Q4: Is Mark's BMI higher than John's? Why yes, it's ${markMoreBeefCake}, it is`
);

//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI.
if (markBMI > johnBMI) {
  console.log(`Q5: ${markName} ${markBMI.toFixed(2)}`);
} else if (johnBMI > markBMI) {
  console.log(`Q5: ${johnName} ${johnBMI.toFixed(2)}`);
} else {
  console.log(`Q5: They both have the same BMI`);
}
