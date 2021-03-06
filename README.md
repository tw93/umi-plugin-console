# umi-plugin-console

[![NPM version](https://img.shields.io/npm/v/umi-plugin-console.svg?style=flat)](https://npmjs.org/package/umi-plugin-console) [![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-console.svg?style=flat)](https://npmjs.org/package/umi-plugin-console)

用于 umi 打包过程中配置各个钩子 log 输出一些提示性的信息，比较适合写命令行工具时候使用，友好提示用户，具体效果如下：

<img src=https://qpluspicture.oss-cn-beijing.aliyuncs.com/HYwKdx/ScreenFlow.gif width=600>

## Usage

```bash
# or yarn
$ npm install umi-plugin-console -D
```

Configure in `.umirc.js`,

```js
export default {
  console: {
    onPluginReady:
      '插件初始化完成日志输出，在 onStart 之前，此时还没有 config 和 paths，他们尚未解析好',
    onStart: '开始编译日志输出',
    onBuildComplete: '构建完成日志输出，包括失败场景',
    onDevCompileDone: '构建完成日志输出，没有失败场景',
    onExit: '编译退出日志输出，dev 退出时触发',
  },
};
```

## Options

- 参考上述使用说明，更多钩子可见 <https://umijs.org/zh-CN/plugins/api#onstart>

## Develop

```bash
# or yarn
$ npm install
```

```bash
$ npm run build --watch
$ npm run start
```

## LICENSE

MIT
