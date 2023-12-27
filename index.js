import inquirer from "inquirer";
const generateNo = Math.floor(Math.random() * 10);
async function guessNumber() {
    let correctGuess = false;
    while (!correctGuess) {
        const answers = await inquirer.prompt([
            {
                type: "number",
                name: "userGuess",
                message: "Write your guess between 1 to 10: ",
            },
        ]);
        const { userGuess } = answers;
        console.log(`${userGuess} userGuess ${generateNo} answer`);
        if (userGuess === generateNo) {
            console.log("Your answer is correct \nyou win");
            correctGuess = true;
        }
        else {
            console.log("Please try again");
        }
    }
}
// Call the function to start the game
guessNumber();
