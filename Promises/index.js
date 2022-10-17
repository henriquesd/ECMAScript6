// Promises are usually used on network requests, such as trying to fetch some data from an API,
// or they could be used for example in some async function you are trying to run;

const buyFlightTicket = () => {
// There are three possible outcomes:
// 1. promise is going to be pending (cause you still don't know if the result was successful  or not)
// 2. it was successful , the promise was fulfilled
// 3. promise has been rejected

    return new Promise( (resolve, reject) => {
        // if everything goes well with the request function, we run the resolve;
        // if there is some errors, run the reject function;

        // setTimeout function is used here to simulate a delay of the request;
        setTimeout( () => {
            const error = false;
            // const error = true;

            if( error ) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }

        }, 300)
    })
}

buyFlightTicket()
// "then" will be executed when buyFlightTicket succeeds;
// the "success" variable contains the value of the resolve;
// this parameter "success" is going to represent whatever is inside of the "resolve" (line 21);
.then( (success) => console.log(success))
// "catch" will be executed when there is some error;
// "error" is going to represent whatever is inside the "reject" function (line 19);
.catch( (error) => console.log(error) );