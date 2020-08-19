import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [require.resolve('../lib')],
  console: {
    onPluginReady: '\n⛷  插件初始化完成日志输出 >>>\n',
    onStart: '\n⛷  开始编译日志输出 >>>\n',
    onBuildComplete: '\n⛷  构建完成日志输出，包括失败场景 >>>\n',
    onDevCompileDone: '\n⛷  构建完成日志输出，没有失败场景 >>>\n',
    onExit: '\n⛷  编译退出日志输出，dev 退出时触发 >>>\n',
  },
});
