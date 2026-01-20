//const { expect } = require("@playwright/test");
import {expect,Locator, Page} from '@playwright/test';


export class CartPage {

    page:Page;
    checkoutBtn:Locator;
    selectCountry:Locator;
    placeOrderBtn:Locator;
    country:Locator;


    constructor(page:Page) {
        this.page = page;
        this.checkoutBtn = page.getByRole("button", { name: "Checkout" });
        this.selectCountry = page.getByPlaceholder("Select Country");
        this.placeOrderBtn = page.getByText("PLACE ORDER");
        this.country = page.locator("section.ta-results");

    }

    async verifyProductisDisplayed(productName:string) {
        expect(await this.page.getByText(productName).isVisible()).toBeTruthy();

    }

    async checkout() {
        await this.checkoutBtn.click();

    }

    async selectCountryOption(country:string, email:string) {

        await this.selectCountry.pressSequentially(country.substring(0,3).toLocaleLowerCase(), { delay: 150 });
        await this.country.filter({hasText:country}).click();
        expect(await this.page.getByLabel(email).isVisible());
    }

    async placeOrder() {
        await this.placeOrderBtn.click();
    }


}
module.exports = { CartPage };