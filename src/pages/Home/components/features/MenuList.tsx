import React from 'react';
import { useFlow } from '@/stackflow';

import MenuCard from '@/pages/Home/components/features/MenuCard';
import { menuItems } from '@/pages/Home/components/features/MenuItem';

const MenuList: React.FC = () => {
  const { push } = useFlow();

  return (
    <section className="bg-gradient-to-br px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-eland text-3xl text-blue-900">
            원하는 메뉴를 선택하세요
          </h2>
          <p className="font-eland text-lg text-blue-900">
            찾을 필요없이 바로 가기
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              onClick={() => push(item.path, {}, { animate: true })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuList;
