/*
 * @Description: 
 * @Author: Daito Chai
 * @Date: 2021-07-10 11:36:43
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-07-10 13:57:56
 */
const router = require('koa-router')()

const GETDATA = require('../controllers/demo')

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.get('/getData', GETDATA.getData)

module.exports = router
