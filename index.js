// Import the interface to Tessel hardware
var tessel = require('tessel');
const Koa = require('koa');
const app = new Koa();
const route = require('koa-route')
app.use(route.get('/', function*(ctx) {
  this.type = 'html';
  this.body = 'Hello Rick';
}));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server listening on', port));
