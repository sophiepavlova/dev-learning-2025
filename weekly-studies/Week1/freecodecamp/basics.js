// 1) Создай массив из 5 любых вещей, которые ты любишь.

// И выведи:
// – первый элемент
// – последний элемент
// – длину массива

const hobbies = ["walking", "reading", "watching stuff", "playing", "chatting"];
console.log(hobbies[0]);
console.log(hobbies[hobbies.length - 1]);
console.log(hobbies.length);

// 2) Сделай функцию sayHi(name)

// которая выводит в консоль:

// Привет, name!

const sayHi = function (name) {
  console.log(` Привет, ${name}!`);
};

// 3) Сгенерируй случайное число от 1 до 10.

// И выведи его.

const randNum = function (max) {
  return Math.floor(Math.random() * max) + 1;
};
console.log(randNum(10));
