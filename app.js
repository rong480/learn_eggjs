'use strict'

module.exports = app => {
  app.on('request', ctx => {
    console.log('app on request', ctx)
  });

  app.on('response', ctx => {
    console.log('app on response', ctx)
  });

  app.beforeStart(
    async () => {
      const ctx = app.createAnonymousContext();

      // 初始化延迟任务
      // app.initDelayTask();

      // 初始化注册任务
      // app.registerTaskHandler();
    }
  );

  app.beforeClose(
    async () => {
      // 关闭服务前关闭任务
      // app.closeTaskHandler();
    }
  );
}
