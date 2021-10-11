import { passwords } from "./dictionary.js";
import { hashedPasswords } from "./hashedPasswords.js";

const saltSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

let count = 0;
const startTime = new Date().getTime();

for (let i = 0; i < saltSet.length; i++) {
  let possibleSalt = [];
  possibleSalt.push(saltSet[i]);

  for (let j = 0; j < saltSet.length; j++) {
    possibleSalt.push(saltSet[j]);

    for (let k = 0; k < passwords.length; k++) {
      let hashedPassword = passwords[k]; // hash password..somehow

      for (let l = 0; l < hashedPasswords.lenght; l++) {
        count++;
        if (hashedPassword === hashedPasswords[l]) {
          const endTime = new Date.getTime();
          const time = endTime - startTime;
          console.log(
            `Password cracked - ${passwords[k]}, tried ${count} times in ${time} seconds`
          );
          break;
        }
      }
      possibleSalt.pop();
    }
  }
}
