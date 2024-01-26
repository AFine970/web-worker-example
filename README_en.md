# Web Worker Example

Web Workers are a sophisticated tool for frontend performance optimization. They leverage the browser's capabilities to execute computation in a separate thread. This mitigates the issue of main thread stuttering caused by extensive data processing, thereby enhancing the user experience.

This repository provides examples of two types of workers:

- Classic Web Worker: A traditional web worker that utilizes `importScripts` to import external dependencies.
- ES Module Worker: A modern web worker that employs `import` to import external dependencies.

> For more detailed information, refer to the official documentation at <https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/Worker#%E8%AF%AD%E6%B3%95>.

## Quick Start Guide

### System Requirements

To ensure smooth setup and execution, please ensure your system meets the following requirements:

```bash
Node.js version 16 or higher
Pnpm version 8 or higher
```

### Setting up Dependencies

To install the required dependencies, simply run the following command:

```bash
pnpm install
```

### Starting the Server

To preview and run the application, execute the following command:

```bash
pnpm preview
```

## Using Docker

If you prefer to use Docker, you can pull the pre-built image from Docker Hub:

```bash
docker pull afine907/classic-web-worker
docker pull afine907/module-web-worker
```

To run the container, use the following command:

```bash
docker run -d -p 3000:3000 afine907/classic-web-worker
docker run -d -p 3100:3000 afine907/module-web-worker
```
