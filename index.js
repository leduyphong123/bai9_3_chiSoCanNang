let weight=parseFloat(prompt("nhap can nang:"));
let height=parseFloat(prompt("nhap chieu cao:"));

let bmi=weight/(height*height);
if(bmi<18.5){
    alert("Underweight");
} else if(bmi <25.0){
    alert("Normal");
} else if(bmi <30.0){
    alert("Overweight");
}else{
    alert("Obese");
}