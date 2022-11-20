class productBlock {
    selectors = {
        firstProductPrice: '.simple-slider-list>li:nth-child(1) .simple-slider-list__price .price_item',
        lastProductPrice: '.simple-slider-list>li:nth-child(36) .simple-slider-list__price .price_item',
        firstProductPopularity: '.simple-slider-list>li:nth-child(1) .info-product-wrapper a:nth-child(2)',
        lastProductPopularity: '.simple-slider-list>li:nth-child(36) .info-product-wrapper a:nth-child(2)',
    };

};
module.exports = new productBlock();
