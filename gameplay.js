import inquirer from "inquirer";
import { Dog, Cat, Hamster } from "./classes";

const pickPet = () => {
  let chosenPet = toLowerCase(
    window.prompt("What pet would you like? A dog, a cat, or a hamster? ")
  );
  console.log("Your pet is a " + chosenPet);
  return chosenPet;
};

const pickName = () => {
  let chosenName = window.prompt("And what would you like their name to be?");
  console.log("Your pet's name is: " + chosenName);
  return chosenName;
};

const makePet = () => {
  if (chosenPet == "dog") {
    let playerPet = new Dog(chosenName);
  } else if (chosenPet == "cat") {
    let playerPet = new Hamster(chosenName);
  } else if (chosenPet == "hamster") {
    let playerPet = new Hamster(chosenName);
  }
  console.log(playerPet);
  return playerPet;
};

const action = () => {
  console.log("What would you like to do?");
  console.log(playerPet.actions);
  let actionChosen = window.prompt("Which one would you like? ");
  return actionChosen;
};

const actionToMethod = () => {
  if (actionChosen == "Feed") {
    playerPet.feed();
  } else if (actionChosen == "water") {
    playerPet.water();
  } else if (actionChosen == "walk") {
    playerPet.walk();
  } else if (actionChosen == "let them out to pee") {
    playerPet.toilet();
  } else if (actionChosen == "play with them") {
    playerPet.play();
  } else if (actionChosen == "give them a scratch post") {
    playerPet.scratch();
  } else if (actionChosen == "pat them") {
    playerPet.scratch();
  } else if (actionChosen == "play fetch") {
    playerPet.fetch();
  } else if (actionChosen == "sniff post") {
    playerPet.sniffpost();
  } else if (actionChosen == "let hamster burrow") {
    playerPet.burrow();
  } else if (actionChosen == "put on wheel") {
    playerPet.wheel();
  } else {
    console.log("Not a valid choice, please choose again");
    action();
  }
};
