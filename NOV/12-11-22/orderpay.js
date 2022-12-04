const upiVerifacation = require("./upiVerification");
function placeOrder(){
    console.log("placeing order...");
}
// function  validatePaymentSystem(){
//   upiVerifacation.verify("xyz@kicici",deductMoney);

// }

function validatePaymentSystem(){
    const promise = upiVerifacation.verifyPromise("xyz@okicici");
    promise.then(
        //wii be called (by Js internally)when promise is resolved.
        ()=>{
            deductMoney();
        },
        //will be called when promise is rejected
        ()=>{}
    );
}

function deductMoney(amoun,err){
    if(err){
        console.log("Error message received");
        console.log(err);
    }else{
        console.log("Deducting money");
    }
}

placeOrder();
//assigned to nodejs
validatePaymentSystem();
//MT
//deductMoney();

//1.callback.
    //problems.
        //1.No proper error handling technique.
        //2.loss of control over code.
