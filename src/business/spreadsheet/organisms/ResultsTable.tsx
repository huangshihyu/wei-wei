'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { FormValues, QueryRow } from '../spreadsheet.types';
import { useGetSheetQuery } from '@/store/api/sheetApi';
import { useFormContext, useWatch } from 'react-hook-form';

const ResultsTable: React.FC<ClassNamed> = (_props) => {
  const { data } = useGetSheetQuery();

  const { control } = useFormContext<FormValues>();
  const rowData = useWatch({
    control,
    name: 'rows',
  });
  if (rowData == null) {
    return null;
  }
  const results: QueryRow[] = rowData
    .map((row) => {
      if (row.floor && row.unit) {
        const found = data?.find((item) => item.floor === row.floor && item.unit === row.unit);

        return { ...row, total_area: found?.total_area } as QueryRow;
      }
      return undefined;
    })
    .filter((item): item is QueryRow => item != null);

  if (results.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>查詢結果</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>戶別</TableHead>
              <TableHead>坪數</TableHead>
              <TableHead>總價(萬)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((row, i) =>
              row.total_area ? (
                <TableRow key={i}>
                  <TableCell>{`${row.unit}-${row.floor}F`}</TableCell>
                  <TableCell>{row.total_area}(坪)</TableCell>
                  <TableCell>
                    {row.price}(萬)
                    {row.price && (
                      <span className="text-xs text-rose-400 ml-1">
                        {Number(row.price / Number(row.total_area)).toFixed(2)}萬/坪
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow key={i}>
                  <TableCell colSpan={3} className="text-muted-foreground">
                    找不到資料
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ResultsTable;
