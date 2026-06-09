"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SpreadsheetPage() {
  const [rows, setRows] = useState([
    { label: "項目 A", value: "" },
    { label: "項目 B", value: "" },
    { label: "項目 C", value: "" },
  ])

  const total = rows.reduce((sum, row) => sum + (parseFloat(row.value) || 0), 0)

  const updateValue = (index: number, value: string) => {
    setRows((prev) =>
      prev.map((row, i) => (i === index ? { ...row, value } : row))
    )
  }

  const addRow = () => {
    setRows((prev) => [...prev, { label: `項目 ${String.fromCharCode(65 + prev.length)}`, value: "" }])
  }

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <h1 className="text-3xl font-bold">試算表</h1>
      <Card>
        <CardHeader>
          <CardTitle>輸入數值</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {rows.map((row, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="w-20 text-sm text-muted-foreground">{row.label}</span>
              <Input
                type="number"
                placeholder="0"
                value={row.value}
                onChange={(e) => updateValue(index, e.target.value)}
              />
            </div>
          ))}
          <Button variant="outline" className="w-full mt-2" onClick={addRow}>
            + 新增列
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6 flex justify-between items-center">
          <span className="font-semibold">合計</span>
          <span className="text-2xl font-bold">{total.toLocaleString()}</span>
        </CardContent>
      </Card>
    </div>
  )
}