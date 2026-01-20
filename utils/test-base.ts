import {test as baseTest} from '@playwright/test';


interface TestDataforPlaceOrder {
    useremail: string;
    password: string;
    productName: string;
    country: string;
}

export const customTest = baseTest.extend<{testDataforPlaceOrder:TestDataforPlaceOrder}>(
    {

    testDataforPlaceOrder : {
        useremail: "demo234@test.com",
        password: "Test123456",
        productName: "ZARA COAT 3",
        country: "India"
    
    }
}
)