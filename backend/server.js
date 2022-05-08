const koa = require('koa');
const koaRouter = require('@koa/router');
const bp = require('koa-bodyparser');
const cors = require('@koa/cors');

const customers = require('./routes/customer.routes');
const products = require('./routes/product.routes');
const traders = require('./routes/trader.routes');
const shoppingcarts = require('./routes/shoppingcart.routes');

const app = new koa();
app.use(cors());
app.use(bp());
const PORT = 8070;


app.use(customers.routes()).use(customers.allowedMethods());
app.use(products.routes()).use(products.allowedMethods());
app.use(traders.routes()).use(traders.allowedMethods());
app.use(shoppingcarts.routes()).use(shoppingcarts.allowedMethods());

app.listen(PORT, () => {
    console.log(`App is listening to PORT ${PORT}`);
})