import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [require.resolve('../lib')],
  console: {
    onPluginReady: '\n 插件初始化完成日志输出，在 onStart 之前，此时还没有 config 和 paths，他们尚未解析好',
    onStart: '\n 开始编译日志输出',
    onBuildComplete: '\n 构建完成日志输出，包括失败场景',
    onDevCompileDone: '\n 构建完成日志输出，没有失败场景',
    onExit: '\n 编译退出日志输出，dev 退出时触发',
  },
});
