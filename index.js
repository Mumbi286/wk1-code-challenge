//prompts the user to input the students marks
let marks = parseInt(prompt("Please enter your marks"));
let grade 

if (marks >=79 && marks <=100){ //comparing using the and logical operators to see if both expresions are true, otherwise false
    grade = "A";
}
else if(marks >= 60 && marks < 79){
    grade = "B";
}
else if (marks >=49 && marks < 59){
    grade = "C";
}
else if (marks >= 40 && marks < 49){
    grade = "D";
}
else {
    grade = "E";
}

console.log(grade); // logs the message to the console
