const Router = require('@koa/router');

const router = new Router({
    prefix: "/trader"

})

var trader = [];

router.get('/', async (ctx) => {
    ctx.body = trader
})

router.post('/signup', async (ctx) => {
    var trader = ctx.request.body;
    trader.push(trader);
    ctx.body = "Trader inserted successfully";
})


router.put('/update', async (ctx) => {
    let input = ctx.request.body;
    const arrayIndex = trader.findIndex((e) => e.id === input.id);
 
    if (arrayIndex === -1) {
        trader.push(input);
        ctx.body = "Trader added";
    }
    else {
        trader[arrayIndex] = input;
        ctx.body = "Trader Updated";
    }
})

router.delete('/delete', async (ctx) => {
    let input = ctx.request.body;
    const arrayIndex = trader.findIndex((e) => e.id === input.id);

    if (arrayIndex === -1) {
        ctx.body = "Trader not found";
    }
    else {
        delete trader[arrayIndex];
        ctx.body = "Trader deleted successfully";
    }
})

module.exports = router;