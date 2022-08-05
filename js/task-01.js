//Напиши скрипт, який для кожного елемента масиву ingredients:

//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const items = document.querySelectorAll('li.item');
console.log("Number of categories:", items.length);

items.forEach(element => {
  const title = element.querySelector('h2');
  console.log("Category:", title.textContent);
  const itemsLength = element.querySelectorAll('li')
  console.log("Elements:", itemsLength.length);
})

