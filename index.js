let grades = prompt("Please enter your grades");
let marks; 
if (grades > 79){
    marks = "A";
}
else if(grades >60 <=79 ){
    marks = "B";
}
else if (grades  >59 <= 49){
    marks = "C";
}
else if (grades >49 <= 40){
    marks = "D";
}
else {
    marks = "E";
}
console.log(marks);
