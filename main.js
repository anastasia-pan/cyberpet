import inquirer from "inquirer";
import chalk from "chalk";
import { Cat, Dog, Hamster } from "./classes.js";
import {
  pickPet,
  pickName,
  makePet,
  action,
  actionToMethod,
} from "./gameplay.js";

pickPet();
