
let baseUrl;
if ( process.env.NODE_ENV == 'production' ){
    baseUrl = "http://cs.nongchangyun.cn/farmeasy-api-gateway/farmeasy-auth-service";
}else{
    baseUrl = '/apis';
}
export {
    baseUrl
}

