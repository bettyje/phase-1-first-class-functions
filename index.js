function receivesAFunction(callback) {
    callback();
    
}
function myCallBack() {
    console.log("Calling mycallback!");
    
}
receivesAfunction(myCallBack);

function returnsANamedFunction() {
    function functionName(){
        console.log("I am a function!");
    }
    return functionName;
    
}
 function returnsAnAnonymousFunction(){
    return function(){
    console.log("I am an anonymos function!")
    };
 }
