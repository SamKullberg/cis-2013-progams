//Task 1 LOOPS ON FINAL NOT ARRAY
var arrayNames = new Array('John', 'Robert', 'Jimmy', 'Bonzo');
var arrayInstruments = [];
arrayInstruments[0] = "bass";
arrayInstruments[1] = "vocals";
arrayInstruments[2] = "guitar";
arrayInstruments[3] = "drums";
var stringMessage = "";
var intCount;
for (intCount = 0; intCount < arrayNames.length; intCount++)
{
stringMessage = stringMessage + arrayNames[intCount] + " plays " + arrayInstruments[intCount] +"\n";
}
alert(stringMessage);

//task 2
var stringTimesTable = "";//declare variable and make it nothing to start off
for (var x=1; x<=12; x++)//for loop. Choose new letter for every loop to use (not StringTimesTable)
{
    for (var y=1; y<=12; y++)
    {
        stringTimesTable=stringTimesTable+ " " + x*y + " ";//accumulator. Old one plus the product of x and y
    }
stringTimesTable = stringTimesTable + "\n";//break
}
alert (stringTimesTable);

//task 3-parallel array, just the evens
 
var stringEvenTimes = "";
var arrayTimesTable = [];

for (x=1; x<=12; x++)
{
    arrayTimesTable[x]=[]//populating the x axis of the array
    for (y=1; y<=12; y++)
    {
        arrayTimesTable[x][y]=x*y;
    }
}

for (var a=1; a<=12; a++)
{
    if(a%2===0)
    {
        for (var b=1; b<=12; b++)
        {
            stringEvenTimes=stringEvenTimes + " " + arrayTimesTable[a][b] + " ";
        }
    stringEvenTimes += "\n"; //stringEvenTimes + stringEvenTimes then break
    }
}
alert (stringEvenTimes);
