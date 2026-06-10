'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Plus, Trash2 } from 'lucide-react';
import type { FormValues } from '../spreadsheet.types';

import { useFieldArray, useFormContext } from 'react-hook-form';

const QueryForm: React.FC<ClassNamed> = (props) => {
  const { control, register } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'rows',
  });
  return (
    <Card className={props.className}>
      <CardHeader>
        <CardTitle>輸入查詢條件</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 items-end">
           <div className="space-y-1 flex-1">
              {index === 0 && (
                <label className="text-sm text-muted-foreground">戶別</label>
              )}
              <Input placeholder="輸入戶別" {...register(`rows.${index}.unit`)} />
            </div>   
             <div className="space-y-1 flex-1">
              {index === 0 && (
                <label className="text-sm text-muted-foreground">樓層</label>
              )}
              <Input placeholder="輸入樓層" {...register(`rows.${index}.floor`)} />
            </div>
         
            <div className="space-y-1 flex-1">
              {index === 0 && <label className="text-sm text-muted-foreground">總價</label>}
              <Input placeholder="輸入總價" {...register(`rows.${index}.price`)} />
            </div>
            <div className={index === 0 ? 'pt-6' : ''}>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => remove(index)}
                disabled={fields.length === 1}
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ floor: '', unit: '' })}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-1" />
          新增一組
        </Button>
      </CardContent>
    </Card>
  );
};

export default QueryForm;
