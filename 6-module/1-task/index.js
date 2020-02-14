/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    this.columnTitles = ['Name', 'Age', 'Salary', 'City'];
    this.el.classList.add('pure-table');
    this.el.append(this.createTheadElement(this.columnTitles), this.createTbodyElement(this.columnTitles, this.data));
    this.el.addEventListener('click', (evt) => {
      if (evt.target.tagName !== 'A') {
        return;
      }
      evt.target.closest('tr').remove();
      this.onRemoved(+evt.target.dataset.id);
    });
  }

  createTdTemplate(el) {
    return `<td>${el}</td>`;
  }

  createTableRow(template) {
    let tr = document.createElement('tr');
    tr.innerHTML = template;
    return tr;
  }

  createTheadElement(elements) {
    let thead = document.createElement('thead');
    let rowTemplate = '';

    for (const it of elements) {
      rowTemplate += this.createTdTemplate(it);
    }

    let trElement = this.createTableRow(rowTemplate);
    trElement.append(document.createElement('td'));

    thead.append(trElement);
    return thead;
  }

  createTbodyElement(elements, data) {
    let tbody = document.createElement('tbody');
    let rowTemplate = '';

    for (let el of data) {
      for (let i = 0; i < elements.length; i++) {
        rowTemplate += this.createTdTemplate(el[elements[i].toLowerCase()]);
      }
      rowTemplate += `<td><a href="#delete" data-id="${el.id}">X</a></td>`;
      let trElement = this.createTableRow(rowTemplate);

      tbody.append(trElement);
      rowTemplate = '';
    }

    return tbody;
  }




  /**
   * Метод который выщывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    console.log(`Из таблицы удален пользователь ${id}`);
  }
}

window.ClearedTable = ClearedTable;
