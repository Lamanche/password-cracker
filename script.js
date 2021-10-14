import { passwords } from "./dictionary.js";
import { hashedPasswords } from "./hashedPasswords.js";

(function () {
  const saltSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
  const startTime = new Date().getTime();
  let count = 0;

  console.log("cracking...");

  const a = saltSet.length;
  for (let i = 0; i < a; i++) {
    //let possibleSalt = [];
    //let possibleSalt = saltSet[i];
    //possibleSalt.push(saltSet[i]);

    const b = saltSet.length;
    for (let j = 0; j < b; j++) {
      //possibleSalt.push(saltSet[j]);
      //possibleSalt += saltSet[j];

      const c = hashedPasswords.length;
      for (let k = 0; k < c; k++) {
        const d = passwords.length;
        for (let l = 0; l < d; l++) {
          //const saltedPassword = possibleSalt.join("") + passwords[l];
          cons saltedPassword = saltSet[i]+saltSet[j]+password[l]
          const hashedPassword = CryptoJS.MD5(saltedPassword).toString();
          count++;
          if (hashedPassword === hashedPasswords[k]) {
            const endTime = new Date().getTime();
            const time = (endTime - startTime) / 1000;
            return console.log(
              `Password cracked - ${passwords[l]}, tried ${count} times in ${time} seconds`
            );
          }
        }
      }
      //possibleSalt.pop();
      //possibleSalt = saltSet[i];
    }
  }
  const endTime = new Date().getTime();
  const time = (endTime - startTime) / 1000;
  return console.log(`No password found in ${time} seconds`);
})();
