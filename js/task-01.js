//Напиши скрипт, який для кожного елемента масиву ingredients:

//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const items = document.createElement('.categories .item');
console.log(`В списке ${items.length} категории.`);
Array.prototype.forEach.call(items, element => {
  const title = element.querySelector('h2').innerHTML;
  const itemsLength = element.createElement('li').length;
  console.log(`Категория: ${title} \nКоличество элементов: ${itemsLength}`);
});


