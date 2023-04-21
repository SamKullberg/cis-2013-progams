var $ = function (id) 
{
    return document.getElementById(id);
}

var vowels = function () 
{
var stringEntry= $("phrase").value;//recieve user input and declare stringEntry
stringEntry=stringEntry.toUpperCase();//make it all uppercase
if(stringEntry === " ")//test to see if something is in the box
{
    alert ("Please enter a phrase and then select a button below");
}
else
{
    var intVowels=0;//declare and initialize vowels. Why Int-becuase we are COUNTING with NUMBERS
    for (var intCount=0; intCount<stringEntry.length; intCount++) //create loop and declare/initialize intCount. Why < instead of <=? We start array with a 0
    {
        if(stringEntry.charAt(intCount)==="A"||stringEntry.charAt(intCount)==="E"||stringEntry.charAt(intCount)==="I"||stringEntry.charAt(intCount)==="O"||stringEntry.charAt(intCount)==="U")//charAt means that the loop looks only for specific chracters rather than whole phrases or something else
        {
            intVowels++;
        }
    }
    $("output").value= "There are " + intVowels + " vowels in the above phrase.";
}
}
var consonants = function () 
{
    stringEntry = $("phrase").value;
    stringEntry= stringEntry.toLowerCase();
    if(stringEntry === " ")//test to see if something is in the box
    {
        alert ("Please enter a phrase and then select a button below");
    }
    else
    {
        var intConsonants = 0;
        for (intCount = 0; intCount<stringEntry.length; intCount++)
        {
            switch(stringEntry.charAt(intCount))//go through each character and count for stringEntry
            {
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                case " "://to make sure it does not count spaces
                    break;//if its one of those then it goes to the top and adds a count and goes through again
                default:
                    intConsonants++;//intC plus intC
                    break;//if it is not a vowel, then add it to consonants and keep it going (intCount becomes 1. Don't need to do int count plus int count I guess)

            }
        }
        $("output").value= "There are " + intConsonants + " in the above phrase.";
    }

}
var reverse = function () 
{
var stringEntry=$("phrase").value;//local variable and user input

if(stringEntry === " ")//test to see if something is in the box
{
    alert ("Please enter a phrase and then select a button below");
}
else
{
    var stringReversed = " ";

    for (var intCount = stringEntry.length-1;intCount >= 0; intCount--)//start with the last position minus one (bc of the 0 with arrays)
    {
        stringReversed= stringReversed + stringEntry.charAt(intCount);//accumulator. Grab the 15th then 14th etc. character and add it to stringReversed (think of it as putting letters together, not adding numbers)
    }
    $("output").value= "The reverse of the above phrase is: \n" + stringReversed;// "\n" makes it start a new line
}
};//only at end of the function


var clear = function () 
{
	$("phrase").value = "";
    $("output").value = "";
}

window.onload = function () 
{
    //the following five lines of code make sure the values on the DOM are cleared.
    $("phrase").value = "";
    $("output").value = "";
    $("vowels").onclick = vowels; //runs the calculate_click function when clicked
    $("consonants").onclick = consonants; //runs the calculate_click function when clicked
    $("reverse").onclick = reverse; //runs the calculate_click function when clicked
    $("clear").onclick = clear; //runs the calculate_click function when clicked        
}  