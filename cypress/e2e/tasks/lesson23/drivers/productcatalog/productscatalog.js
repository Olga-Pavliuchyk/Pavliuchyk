export const selectors = {
    stampSale: '.product_image .stamp_sale',
    productImage: '.product_image .image',
    productDescription: '.product_info .product_description [title]',
    commentsCount: '.product_info .comment_count',
    starItems: '.product_info [class="star_item active"]',
    discountPrice: '.discount_price',
    originalPrice: '.original_price', //hasDiscount
    productBrandName: '.product_description .product_brand_name',
    buttonContainer: 'div.button_container.clearfix:nth-child(2)',
    brandId: (id) => {
       return `.products-catalog [data-brand-id="${id}"]`
      },
    
    // buyButton:
    buyButton: '.buy_button',
    favoritesButton: '.favorites_button',
    }
    
    const brands = {
        brelilProfessional:{ 
            brandName:'Brelil Professional',
            brandId:221642
        }
    }
    
    class productsCatalog {
        findProductByBrandName(productBrandName) {
          return cy.get(selectors.productBrandName).contains(productBrandName);
        }
    
        clickOnProduct(productBrandName) {
            this.findProductByBrandName(productBrandName).click();
        }
    
        addProductToCart() { 
            this.findProductByBrandName(brands.brelilProfessional.brandName).realHover();
            cy.get(selectors.brandId(brands.brelilProfessional.brandId)).click();
        }
    
    } module.exports = new productsCatalog();