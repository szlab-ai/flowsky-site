# FlowSky for Bluesky

FlowSky 的产品网站，复用 SZLab 的 Porthole / PageTOC 模板：Astro + Tailwind v4，GitHub Actions → GitHub Pages。

- 网站：https://szlab-ai.github.io/flowsky-site/
- 本地仓库：`/Users/sz/Code/flowsky-site`
- 公开联系邮箱：**szlab.ai@outlook.com**（与现有两个产品网站一致）

## 页面

| 内容 | English | 简体中文 | 日本語 |
| --- | --- | --- | --- |
| 首页 | `/en/` | `/zh/` | `/ja/` |
| 支持 | `/en/support/` | `/zh/support/` | `/ja/support/` |
| 隐私政策 | `/en/privacy/` | `/zh/privacy/` | `/ja/privacy/` |
| 使用条款 | `/en/terms/` | `/zh/terms/` | `/ja/terms/` |

所有路径的前缀为 `/flowsky-site/`，根页面跳转至英文首页。支持页面内的语言切换会保持当前页面类型。

## 开发与发布

Node.js 22.12 或更新版本。

```sh
npm ci
npm run dev
npm run build
npm run preview
```

推送 `main` 自动触发 `.github/workflows/deploy.yml`，构建后发布到 GitHub Pages。GitHub 仓库 Settings → Pages 的 Source 选择 GitHub Actions。

## 内容来源与更新

- 公共模板：`../porthole-site` 与 `../pagetoc-site`，不复制它们的产品截图、商店链接或分析配置。
- 应用图标：`../BlueSkyTV/BlueSkyTV/Resources/Assets.xcassets/App Mark.imageset/app-mark@2x.png`，直接使用现有资源。
- 主要文案：`src/i18n/ui.ts`。目前应用 UI 是英语、简体中文，日文网站不代表应用已支持日语。
- 隐私、支持、条款：`src/lib/legal.ts`，按 BlueSkyTV 的 OAuth、Keychain、StoreKit 和中继实现整理；数据处理改变时同步更新。
- 官网托管：GitHub Pages；登录中继仍是 Cloudflare Worker。网站不启用分析 Beacon 或广告。
- 应用尚未上架：保留“即将上架”状态，不添加失效 App Store 下载按钮，不发布虚构的评分、发布日期或下载数据。
- 正式应用截图尚待准备，当前不展示其他产品截图或重绘应用界面。取得实际截图后可按 Porthole 的 Screenshots 组件接入。
- 正式付费版本发布前必须完成并验证浏览额度和互动权益，再同步首页与商品文案。

## 上架链接

App Store Connect 的英文营销、支持和隐私链接分别为：

- https://szlab-ai.github.io/flowsky-site/en/
- https://szlab-ai.github.io/flowsky-site/en/support/
- https://szlab-ai.github.io/flowsky-site/en/privacy/

应用内条款使用 https://szlab-ai.github.io/flowsky-site/en/terms/ 。
