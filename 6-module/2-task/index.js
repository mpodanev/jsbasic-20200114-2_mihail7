'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    this.el = element;
    this.el.innerHTML = this.getCarouselTemplate();
    this.slideContainer = this.el.querySelector('.carousel-inner');
    this.slideContainer.innerHTML = this.getSlideTemplate(this.slides[0]);
    this.slideCurrentIndex = 0;
    this.el.querySelector('.carousel-control-next').addEventListener('click', () => {
      this.nextSlide();
      this.changeActiveBoolet();
    });
    this.el.querySelector('.carousel-control-prev').addEventListener('click', () => {
      this.prevSlide();
      this.changeActiveBoolet();
    });
    this.el.querySelector('.carousel-indicators').addEventListener('click', (evt) => {
      if (evt.target.tagName === 'LI') {
        this.slideContainer.innerHTML = this.getSlideTemplate(this.slides[evt.target.dataset.slideTo]);
        this.slideCurrentIndex = evt.target.dataset.slideTo;
        this.changeActiveBoolet();
      }
    });
    this.changeActiveBoolet();
  }

  changeActiveBoolet() {
    const indicators = this.el.querySelectorAll('.carousel-indicator');
    for (const it of indicators) {
      it.classList.remove('active');
    }

    const nextActiveIndicator = this.el.querySelector(`*[data-slide-to="${this.slideCurrentIndex}"]`);

    nextActiveIndicator.classList.add('active');
  }

  nextSlide() {
    this.slideCurrentIndex++;
    if (this.slideCurrentIndex > this.slides.length - 1) {
      this.slideCurrentIndex = 0;
    }

    this.slideContainer.innerHTML = this.getSlideTemplate(this.slides[this.slideCurrentIndex]);
  }

  prevSlide() {
    this.slideCurrentIndex--;
    if (this.slideCurrentIndex < 0) {
      this.slideCurrentIndex = this.slides.length - 1;
    }

    this.slideContainer.innerHTML = this.getSlideTemplate(this.slides[this.slideCurrentIndex]);
  }

  getCarouselTemplate() {
    return `<div id="mainCarousel" class="main-carousel carousel slide">
          <ol class="carousel-indicators">
              <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
              <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
              <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
          </ol>
          <div class="carousel-inner">
              <!--Вот здесь будет активный слайд-->
          </div>

          <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
          </button>
          <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </button>
      </div>`;
  }

  getSlideTemplate(slide) {
    return `<div class="carousel-item active">
          <img src="${slide.img}" alt="Activelide">
          <div class="container">
              <div class="carousel-caption">
                  <h3 class="h1">${slide.title}</h3>
                  <div>
                      <a class="btn" href="#" role="button">
                          View all DEALS
                          <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                      </a>
                  </div>
              </div>
          </div>
      </div>`;
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
