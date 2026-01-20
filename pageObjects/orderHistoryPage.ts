import {expect,Locator, Page} from '@playwright/test';


export class OrderHistoryPage {
    page:Page;
    orderPlaceSuccessMessage:Locator;
    orderId:Locator;


    constructor(page:Page) {
        this.page = page;
        this.orderPlaceSuccessMessage = page.getByText("THANKYOU FOR THE ORDER.");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");


    }

    async verifyOrderPlacedSuccessText() {
        await expect(this.orderPlaceSuccessMessage).toBeVisible();

    }
    async getOrderId() {
        let orderIdtext:any = await this.orderId.textContent();
        return orderIdtext.split("|")[1].trim();

    }

}

module.exports = {OrderHistoryPage};