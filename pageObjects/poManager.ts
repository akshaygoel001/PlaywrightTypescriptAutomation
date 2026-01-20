import {LoginPage} from './loginPage';
import {DashboardPage} from './dashboardPage';
import {CartPage} from './cartPage';
import {OrderHistoryPage} from './orderHistoryPage';
import {OrderReviewPage} from './orderReviewPage';
import {Page} from '@playwright/test';

export class POManager{
    page:Page;
    loginPage:LoginPage;
    dashboardPage:DashboardPage;
    cartPage:CartPage;
    orderHistoryPage:OrderHistoryPage;
    orderReviewPage:OrderReviewPage;

    constructor(page:Page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.orderHistoryPage = new OrderHistoryPage(this.page);
        this.orderReviewPage = new OrderReviewPage(this.page);
    }
    getLoginPage(){
        return this.loginPage;
    }
    getDashboardPage(){
        return this.dashboardPage;
    }
    getCartPage(){
        return this.cartPage;
    }
    getOrderHistoryPage(){
        return this.orderHistoryPage;
    }
    getOrderReviewPage(){
        return this.orderReviewPage;
    }


}
module.exports = {POManager};