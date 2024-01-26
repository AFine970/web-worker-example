# web-worker-example

Web Worker 是前端性能优化的重要工具，它基于浏览器的多线程能力，通过在单独的线程中执行计算任务，避免主线程因大量数据计算而卡顿，从而提升用户体验。

本仓库提供了两种类型的 Worker 示例：

- Classic Web Worker：这是传统的 Web Worker，通过 `importScripts` 方法导入外部依赖。
- Module Web Worker：这是现代的 Web Worker，使用 ES6 的 `import` 语法来导入外部依赖。

更多详细信息，请参阅 Mozilla 开发者网络（MDN）的官方文档。

## 快速上手

### 环境要求

您需要确保您的环境满足以下要求：

- Node.js 版本不低于 16
- Pnpm 版本不低于 8

### 依赖安装

在项目根目录下，运行以下命令来安装项目依赖：

```bash
pnpm install
```

### 服务启动

要启动开发服务器，请运行以下命令：

```bash
pnpm preview
```

## Docker 使用说明

您可以使用 Docker 来快速部署和运行本示例：

```bash
# pull classic-web-worker image
docker pull afine907/classic-web-worker
# run container
docker run -d -p 3000:3000 afine907/classic-web-worker

# pull classic-web-worker image
docker pull afine907/module-web-worker
# run container
docker run -d -p 3100:3000 afine907/module-web-worker
```
