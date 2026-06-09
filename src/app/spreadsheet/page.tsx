'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetSheetQuery } from '@/store/api/sheetApi';

export default function SpreadsheetPage() {
  const [fieldFloor, setFieldFloor] = useState('');
  const [fieldUnit, setFieldUnit] = useState('');
  const [searched, setSearched] = useState(false);

  // 頁面載入時自動抓取並 cache，不會重複呼叫 API
  const { data, isLoading, isError } = useGetSheetQuery();

  const result = searched
    ? (data?.find((row) => row.floor === fieldFloor && row.unit === fieldUnit) ?? null)
    : null;

  const handleSearch = () => setSearched(true);

  const handleClear = () => {
    setFieldFloor('');
    setFieldUnit('');
    setSearched(false);
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold">查詢</h1>

      <Card>
        <CardHeader>
          <CardTitle>輸入查詢條件</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-x-2 items-end">
          <div className="space-y-1">
            <label className="text-sm text-muted-foreground">欄位一（樓層）</label>
            <Input
              placeholder="輸入樓層"
              value={fieldFloor}
              onChange={(e) => {
                setFieldFloor(e.target.value);
                setSearched(false);
              }}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-muted-foreground">欄位二（戶別）</label>
            <Input
              placeholder="輸入戶別"
              value={fieldUnit}
              onChange={(e) => {
                setFieldUnit(e.target.value);
                setSearched(false);
              }}
            />
          </div>
          <div className="flex gap-2">
            <Button
              className="flex-1"
              onClick={handleSearch}
              disabled={!fieldFloor || !fieldUnit || isLoading}
            >
              {isLoading ? '載入中...' : '查詢'}
            </Button>
            <Button variant="outline" onClick={handleClear}>
              清除
            </Button>
          </div>
        </CardContent>
      </Card>

      {isError && (
        <Card>
          <CardContent className="pt-6">
            <p className="text-destructive text-center">資料載入失敗，請稍後再試</p>
          </CardContent>
        </Card>
      )}

      {searched && result && (
        <Card>
          <CardHeader>
            <CardTitle>查詢結果</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{result.total_area}</p>
          </CardContent>
        </Card>
      )}

      {searched && !result && !isLoading && (
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center">找不到符合的資料</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
