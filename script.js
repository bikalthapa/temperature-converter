// f = (c*9/5)+32    {Fron Celsius to Fahrenheit} 
// celsius(c) = (f-32)*5/9    {From Fahrenheit to Celsius}
//Kelvin (K) = Celsius + 273.15    {From celsius to kelvin}
//Kelvin (K) = (Fahrenheit - 32) / 1.8 + 273.15    {from fahrenheit to kelvin}
//Celsius (°C) = Kelvin - 273.15  {From kelvin to celsius}
//Fahrenheit (°F) = Kelvin x 1.8 - 459.67 {from kelvin to fahrenheit}


// function to calculate from celsius
function celsius(){

let c = document.getElementById("celsius").value;

//formula to convert celsius to fahrenheit
let f = (c*9/5)+32;
 document.getElementById("fahrenheit").value = f.toFixed(2);
//formula to convert celsius to fahrenheit
 let kelvin = Number(c) + 273.15;
 document.getElementById("kelvin").value = kelvin;
};


//function to calculate from fahrenheit
function fahrenheit(){
    let f = document.getElementById("fahrenheit").value;

    //forumla to convert fahrenheit to celsius//
    let c = (f-32)*5/9;
    document.getElementById("celsius").value = c.toFixed(2);

    //formula to convert fahrenheit to Kelvin//
    let k = (f-32)/1.8+273.15;
    document.getElementById("kelvin").value = k.toFixed(2);
};


//function to calculate from Kelvin
function kelvin(){
    let k = document.getElementById("kelvin").value;

    //formula to convert kelvin to celsius
    let c = k - 273.15;
    document.getElementById("celsius").value = c.toFixed(2);

    //formula to convert kelvin to fahrenheit
    let f = k*1.8 - 459.67;
    document.getElementById("fahrenheit").value = f.toFixed(2);
}


