// components/layout/BottomTabButton.tsx
import { cn } from '@/lib/utils';
import { TabButtonProps } from '@/components/types/type';
import { useFlow } from '@/stackflow';

export const TabButton = ({ tab, currentPath, disabled }: TabButtonProps) => {
  const { push } = useFlow();
  return (
    <button
      onClick={() => push(tab.path, {})}
      disabled={disabled}
      className={cn(
        'relative flex h-full flex-1 flex-col items-center justify-center gap-1 transition-all duration-200 hover:bg-accent/50',
        currentPath === tab.matchPath
          ? 'text-primary'
          : 'text-muted-foreground',
      )}
    >
      <tab.icon
        className={cn(
          'h-5 w-5 transition-colors duration-200',
          currentPath === tab.matchPath && 'text-primary',
        )}
      />
      <span className="text-xs font-medium transition-colors duration-200">
        {tab.name}
      </span>
      {currentPath === tab.matchPath && (
        <div className="absolute -top-[1px] left-0 right-0 h-[1px] bg-primary" />
      )}
    </button>
  );
};
