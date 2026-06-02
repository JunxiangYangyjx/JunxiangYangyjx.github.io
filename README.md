# Webside-YJX

个人学术、项目与生活展示网站。技术栈为 Astro + Tailwind CSS + data files，部署目标为 GitHub Pages。

## 内容维护

- 个人介绍、联系方式、CV 路径：`src/data/profile.ts`
- 教育经历、实验室信息、奖项、联系方式：`src/data/profile.ts`
- 研究项目、论文、会议、研究图片：`src/data/research.ts`
- 生活栏目：`src/data/life.ts`
- CV 文件：替换 `public/files/cv.pdf`
- 头像：替换 `public/images/profile.jpg`
- 研究图片：放入 `public/images/research/`

## 本地命令

| Command | Action |
| :-- | :-- |
| `npm install` | 安装依赖 |
| `npm run dev` | 启动本地开发服务器 |
| `npm run build` | 构建生产版本到 `dist/` |
| `npm run preview` | 本地预览构建结果 |

## 双语策略

网站默认中文。Study & Research 页面组提供局部 `CN/EN` 切换，My Life 保持中文。Home 作为轻量入口页，不放长篇学术介绍。

## GitHub Pages

`.github/workflows/deploy.yml` 已配置 GitHub Pages 自动部署。推送到 `main` 分支后，GitHub Actions 会安装依赖、构建并发布 `dist/`。

首选部署仓库为 GitHub User Pages：

- Repository: `JunxiangYangyjx/JunxiangYangyjx.github.io`
- Public URL: `https://JunxiangYangyjx.github.io/`
