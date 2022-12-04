export default {

    toolbarSelectors: {
        whatsNewButton: '[class*="nav-1"]',
        Women: '[class*="nav-2 category-item"]',
        WomenTops: '[class*="nav-2-1"] li',
        WomenBottoms: '[class*="nav-2-2"] li',
        Men: '[class*="nav-3 category-item"]',
        MenTops: '[class*="nav-3-1"] li',
        MenBottoms: '[class*="nav-3-2"] li',
        Gear: '[class*="nav-4"]',
        Training: '[class*="nav-5"]',
        Sale: '[class*="nav-6"]'
        },
        
    sortingSelectors: {
        selectSorting: '#sorter', //eq.0 использовать 
        sortingByPosition: '[value="position"]',
        sortingByName: '[value="name"]',
        sortingByPrice: '[value="price"]',
        directionOfSortingSwitcher: '[data-role="direction-switcher"]'
    },  
        
    catalogPageSelectors: {
        categories: '[class="categories-menu"] li',
        productPrice: '[id*="product-price"]',       
        productName: '.product-item-link',
        productBlock: '[class~="product-item-details"]',
        productColor: '[attribute-code="color"]',
        productColorSelected: '[class="swatch-option color selected"]',
        productPosition: '[data-role="priceBox"]', //для получения id товара в БД 
        productSize: '[aria-label="Size"]',
        prodSizeSelected: '[class="swatch-option text selected"]',
        amountOfSelectedItems: '.toolbar-number' //для получения кол-ва товаров после применения фильтра
    },

    filterSelectors: {

        filterName: '[class="filter-options-title"]', //'[class*=filter-options-item] '  size eq.1, price eq.2, color eq.3, material eq.4
        filterContent: '[class="filter-options-content"]',
        filterContentLink: '[class="filter-options-content"] a',
        selectedCurrentFilter: '.filter-value',
        uncoveredListOfFilters: '.filter-options-content[aria-hidden="false"]',
        uncoveredListOfFiltersForSize:'[class="swatch-attribute-options clearfix"] a[href*="size"]',
        uncoveredListOfFiltersForColor: '[class="swatch-attribute-options clearfix"] a[href*="color"]',
        xpathForColor: '//*[@id="narrow-by-list"]/div[3]/div[1]',
        xpathForColorLinks: '//*[@id="narrow-by-list"]/div[3]/div[2]',
        filterPrice10to20: '[href*="price=10-20"]',
        filterPrice20to30: '[href*="price=20-30"]',
        filterPrice30plus: '[href*="price=30-"]',
        filterPrice40plus: '[href*="price=40-"]',
        filterPrice50plus: '[href*="price=50-"]',
        filterPrice60plus: '[href*="price=60-"]',
        filterPrice70plus: '[href*="price=70-"]',
        filterPrice80plus: '[href*="price=80-"]',
        filterPrice90plus: '[href*="price=90-"]',

        blackColor: '.filter-options-content [option-id="49"]',
        blueColor: '.filter-options-content [option-id="50"]',
        brownColor: '.filter-options-content [option-id="51"]',
        grayColor: '.filter-options-content [option-id="52"]',
        greenColor: '.filter-options-content [option-id="53"]',
        orangeColor: '.filter-options-content [option-id="56"]',
        purpleColor: '.filter-options-content [option-id="57"]',
        redColor: '.filter-options-content [option-id="58"]',
        whiteColor: '.filter-options-content [option-id="59"]',
        yellowColor: '.filter-options-content [option-id="60"]',

        selectedColorOnProduct: '[class="swatch-attribute color"]',
        
        colorID: (id) => {
            return `.filter-options-content [option-id="${id}"]`
            //return `.filter-options-content [option-id="${id}"]`
           },
           
        sizeXS: 'a[aria-label="XS"]',
        sizeS: 'a[aria-label="S"]',
        sizeM: 'a[aria-label="M"]',
        sizeL: 'a[aria-label="L"]',
        sizeXL: 'a[aria-label="XL"]',
        size28: 'a[aria-label="28"]',
        size29: 'a[aria-label="29"]',
        size30: 'a[aria-label="30"]',
        size31: 'a[aria-label="31"]',
        size32: 'a[aria-label="32"]',
        size33: 'a[aria-label="33"]',
        size34: 'a[aria-label="34"]',
        size36: 'a[aria-label="36"]',

        
        materialCotton: '[href*="material=33"]',
        materialMesh: '[href*="material=36"]',
        materialNylon: '[href*="material=37"]',   
        materialPolyester: '[href*="material=38"]',
        materialRayon: '[href*="material=39"]',
        materialCocona: '[href*="material=142"]',
        materialFleece: '[href*="material=144"]',
        materialHemp: '[href*="material=145"]',
        materialJersey: '[href*="material=146"]',
        materialLumatech: '[href*="material=147"]',
        materialLycra: '[href*="material=148"]',
        materialMicrofiber: '[href*="material=149"]',
        materialSpandex: '[href*="material=150"]',
        materialHeattec: '[href*="material=151"]',
        materialEvercool: '[href*="material=152"]',
        materialOrganicCotton: '[href*="material=153"]',
        materialTencel: '[href*="material=154"]',
        materialCooltech: '[href*="material=155"]',
        materialLinen: '[href*="material=157"]',
        materialWool: '[href*="material=158"]',
    }    
    }