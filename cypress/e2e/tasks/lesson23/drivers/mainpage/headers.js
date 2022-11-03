export const headerSelectors  = {
    // top_block_left
    region: '.change_region',
    contacts: '.top_block_left .nav_link[href*= "contacts"]',
    delivery: '.top_block_left .nav_link[href*= "delivery"]',

    //top_block_right
    localeUA: '.top_block_right [data-locale="ua"]',
    localeRU: '.top_block_right [data-locale="ru"]',

    //middle_block
    logoImage: '.middle_block .logo_image',
    search: 'form[class="search_form"] input',

    //buttons_block
    login: '#profile_desktop button',
    favorites: '.js-favorites_desktop',
    cart: '.middle_block #cart',

    //menu-list
    categoryParfums: '.menu_item_first a:nth-child(1)[href="/category/parfums"]',
    catagoryMakeup: '.menu_item_first a:nth-child(1)[href="category/makeup"]',
    categoryHairCosmetics: '.menu_item_first a:nth-child(1)[href="/category/hair-cosmetics"]',

    //submenuParfums
    ladyParfums: '.menu_list_second a:nth-child(1)[href="/category/lady"]',
    manParfums: '.menu_list_second a:nth-child(1)[href="/category/man"]',

    //submenuMakeup
    cosmeticsForFace: '.menu_list_second a:nth-child(1)[href="/category/cosmetics-for-face"]',
    bbKrem: '.menu_list_second a:nth-child(1)[href="/category/bb_krem"]',

    //submenuHairCosmetics   
    accessories: '.menu_list_second a:nth-child(1)[href="/category/cosmetics-accessories"]',
    styling: '.menu_list_second a:nth-child(1)[href="/category/styling"]',

    //bottom_block
    sale: '.desktop_header [class="nav_link sale"]',
    promo: '.desktop_header [class="nav_link stock"]',

    //navigation_block
    backButton: '.navigation_block [class*="go_back_btn"]',
    mainPage: '.breadcrumbs_block [href="https://parfums.ua/"]',

}
class headers {
    
    navigateToSale() {
        cy.get(headerSelectors.sale).click();
        cy.location('pathname', {timeout: 4000}).should('include', '/markdowned');
    }
    navigateToPromo() {
        cy.get(headerSelectors.promo).click();
        cy.location('pathname', {timeout: 4000}).should('include', '/promo');
    }

    navigateToCart() {
        cy.get(headerSelectors.cart).click();
        cy.location('pathname', {timeout: 4000}).should('include', '/cart/consistence');
    }



} module.exports = new headers();