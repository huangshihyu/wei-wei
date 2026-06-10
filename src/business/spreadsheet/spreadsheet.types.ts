export type QueryRow = {
  floor: string;
  unit: string;
  total_area?: string;
  price?: number;
};

export type FormValues = {
  rows: QueryRow[];
};
