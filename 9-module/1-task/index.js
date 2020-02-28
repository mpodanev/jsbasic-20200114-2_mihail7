'use strict';

class CheckoutProductList {
  productsStoreKey = 'cart-products';

  constructor(parentElement) {
    this.el = parentElement;
    this.productsFromStorageJSON = localStorage.getItem('cart-products');
    this.productsFromStorage = JSON.parse(this.productsFromStorageJSON);
    this.el.innerHTML = this.getContainerTemplate(this.productsFromStorage);
    this.el.addEventListener('click', (evt) => {
      if (evt.target.hasAttribute('data-button-role')) {
        if (confirm('Вы уверенны, что хотите удалить этот товар из корзины?')) {
          const productCart = evt.target.closest('[data-product-id]');
          const productID = +productCart.dataset.productId;
          const currentIndex = this.findIndex(productID);
          productCart.remove();
          this.productsFromStorage.splice(currentIndex, 1);
          let productsForStorageJSON = JSON.stringify(this.productsFromStorage);
          localStorage.setItem(this.productsStoreKey, productsForStorageJSON);
        }
      }
    });
  }

  findIndex(id) {
    for (let i = 0; i < this.productsFromStorage.length; i++) {
      if (this.productsFromStorage[i].id === id) {
        return i;
      }
    }
  }

  getContainerTemplate(products) {
    let productsList = '';
    for (let el of products) {
      productsList += this.getProductTemplate(el);
    }
    return `<div class="product-list-box">
        ${productsList}
    </div>`;
  }

  getProductTemplate({id, title, imageUrl, rating, price}) {
    return `<div data-product-id="${id}" class="product-wrapper box-inner-col description-col">

        <div class="product-image-container">
          <img class="product-image" src="${imageUrl}" alt="img">
        </div>

        <div class="product-description">
          <h4 class="col-title mb-2">${title}</h4>
          ${rating ? this.getRateTemplate(rating) : ''}
        </div>

        <div class="product-price">
          <p class="mb-0 font-weight-light">Price:</p>
          <h4 class="col-title price-text mb-2">${price}</h4>
        </div>

        <div class="product-remove-button-wrapper">
          <button type="button"
                  data-button-role="checkout-remove-product"
                  class="product-remove-button">
            X
          </button>
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
      </div>
      <p class="rate-amount d-none d-md-block mt-1">${reviewsAmount} reviews</p>`;
  }
}

window.CheckoutProductList = CheckoutProductList;
