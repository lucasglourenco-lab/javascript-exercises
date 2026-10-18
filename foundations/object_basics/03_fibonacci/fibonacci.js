const fibonacci = function (number) {
  const count = Number(number);
  if (isNaN(count)) {
    return `OOPS`;
  } else {
    let fiboSequence = [1, 1];
    for (let i = 2; i < count; i++) {
      let fibo = fiboSequence[i - 2] + fiboSequence[i - 1];
      fiboSequence.push(fibo);
    }
    if (count < 0) {
      return "OOPS";
    } else if (count === 0) {
      return 0;
    } else return fiboSequence[count - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
