import { useFlow } from '@/stackflow';

import { Pencil } from 'lucide-react';

const WriteButton = () => {
  const { push } = useFlow();

  return (
    <div className="-50 fixed bottom-20 right-[11px]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-200/50">
        <Pencil className="h-6 w-6" onClick={() => push('WritePage', {})} />
      </div>
    </div>
  );
};

export default WriteButton;
