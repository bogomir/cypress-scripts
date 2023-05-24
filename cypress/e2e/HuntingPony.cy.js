describe('Оформление заказа', function () {

    it('Оформление заказа - Добавить две вещи в корзину', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('#splide02-slide01 > .product-preview > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.wait(5000);
        cy.get('.add-cart-counter__btn-label').click();
        cy.get('.header__cart').click();
        cy.get('.is-count-up').click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа');
    });
})