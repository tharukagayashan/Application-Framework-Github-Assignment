const Router = require('@koa/router');

const router = new Router({
    prefix: "/product"

})

var products = [];

router.get('/', async (ctx) => {
    ctx.body = products
})

router.get('/:productcode', async (ctx) => {
    
    let input = ctx.request.query;
    const index = products.findIndex((e) => e.productcode === input.productcode);
    
    ctx.body = products[index];

})

router.post('/add', async (ctx) => {
    var newProduct = ctx.request.body;
    products.push(newProduct);
    ctx.body = "Item inserted";
})


router.put('/update', async (ctx) => {
    let input = ctx.request.body;
    const index = products.findIndex((e) => e.id === input.id);
    if (index === -1) {
        products.push(input);
        ctx.body = "Item added";
    }
    else {
        products[index] = input;
        ctx.body = "Item Updated";
    }
})

router.delete('/delete/:productcode', async (ctx) => {
    let input = ctx.request.query;
    const index = products.findIndex((e) => e.id === input.id);
    if (index === -1) {
        ctx.body = "Product not found";
    }
    else {
        products.pop(index);
        ctx.body = "Product deleted";
    }
})

module.exports = router;