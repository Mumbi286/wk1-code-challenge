let basicSalary;
let benefits;
function grossSalary(basic, benefits){
    return basic + benefits
}
//calculate the taxable pay(monthly)
if (grossSalary <= 24000){
    return grossSalary * 0.10 // converted 10% into decimals
}else if (grossSalary <= 32,333){
    return grossSalary * 0.25 
}else if (grossSalary <= 500,000){
    return grossSalary * 0.30
}else if (grossSalary<= 800,000){
    return grossSalary * 0.325
}else {
    return grossSalary * 0.35
}
//calculate SHIF
function calculateShif(){
    let deduction = grossSalary * 0.0275
    if (calculateShif<= 2400)
        return deduction
}

//calculate NSSF deduction
function calculateNssf(){
    let deduction = grossSalary * 0.06
    if (calculateNssf<= 8000){// from feburuary 2025 onwards
        return deduction
}
//calculate the payee
function payee(){
    return (grossSalary - (NSSF+ SHIF))
}
}
//calculate the net salary 
function netSalary(grossSalary,benefits){
    let netSalary = grossSalary -(SHIF+NSSF+payee)
    return basicSalary
}
console.log ("grossSalary :" grossSalary)
console.log ("Tax :" payee)
console.log ("NHIF:" nhif)
console.log ("SHIF:" shif)
console.log ("netSalary:"netSalary)

