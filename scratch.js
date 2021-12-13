import inquirer from "inquirer";
const pickPet = () => {
  inquirer
    .prompt(["What pet would you like? A dog, a cat, or a hamster? "])
    .then((answers) => {
      // Use user feedback for... whatever!!
    });
  //   let chosenPet = prompt();
  console.log("Your pet is a " + chosenPet);
  return chosenPet;
};
pickPet();
