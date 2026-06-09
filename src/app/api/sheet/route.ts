import { NextResponse } from 'next/server';
import Papa from 'papaparse';
import { SheetRow } from '@/store/api/sheetApi';

const SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/1onlWkOMf5aYRdWiYYSoR6KZJd-3w_4ENzTJYWXCTtLY/export?format=csv&gid=0';

export async function GET() {
  try {
    const res = await fetch(SHEET_CSV_URL);
    const csv = await res.text();

    const { data } = Papa.parse<string[]>(csv, {
      header: false,
      skipEmptyLines: true,
    });

    const rows = data.slice(2);

    const mapped: SheetRow[] = rows.map((row) => ({
      floor: row[1] ?? '',
      unit: row[2] ?? '',
      total_area: row[4] ?? '',
    }));

    return NextResponse.json(mapped);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch sheet' }, { status: 500 });
  }
}
