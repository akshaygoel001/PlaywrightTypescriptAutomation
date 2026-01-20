
export class APIUtils{

    apiContext : any;
    loginPayload: any;


    constructor(apiContext:any, loginPayload:any){
        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
    }

    async getToken(){

        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: this.loginPayload
        })
        const logingResponseJson = await loginResponse.json();
        const token = logingResponseJson.token;
        console.log(token);
        return token;



    }

    async createOrder(createOrderPayload:any){
        //Create Order API
        let response = {token:String,orderId:String};
        response.token = await this.getToken();

        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
        data: createOrderPayload,
        headers: {
                'Authorization': response.token,
                 'Content-Type' : 'application/json'
            },
        })
        const orderResponseJSON = await orderResponse.json();
        console.log(orderResponseJSON)
        const orderId = orderResponseJSON.orders[0];
        console.log(orderId);
        response.orderId = orderId;
        return response;
    }
    
}
module.exports = {APIUtils};
