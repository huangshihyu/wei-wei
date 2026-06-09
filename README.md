# MyPortfolio

個人作品集與部落格網站，包含首頁、部落格列表與互動式試算表頁面。

---

## 技術棧

| 技術 | 版本 | 說明 |
|------|------|------|
| [Next.js](https://nextjs.org/) | 14+ | React 框架，使用 App Router |
| [TypeScript](https://www.typescriptlang.org/) | 5+ | 型別安全 |
| [Tailwind CSS](https://tailwindcss.com/) | 3+ | Utility-first CSS |
| [shadcn/ui](https://ui.shadcn.com/) | latest | UI 元件庫 |
| [pnpm](https://pnpm.io/) | 8+ | 套件管理器 |

---

## 專案結構

```
src/
├── app/
│   ├── layout.tsx              # 根 layout（含 Navbar / Sidebar / Footer）
│   ├── page.tsx                # 首頁
│   ├── blog/
│   │   └── page.tsx            # 部落格列表頁
│   └── spreadsheet/
│       └── page.tsx            # 試算表頁
├── components/
│   ├── layout/
│   │   ├── navbar.tsx          # 頂部導覽列
│   │   ├── sidebar.tsx         # 側邊欄
│   │   └── footer.tsx          # 頁尾
│   └── ui/                     # shadcn/ui 自動生成元件
└── lib/
    └── utils.ts                # 工具函式（cn）
```

---

## 頁面說明

| 路徑 | 頁面 | 說明 |
|------|------|------|
| `/` | Home | 個人介紹與作品集入口 |
| `/blog` | Blog | 文章列表頁 |
| `/spreadsheet` | 試算表 | 使用者可輸入數值即時計算合計 |

---

## 安裝與啟動

### 環境需求

- Node.js 18+
- pnpm 8+

### 安裝步驟

```bash
# 1. Clone 專案
git clone https://github.com/你的帳號/my-portfolio.git
cd my-portfolio

# 2. 安裝相依套件
pnpm install

# 3. 啟動開發伺服器
pnpm dev
```

開啟瀏覽器前往 [http://localhost:3000](http://localhost:3000)

### 常用指令

```bash
pnpm dev        # 開發模式
pnpm build      # 正式打包
pnpm start      # 啟動 production server
pnpm lint       # 執行 ESLint
```

---

## 部署方式

本專案使用 `standalone` 模式輸出，適合自架 Node server。

### Build

```bash
pnpm build
```

