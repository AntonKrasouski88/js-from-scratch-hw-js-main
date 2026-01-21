/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
const START_NUMBER = 1;
const FINISH_NUMBER = 20;
let number_increm = START_NUMBER;
let sum = 0;

while (number_increm <= FINISH_NUMBER) {
  if (number_increm % 2 === 1) {
    sum += number_increm;
  }
  number_increm += 1;
}
