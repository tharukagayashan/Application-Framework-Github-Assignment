const Router = require('@koa/router');

const router = new Router({
    prefix:"/shoppingcart"
});

let cart = [];

router.post("/add",async (ctx)=>{
    let cartItems = ctx.request.body;
    cart.push(cartItems);
    ctx.body = "Added to cart";
})

router.get("/",async (ctx)=>{
    ctx.body = cart;
})


module.exports = router;