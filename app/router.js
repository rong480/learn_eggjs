'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/cats', controller.cats.index); // 猫出来了
  router.get('/cat-juzi', controller.cats.index2); // 橘子也出来了
  router.get('/cat', controller.cats.huasheng); // 花生也出来了
  // post 通过传参，让两只猫出来

  router.post('/cat', controller.cats.postCats);


};
