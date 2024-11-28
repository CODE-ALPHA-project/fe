// components/layout/BottomTabSheet.tsx
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { TabSheetProps } from '@/components/types/type';
import SheetItem from '@/components/display/SheetItem';
import SheetLogin from '@/components/display/SheetLogin';

export const TabSheet = ({ tab }: TabSheetProps) => (
  <Sheet>
    <SheetTrigger asChild>
      <button className="relative flex h-full flex-1 flex-col items-center justify-center gap-1 text-muted-foreground transition-all duration-200 hover:bg-accent/50">
        <tab.icon className="h-5 w-5 transition-colors duration-200" />
        <span className="text-xs font-medium">{tab.name}</span>
      </button>
    </SheetTrigger>
    <SheetContent side="left" className="w-[300px]">
      <SheetTitle>전체 메뉴</SheetTitle>
      <SheetLogin />
      <SheetItem />
    </SheetContent>
  </Sheet>
);
