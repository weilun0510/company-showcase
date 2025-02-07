# 轩晔门户网站

## 开发框架

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 维护开发

```
# 安装依赖
npm i

# 开发
npm run dev

#打包
npm run build

# 启动本地服务
npm run start

# ts类型检查
npm run lint
```

## 机器目录

## 首次部署

1. 除了 node_modules、.next、.git、.gitignore、.vscode，其他都上传
2. npm i
3. npm run build
4. 启动服务 pm2 start npm --name yourName -- run start

## 更新部署

1. 除了 node_modules、.next、.git、.gitignore、.vscode，其他都上传
2. npm i
3. npm run build
4. 重启服务 pm2 restart pmId

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
