// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
const START_NUMBER = 1;
const FINISH_NUMBER = 20;
let num = START_NUMBER;
let sum = 0;

while (num <= FINISH_NUMBER) {
  sum += num;
  num += 1;
}
