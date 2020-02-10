/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  this.head = '<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead>';
  this.el.innerHTML = this.head;
  this.tbody = document.createElement('tbody');
  this.items = items;

  this.create = function(items) {

    for (const it of items) {
      const tr = document.createElement('tr');
      tr.insertAdjacentHTML('beforeend', `<td>${it.name}</td>`);
      tr.insertAdjacentHTML('beforeend', `<td>${it.age}</td>`);
      tr.insertAdjacentHTML('beforeend', `<td>${it.salary}</td>`);
      tr.insertAdjacentHTML('beforeend', `<td>${it.city}</td>`);
      this.tbody.insertAdjacentElement('beforeend', tr);
    }

    this.el.insertAdjacentElement('beforeend', this.tbody);

  };

  this.create(this.items);

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    let sortableItem = '';

    switch (column) {
      case (0):
        sortableItem = 'name';
        break;
      case (2):
        sortableItem = 'salary';
        break;
    }

    const sort = (a, b) => {
      if (a[sortableItem] > b[sortableItem]) {return 1;}
      if (a[sortableItem] === b[sortableItem]) {return 0;}
      if (a[sortableItem] < b[sortableItem]) {return -1;}
    };
    const reverse = (a, b) => {
      if (a[sortableItem] > b[sortableItem]) {return 1;}
      if (a[sortableItem] === b[sortableItem]) {return 0;}
      if (a[sortableItem] < b[sortableItem]) {return -1;}
    };

    if (!desc) {
      this.items.sort(sort);
    } else {
      this.items.reverse(reverse);
    }


    this.el.querySelector('tbody').innerHTML = '';
    this.create(this.items);
  };
}
