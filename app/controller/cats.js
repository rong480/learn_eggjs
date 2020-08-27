'use strict';



const Controller = require('egg').Controller;

class CatsController extends Controller {


  async index() {
    this.ctx.body = '我的小猫咪';
  }

  async index2() {
    this.ctx.body = '我的小橘子';
  }

  async huasheng() {
    if(this.ctx.query.name === 'huasheng') {
      this.ctx.body = '我的大花生'
    } else {
      this.ctx.body = this.ctx.query.name || '' + "不是我的猫"
    }
  }

  async postCats() {
    const {ctx} = this;
    const req = ctx.request.body;
    console.log('ctx.body',ctx.request, ctx.request.body);


    ctx.body = '成功 领了只' + (req.catName || '名字') + '，年龄' + req.catAge || 1;
    ctx.status = 200;
  }
}

module.exports = CatsController;
