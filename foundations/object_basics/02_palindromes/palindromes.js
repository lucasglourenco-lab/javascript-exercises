const palindromes = function (string) {
  let arrayResulted = string
    .split("")
    .filter(
      (item) => item !== " " && item !== "," && item !== "!" && item !== ".",
    )
    .reverse()
    .join("")
    .toLowerCase();
  if (arrayResulted === arrayResulted.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
