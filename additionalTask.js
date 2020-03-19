// Additional task
// Guessing game

let prize = 0

function play(round) {
    let message = round == 0 ? "Do you want to play a game?" : "Do you want to continue?";
    if (confirm(message)) {
        let max = 5 * 2 ** round;
        let randomNumber = Math.floor(Math.random() * (max + 1));
        for (let i = 0; i < 3; i++) {
            let win = parseInt((10 * 3 ** round) / 2 ** i);
            let result = prompt(
                "Guess a number\nRange: [0; " + max + "]" +
                ", attempts left: " + (3 - i) +
                ", total prize: " + prize + "$" +
                ", possible win: " + win + "$"
            )
            if (result == randomNumber) {
                console.log("Guessed! Your win is: " + win);
                prize += win;
                return true;
            } else if (result == null) {
                console.log("Thank you for a game. Your prize is: " + prize);
                return false;
            }
        }
        console.log("Thank you for a game. Your prize is: " + prize);
        return false;
    } else {
        let message = round == 0 ? "You did not become a millionaire" : "Thank you for a game. Your prize is: " + prize;
        console.log(message);
        return false;
    }
}

for (let round = 0; play(round); round++);

// Your task is to write a game. Requirements:
// •	Show a message ‘Do you want to play a game?’ // use confirm()
// •	If user clicked ‘Cancel’ – output in console message 
// `You did not become a millionaire`, if clicked ‘Ok’ – start a game: 
// randomly /* Math.random() */ choose a number in range [0; 5], 
// and ask user to enter a number
// •	User has 3 attempts to guess a number
// •	If user guessed number on 1-st attempt prize is 10$ 
// (maximum prize for current numbers range), 2-nd attempt – 5$, 
// 3-rd attempt – 2$
// •	If user did not guess a number, output in console message 
// ‘Thank you for a game. Your prize is: …’, 
// and ask if he wants to play again.
// •	If user did guess - ask if he wants to 
// continue a game // use confirm().
// •	If user does not want to continue – output in 
// console message ‘Thank you for a game. 
// Your prize is: …’, and ask if he wants to play again.
// •	If user does want to continue, make number 
// range twice as big as the previous one 
// /* for example [0; 5] -> [0; 10] */, 
// and three times bigger maximum prize 
// /* for example on 1-st attempt prize 
// will be 30$, 2-nd attempt – 15$, 3-rd attempt – 7$ */. 
// Prize must be added to the previous one and number of attempts 
// should be set to 3 (user should has 3 attempts to guess 
//     a number for each numbers range)
// •	Each time you ask user to enter a number /* using prompt() */ 
// you should show him a range of  numbers, how much attempts he has left,
// his total prize and possible prize on current attempt. 
// See example below:



// •	All these stuff should be repeated until user lose or 
// decide to quit

