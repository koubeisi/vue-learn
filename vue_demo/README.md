# vue_demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 3.x与2.x的差异
1. 去除了static、config、build，新增public
2. 自动依赖node_modules
3. 默认配置webpack，可通过vue.config.js修改，可通过`vue inspect`查看webpack的默认配置
4. 内置了`vue-cli-service`serve服务
5. 浏览器打开图形界面，`vue ui`查看
