/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
intMin= parseInt(prompt("Please choose the lowest number (but no lower than 0) in your guessing range: "));
        while(isNaN(intMin) || intMin<0)
        {
            intMin = parseInt(prompt("I'm sorry but your lowest number choice was invalid." + "\n"
            + "Please choose the lowest number (but no lower than 0) in your guessing range: "));
        }
/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/
intMax= parseInt(prompt("Please choose the highest number (that is greater than the lowest by 2) in your guessing range: "));
        while(isNaN(intMax) || intMax<(intMin+2))
        {
            intMax = parseInt(prompt("I'm sorry but your highest number choice was invalid." + "\n"
            + "Please choose the highest number in your guessing range: "));
        }
/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter
//did this below in the last section-Sam


/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/
intGuess= parseInt(prompt("Please enter guess: "));
        while(isNaN(intGuess) || intGuess<intMin || intGuess>intMax)
        {
            intGuess = parseInt(prompt("I'm sorry but your guess was invalid." + "\n"
            + "Please enter your guess, again: "));
        }
/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
intCount=1
 while (intGuess!=intRandom)
     {
        if (intGuess<intRandom)
        {
            alert (" Your choice of " + intGuess + "was too low.");
        }
        else 
        {
            alert (" Your choice of " + intGuess + "was too high.");
        }
        intGuess= parseInt(prompt("Please enter guess: "));
                    while(isNaN(intGuess) || intGuess<intMin || intGuess>intMax)
                    {
                        intGuess = parseInt(prompt("I'm sorry but your guess was invalid." + "\n"
                        + "Please enter your guess, again: "));    
                    }
        intCount++
     }
// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");
