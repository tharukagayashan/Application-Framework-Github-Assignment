const Router = require('@koa/router');
const jwt = require("jsonwebtoken");

const router = new Router({
    prefix: "/customer"

})

var customer = [];

router.get('/', async (ctx) => {
    ctx.body = customer;
})

router.post('/signup', async (ctx) => {
    var newCustomer = ctx.request.body;
    customer.push(newCustomer);
    ctx.body = "Customer registered successfully";
});


router.put('/update', async (ctx) => {
    let input = ctx.request.body;
    const arrayIndex = customer.findIndex((e) => e.id === input.id);
    let message;
    if (arrayIndex === -1) {
        customer.push(uinput);
        ctx.body = "Customer registered successfully";
    }
    else {
        customer[arrayIndex] = input;
        ctx.body = "Customer updated successfully";
    }
})

router.delete('/delete', async (ctx) => {
    let input = ctx.request.body;
    const arrayIndex = customer.findIndex((e) => e.id === input.id);
    let message;
    if (arrayIndex === -1) {
        ctx.body = "Customer data not found";
    }
    else {
        customer.pop(arrayIndex);
        ctx.body = "Customer deleted successfully";
    }
    ctx.body = message;
})

router.post('/login', async (ctx) => {
    let CustomerLoginData = ctx.request.body;

    const loginCheck = (arr, key, val) => {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][key] === val) return true;
        }
        return false;
    }

    if (loginCheck(customer, "email", CustomerLoginData.email) && loginCheck(customer, "password", CustomerLoginData.password)) {
        var email = CustomerLoginData.email;
        ctx.body = jwt.sign({ email: email }, "jwtsecret");
    }
    else {
        ctx.body = "Login validation failed";
    }

})

module.exports = router;