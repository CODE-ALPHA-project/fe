import { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { filterWord } from '@/mock/filtermock';

interface SelectFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const SelectFilter = ({ value, onChange }: SelectFilterProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? filterWord.find(word => word.value === value)?.label
            : '원하는 필터를 설정하세요'}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput
            placeholder="원하는 검색어를 입력하세요"
            className="h-9"
          />
          <CommandList>
            <CommandEmpty>일치하는 결과가 없습니다.</CommandEmpty>
            <CommandGroup>
              {filterWord.map(word => (
                <CommandItem
                  key={word.value}
                  value={word.value}
                  onSelect={currentValue => {
                    onChange(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  {word.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === word.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SelectFilter;
