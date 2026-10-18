// Criação de Variáveis
let number1;
let number2;
let operation;

// Prevent Default no Clique do Botão
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.blur();
  }),
);

document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" || e.key === "Delete") {
    backspace();
  } else if ((e.key >= 0 && e.key < 10) || e.key === ".") {
    numbersClick(e);
  } else if (e.key === "+") {
    operations(e);
  } else if (e.key === "-") {
    operations(e);
  } else if (e.key === "/") {
    operations(e);
  } else if (e.key === "*") {
    operations(e);
  } else if (e.key === "=" || e.key === "Enter") {
    equalFunction();
  }
});

//SELEÇÃO DO DOM E EVENTOS
//Visor
const visor = document.querySelector("#result");

//Botão Clear e Backspace
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  clear();
  visor.textContent = 0;
});

const backspace = function () {
  if (visor.textContent.charAt(visor.textContent.length - 1) === ".") {
    visor.textContent = visor.textContent.slice(0, -1);
    decimalActive = false;
  } else if (visor.textContent.length > 1) {
    visor.textContent = visor.textContent.slice(0, -1);
  } else if (visor.textContent.length === 1) {
    visor.textContent = 0;
  }
};

const backsButton = document.querySelector("#backs");
backsButton.addEventListener("click", backspace);

//Limpar Visor e Decimal Ativo
let deveLimparVisor = false;
let decimalActive = false;
let newSequence = true;

//Botões de Números e Teclas do Teclado
const numbersButton = document.querySelectorAll(".numbers");
numbersButton.forEach((btn) => {
  btn.addEventListener("click", (e) => numbersClick(e));
});

function numbersClick(e) {
  let number;
  newSequence = false;

  if (e.type === "click") {
    number = e.target.textContent;
  } else if (e.type === "keydown") {
    number = e.key;
  } else {
    return;
  }

  if (number === "." && decimalActive === true) {
    return;
  } else if (
    number == "." &&
    deveLimparVisor == true &&
    decimalActive == false
  ) {
    visor.textContent = "0.";
    deveLimparVisor = false;
    decimalActive = true;
    newSequence = false;
  } else if (number === ".") {
    if (visor.textContent == 0) {
      visor.textContent = "0.";
      decimalActive = true;
      newSequence = false;
    } else {
      visor.textContent += number;
      decimalActive = true;
      newSequence = false;
    }
  } else {
    if (deveLimparVisor) {
      visor.textContent = number;
      deveLimparVisor = false;
    } else {
      visor.textContent === "0"
        ? (visor.textContent = number)
        : (visor.textContent += number);
    }
  }
}

//Botões de Operações
const operationBtn = document.querySelectorAll(".operations");
operationBtn.forEach((btn) => {
  btn.addEventListener("click", operations);
});

function operations(e) {
  decimalActive = false;

  if (operation == undefined) {
    number1 = +visor.textContent;
    visor.textContent = 0;
    if (e.type === "click") {
      if (e.target.id === "add") {
        operation = add;
      } else if (e.target.id === "subtraction") {
        operation = subtraction;
      } else if (e.target.id === "multiplication") {
        operation = multiplication;
      } else if (e.target.id === "division") {
        operation = division;
      }
    } else if (e.type === "keydown") {
      if (e.key === "+") {
        operation = add;
      } else if (e.key === "-") {
        operation = subtraction;
      } else if (e.key === "/") {
        operation = division;
      } else if (e.key === "*") {
        operation = multiplication;
      }
    }
  } else if (
    operation == division &&
    visor.textContent == 0 &&
    newSequence === false
  ) {
    isError();
  } else {
    if (newSequence === false) {
      number2 = +visor.textContent;
      number1 = operate(operation, number1, number2);
      visor.textContent = number1;
      deveLimparVisor = true;
    }
    if (e.type === "click") {
      if (e.target.id === "add") {
        operation = add;
      } else if (e.target.id === "subtraction") {
        operation = subtraction;
      } else if (e.target.id === "multiplication") {
        operation = multiplication;
      } else if (e.target.id === "division") {
        operation = division;
      }
    } else if (e.type === "keydown") {
      if (e.key === "+") {
        operation = add;
      } else if (e.key === "-") {
        operation = subtraction;
      } else if (e.key === "/") {
        operation = division;
      } else if (e.key === "*") {
        operation = multiplication;
      }
    }
  }

  newSequence = true;
}

//Operações
function operate(operation, number1, number2) {
  let result = operation(number1, number2);
  let decimal = result.toString().split(".");
  if (decimal[1] !== undefined) {
    return decimal[1].length >= 7 ? +result.toFixed(6) : result;
  } else {
    return result;
  }
}

let add = function (number1, number2) {
  return number1 + number2;
};

let subtraction = function (number1, number2) {
  return number1 - number2;
};

let multiplication = function (number1, number2) {
  return number1 * number2;
};

let division = function (number1, number2) {
  return number1 / number2;
};

let clear = function () {
  number1 = undefined;
  number2 = undefined;
  operation = undefined;
  deveLimparVisor = false;
  decimalActive = false;
  newSequence = false;
};

function isError() {
  visor.textContent = "Err0r";
  number1 = undefined;
  number2 = undefined;
  operation = undefined;
  deveLimparVisor = true;
  // decimalActive = true;
}

//Botão de Resultado
const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", equalFunction);

function equalFunction() {
  if (operation === undefined) {
    return;
  } else if (operation == division && +visor.textContent == 0) {
    isError();
  } else if (newSequence === true && visor.textContent === "0") {
    return;
  } else {
    number2 = +visor.textContent;
    visor.textContent = operate(operation, number1, number2);
    number1 = undefined;
    number2 = undefined;
    operation = undefined;
    deveLimparVisor = true;
    decimalActive = false;
    newSequence = false;
  }
}
