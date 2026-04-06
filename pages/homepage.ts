import { expect, type Locator, type Page } from "@playwright/test";

export class Homepage {
    readonly page: Page;
    readonly home_button: Locator;
    readonly categories_filter: Locator;
    readonly button_contact: Locator;
    readonly button_sign_in: Locator;
    readonly button_language: Locator;
    readonly img_banner: Locator;
    readonly text_sort: Locator;
    readonly list_img_products: Locator;
    readonly list_text_productsName: Locator;
    readonly list_text_productPrice: Locator;

    readonly textbox_search: Locator;
    readonly button_reset_search: Locator;
    readonly button_search_submit: Locator;

    readonly checkbox_category: Locator;
    readonly checkbox_label: Locator;

    constructor(page: Page) {
        this.page = page;
        this.home_button = page.locator('a:has-text("Home")');
        this.categories_filter = page.locator('#filters');
        this.button_contact = page.locator('a:has-text("Contact")');
        this.button_sign_in = page.locator('a:has-text("Sign in")');
        this.button_language = page.locator('#language');
        this.img_banner = page.locator('.banner-image');
        this.text_sort = page.locator('#sort');
        this.list_img_products = page.locator('.product-image');
        this.list_text_productsName = page.locator('.product-name');
        this.list_text_productPrice = page.locator('.product-price');

        this.textbox_search = page.locator('#search_query');
        this.button_reset_search = page.locator('#reset_search');
        this.button_search_submit = page.locator('#submit_search');

        this.checkbox_category = page.locator('input[name="category_id"]');
        this.checkbox_label = page.locator('//div[@class="checkbox"]/label');
    }
}