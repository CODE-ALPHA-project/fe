import { items } from '@/components/display/sidebarItem';
import { SheetClose } from '@/components/ui/sheet';
import { useFlow } from '@/stackflow';

const SheetItem = () => {
  const { push } = useFlow();

  return (
    <div className="flex flex-col space-y-4 pt-5">
      {items.map(item => (
        <SheetClose asChild key={item.name}>
          <button
            onClick={() => push(item.path, {}, { animate: false })}
            className="flex items-center space-x-4 rounded-md px-2 py-2 text-left hover:bg-accent"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </button>
        </SheetClose>
      ))}
    </div>
  );
};
export default SheetItem;
