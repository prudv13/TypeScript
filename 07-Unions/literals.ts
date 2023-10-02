const zero: 0 = 0;
const hi: "hi" = "hi";

// ------------------------------------------------

const giveAnswer = (answer: "yes" | "no" | "maybe") => {
    return `The answer is ${answer}.`;
}

giveAnswer("no");
giveAnswer("yes");
giveAnswer("maybe");

// ------------------------------------------------

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

// ------------------------------------------------

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" |
                 "Thursday" | "Friday" | "Saturday" | "Sunday";

                 
let today: DayOfWeek = "Monday";