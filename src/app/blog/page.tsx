import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const posts = [
  { id: 1, title: "第一篇文章", date: "2024-01-01", summary: "這是第一篇文章的摘要。" },
  { id: 2, title: "關於 Next.js App Router", date: "2024-02-15", summary: "介紹 App Router 的基本概念與使用方式。" },
  { id: 3, title: "shadcn/ui 入門指南", date: "2024-03-10", summary: "如何在 Next.js 中整合 shadcn/ui 元件庫。" },
]

export default function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle className="text-lg">{post.title}</CardTitle>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{post.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}