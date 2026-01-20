import {Locator, Page} from '@playwright/test';

export class LoginPage {
    page:Page;
    email:Locator;
    password:Locator;
    signInButton:Locator;

    constructor(page:Page) {

        this.page = page;
        this.email = page.getByPlaceholder("email@example.com");
        this.password = page.getByPlaceholder("enter your passsword");
        this.signInButton = page.getByRole("button", { name: 'Login' });

    }

    async goToURL(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLogin(email:string, password:string) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');

    }

}
module.exports = {LoginPage};

