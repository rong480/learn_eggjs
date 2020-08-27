# learn_egg



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run serve
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

### 目录结构
```bash
egg-project
├── package.json
├── app.js 用于自定义启动时初始化工作 参见 启动自定义
├── agent.js 用于自定义启动时初始化工作 参见 agent机制
├── app
|   ├── router.js 用于配置url路由规则
│   ├── controller 用于解析用户的输入，处理后返回的结果，具体参见 Controller
│   |   └── home.js
│   ├── service 用于编写业务逻辑层 参见 Service
│   |   └── user.js
│   ├── middleware 用于编写中间件 参见 Middleware
│   |   └── response_time.js
│   ├── schedule 用于写定时任务 参见 定时任务
│   |   └── my_task.js
│   ├── public 用于防止静态资源 参见内置插件 egg-static
│   |   └── reset.css
│   ├── view 用于放置模板文件，由模板的插件约定 参见 模板渲染
│   |   └── home.tpl
│   └── extend 用于框架扩展 参见 框架扩展
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config
|   ├── plugin.js 用于配置需要加载的插件 参见 插件
|   ├── config.default.js 用于编写配置文件 参见 配置
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test 用于单元测试 参见 单元测试
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js

```


[egg]: https://eggjs.org
