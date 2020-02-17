'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">

       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>

      </ul>
    </li>

    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">

       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>

       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>

      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    this.el = element;
    this.el.innerHTML = this.template;
    this.listGroupItems = this.el.querySelectorAll('.list-group-item');
    this.backdrop = document.querySelector('.backdrop');

    for (const it of this.listGroupItems) {
      it.addEventListener('pointerenter', (evt) => {
        evt.target.querySelector('.dropdown-menu').classList.add('show');
        this.backdrop.classList.add('show');
      });
    }

    for (const it of this.listGroupItems) {
      it.addEventListener('pointerleave', (evt) => {
        evt.target.querySelector('.dropdown-menu').classList.remove('show');
        this.backdrop.classList.remove('show');
      });
    }
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;
