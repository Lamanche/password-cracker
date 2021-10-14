import { passwords } from "./dictionary.js";
import { hashedPasswords } from "./hashedPasswords.js";

(function () {
  const saltSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
  const startTime = new Date().getTime();
  let count = 0;

  console.log("starting");

  for (let i = 0; i < saltSet.length; i++) {
    let possibleSalt = [];
    possibleSalt.push(saltSet[i]);
    for (let j = 0; j < saltSet.length; j++) {
      possibleSalt.push(saltSet[j]);
      for (let k = 0; k < hashedPasswords.length; k++) {
        for (let l = 0; l < passwords.length; l++) {
          const saltedPassword = possibleSalt.join("") + passwords[l];
          const hashedPassword = CryptoJS.MD5(saltedPassword).toString();
          count++;
          if (hashedPassword === hashedPasswords[k]) {
            const endTime = new Date().getTime();
            const time = (endTime - startTime) / 1000;
            return console.log(
              `Password cracked - ${passwords[l]}, tried ${count} times in ${time} seconds`
            );
          } /*else if (
            i === saltSet.length - 1 &&
            j === saltSet.length - 1 &&
            k === hashedPasswords.length - 1 &&
            l === passwords.length - 1 &&
            hashedPassword !== hashedPasswords[k]
          ) {
            const endTime = new Date().getTime();
            const time = (endTime - startTime) / 1000;
            return console.log(`No password found in ${time} seconds`);
          }*/
        }
      }
      possibleSalt.pop();
    }
  }
  return console.log(`No password found in ${time} seconds`);
})();
