module.exports = function check(str, brackets) {
  const pairs = new Map(brackets); // создаем коллекцию из пар скобок
  const stack = []; // создаем пустой массив
  for (const char of str) { // цикл, который проходит через всю строку
    if (pairs.get(stack.at(-1)) == char) { // если пара последнего символа в массиве тот же, что и в строке на данный момент
      stack.pop(); // удаляем его
    } else { // во всех других случаях
      stack.push(char); // добавляем в конец
    }
  }
  return stack.length == 0; // в конце проверяем пустой ли массив
}