class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;
    this.productsList = [];
    this.el.addEventListener('click', (evt) => {
      if (evt.target.hasAttribute('data-button-role')) {
        if (confirm('Вы уверенны, что хотите добавить этот товар в корзину?')) {
          let productID = evt.target.closest('.products-list-product').getAttribute('data-product-id');
          let currentProduct = this.productsList.filter(it => it.id === +productID)[0];
          if (!localStorage.getItem(this.productsStoreKey)) {
            let productsForStorageJSON = JSON.stringify(new Array(currentProduct));
            localStorage.setItem(this.productsStoreKey, productsForStorageJSON);
          } else if (this.checkIsProductAddedToCart(currentProduct)) {
            console.info('The product already in basket', productID);
          } else {
            let productsFromStorageJSON = localStorage.getItem('cart-products');
            let productsFromStorage = JSON.parse(productsFromStorageJSON);
            productsFromStorage.push(currentProduct);

            let productsForStorageJSON = JSON.stringify(productsFromStorage);
            localStorage.setItem(this.productsStoreKey, productsForStorageJSON);
          }
        }
      }
    });
  }

  checkIsProductAddedToCart(product) {
    let productsFromStorageJSON = localStorage.getItem('cart-products');
    let productsFromStorage = JSON.parse(productsFromStorageJSON);

    return !!productsFromStorage && productsFromStorage.some((productsFromStorage) => {
      return productsFromStorage.id === product.id;
    });
  }

  show() {
    return fetch(this.productsUrl)
    .then(response => response.json())
    .then(json => {
      let productsListTemplate = '';
      this.productsList = json;
      for (const it of json) {
        productsListTemplate += this.getProductTemplate(it);
      }
      this.el.innerHTML = this.getContainerTemplate(productsListTemplate);
    });
  }

  getProductTemplate({id, title, imageUrl, rating, price, oldPrice}) {
    return `<div data-product-id="${id}" class="products-list-product col-md-6 col-lg-4 mb-4">
      <div class="card">
        <div class="card-img-wrap">
          <img class="card-img-top" src="${imageUrl}" alt="Card image cap">
        </div>
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          ${rating ? this.getRateTemplate(rating) : ''}
          <p class="card-text price-text ${oldPrice ? 'discount' : ''}"><strong>${price}</strong>
          <small class="ml-2">${oldPrice ? oldPrice : ''}</small></p>

          <button class="product-add-to-cart" data-button-role="add-to-cart">
            Add to cart
          </button>
        </div>
      </div>
    </div>`;
  }

  getRateTemplate({stars, reviewsAmount}) {
    let starsTemplate = '';
    for (let i = 1; i <= 5; i++) {
      starsTemplate += `<i class="icon-star ${stars >= i ? 'checked' : ''}"></i>`;
    }
    return `<div class="rate">
      ${starsTemplate}
      <span class="rate-amount ml-2">${reviewsAmount}</span>
    </div>`;
  }

  getContainerTemplate(products) {
    return `<div class="row justify-content-end">
      <div class="col-lg-9">
        <h3 class="section-title">Top Recommendations for You</h3>
        <div class="row homepage-cards">
          <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
          ${products}
        </div>
      </div>
    </div>`;
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
