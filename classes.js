//a game to create a tamagotchi
//player picks the type of animal they want
//ability to alter values
//start with set values, player actions affect them
//certain numbers within values trigger actions
//random number generator to populate the pet? or animal have different "stats"
//each animal has different actions, and also different stat properties
//give player options from text list, option picked will trigger a method
// Methods- if bathroom is less than x love is reduced. hunger is more than y love, mood, energy is reduced.
// .. mood and love go up around the same kind of values. If energy goes down, hunger and thirst will go up.
// but when hunger and thirst goes down. energy goes up
//depending on the animal picked, player should be given array of options (methods), some of them general
//.. some of them personalised to the type of animal they have
//write checkup method, which other methods will call on, to check vital stats and accordingly give status
class Tamagotchi {
  constructor(type, name, hunger, thirst, bathroom, energy, mood, love) {
    this.type = type;
    this.name = name;
    this.hunger = hunger;
    this.thirst = thirst;
    this.bathroom = bathroom;
    this.energy = energy;
    this.mood = mood;
    this.love = love;
  }

  declaration(action) {
    console.log(`You ${action} your ${this.type}`);
  }

  // checkup() general method to be called in sublclasses and objects. It can be used at the end of
  //.. methods to perform a status check after action
  checkup() {
    if (this.hunger > 100) {
      return console.log("Not enough feeding, your pet is dead");
    }
    if (this.bathroom > 100) {
      return console.log("You never let me out! I ran away");
    }
    if (this.energy < 0) {
      return console.log(
        `Your pet's energy is ${this.energy}. They dropped dead`
      );
    }
    if (this.thirst > 100) {
      return console.log(
        ` Thirst is ${this.thirst}. Your ${this.type} dehydrated and died.`
      );
    }
    if (this.mood > 50) {
      return console.log("Your pet is happy.");
    }
    if (this.love > 50) {
      return console.log(`Your ${this.type} is feeling all the love <3.`);
    }
  }

  time() {
    this.hunger += 10;
    this.thirst += 10;
    this.bathroom += 10;
    this.energy -= 10;
  }

  feed() {
    this.declaration("feed");
    this.hunger -= 20;
    this.thirst += 10;
    this.energy += 20;
    this.bathroom += 20;
    this.love += 10;
    console.log("thanks for the grub!");
    this.checkup();
  }
  water() {
    this.declaration("water");
    this.thirst -= 20;
    this.energy += 10;
    this.love += 10;
    console.log("Thanks for that, you tall glass of water");
    this.checkup();
  }
  walk() {
    this.hunger += 20;
    this.thirst += 20;
    this.energy -= 20;
    this.mood += 20;
    this.love += 20;
    console.log("Walking");
    this.checkup();
  }
  toilet() {
    this.bathroom = 0;
    this.mood += 10;
    this.thirst += 10;
    this.hunger += 10;
    console.log("Business done");
    this.checkup();
  }
  play() {
    this.mood += 30;
    this.energy -= 20;
    this.love += 30;
    ("Yes, let's play!");
    this.checkup();
  }
}

export class Cat extends Tamagotchi {
  constructor(name, hunger, thirst, bathroom, energy, mood, love, anger) {
    super("Cat", name, 30, 50, 80, 40, 20, 100);
    this.anger = 60;
  }

  actions = [
    "Feed",
    "water",
    "walk",
    "let them out to pee",
    "play with them",
    "give them a scratch post",
    "pat them",
  ];
  scratch() {
    this.energy += 10;
    this.mood += 20;
    console.log(`The ${this.type} scratches. Scratch, scratch, scratch`);
    this.checkup();
  }
  pat() {
    this.love -= 30;
    console.log("You patted me! How dare you!");
    this.checkup();
  }
}

export class Dog extends Tamagotchi {
  constructor(name, hunger, thirst, bathroom, energy, mood, love) {
    super("Dog", name, 30, 50, 80, 40, 20, 100, 80);
  }

  actions = [
    "Feed",
    "water",
    "walk",
    "let them out to pee",
    "play with them",
    "play fetch",
    "sniff post",
  ];

  fetch() {
    this.energy -= 20;
    this.love += 20;
    this.hunger += 20;
    this.thirst += 20;
    console.log(
      `You throw your ${this.type}'s favourite stick. I love playing fetch, throw it again!`
    );
    this.checkup();
  }

  sniffpost() {
    this.energy -= 10;
    this.mood += 20;
    this.hunger += 5;
    console.log("What a fascinating lamp post!");
    this.checkup();
  }
}

export class Hamster extends Tamagotchi {
  constructor(name, hunger, thirst, bathroom, energy, mood, love) {
    super("Hamster", name, 30, 50, 80, 40, 20, 100, 80);
  }

  actions = [
    "Feed",
    "water",
    "walk",
    "let them out to pee",
    "play with them",
    "let hamster burrow",
    "put on wheel",
  ];

  burrow() {
    console.log("I love wood chips!");
    this.energy -= 20;
    this.hunger += 30;
    this.thirst += 10;
    this.mood += 30;
    this.checkup();
  }
  wheel() {
    console.log("It must be 3am, let me have some exercise");
    this.energy -= 20;
    this.hunger += 20;
    this.thirst += 20;
    this.mood += 30;
    this.checkup();
  }
}

let player1Pet = new Cat("Sally");
let player2Pet = new Dog("Roger");
let player3Pet = new Hamster("Mickey");

// player1Pet.pat();
// console.log(player1Pet);
// player2Pet.sniffpost();
// console.log(player2Pet);

player1Pet.scratch();
player2Pet.sniffpost();
player3Pet.burrow();
// player3Pet.checkup();
console.log(player1Pet);
console.log(player2Pet);
console.table(player3Pet);
console.log(JSON.stringify(Object.entries(player3Pet)));
console.log(JSON.stringify(Object.getOwnPropertyNames(player1Pet)));
