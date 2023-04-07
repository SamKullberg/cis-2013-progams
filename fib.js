//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}
// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output
var generate = function () 
{
	var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k; //k is calculated by adding i+j and represents the next Fibonacci number
    var intCount;   //declare the intCount variable
	var stringOutput = "0 1";//initialize the Fibonacci series output to include the first two numbers

    var intCount = parseInt($("total_fib").value);//gets user input from the DOM
        if(isNaN(intCount) || intCount<2 || intCount>100)//validation for user input from the DOM
        {
            alert("Invalid entry for Fibonacci calculation");//alert if wrong
            $("total_fib").value="";//clears the user input (from DOM)
        }
        else
        {
           while (intCount>2)//loop goes until it is <=2
           {
            k=i+j;//i plus j equals k, new i with every run through of the loop
            i=j;//replace old j with i
            j=k;//replace old k with j
            stringOutput=stringOutput + " " + k + " ";//puts spaces between the output numbers
            intCount--;
            } 
        }   
    $("output").value=stringOutput;
    // number of fibonacci numbers and then post it to the html DOM 
} 

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  