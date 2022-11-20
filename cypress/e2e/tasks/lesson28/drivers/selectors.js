export default {

    menu_selectors: {
            menuList: '.menu-list .menu-list__item'
        },
        
    sort_form_selectors: {
    byName: 'label[for="input-sort-0"]',
    byPrice: 'label[for="input-sort-1"]',
    byFavor: 'label[for="input-sort-2"]',
    byDate: 'label[for="input-sort-3"]',
    byArrowUp: 'label[for="input-sort-up"]',
    byArrowDown: 'label[for="input-sort-down"]',
    },  
        
    catalog_selectors: {
        catalogFilterName: '.catalog-filter-name',
    },
    catalog_item_selectors:  {
        productPrice: '.simple-slider-list__price .price_item',
        itemProduct: '[class="simple-slider-list"]>li>div:nth-child(2) div'
    
      }
    }