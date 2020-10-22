const Koa = require('koa')
const app = new Koa()

app.use( async(ctx) => {
    ctx.body = "hello world"
})
app.listen(3000)
console.log("koa2 in run")