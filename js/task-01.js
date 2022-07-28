const items = document.querySelectorAll('#categories .item');
console.log(`В списке ${items.length} категории.`);
Array.prototype.forEach.call(items, element => {
  const title = element.querySelector('h2').innerHTML;
  const itemsLength = element.querySelectorAll('li').length;
  console.log(`Категория: ${title} \nКоличество элементов: ${itemsLength}`);
});

