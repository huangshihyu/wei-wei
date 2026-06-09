import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Hi, 我是 WeiWei 👋</h1>
      <p className="text-muted-foreground text-lg">
        歡迎來到我的個人網站，這裡記錄我的作品與思考。
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>作品集</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">精選專案與開發紀錄。</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>部落格</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">技術文章與生活隨筆。</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}