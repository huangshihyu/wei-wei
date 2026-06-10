'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { Card, CardContent } from '@/components/ui/card';

import { useGetSheetQuery } from '@/store/api/sheetApi';

import ResultsTable from '../organisms/ResultsTable';
import type { FormValues } from '../spreadsheet.types';
import QueryForm from '../organisms/QueryForm';

export default function SpreadsheetView() {
  const { isError } = useGetSheetQuery();

  const methods = useForm<FormValues>({
    defaultValues: {
      rows: [{ floor: '', unit: '' }],
    },
  });

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">查詢</h1>
      {isError && (
        <Card>
          <CardContent >
            <p className="text-destructive text-center">資料載入失敗，請稍後再試</p>
          </CardContent>
        </Card>
      )}
      <FormProvider {...methods}>
        <form>
          <QueryForm className="mb-6"/>
          <ResultsTable />
        </form>
      </FormProvider>
    </div>
  );
}
