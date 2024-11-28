import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';

const SearchSection = () => {
  const [search, setSearch] = useState('');

  const searchParamHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const clickHandler = () => {
    console.log(search);
  };

  return (
    <div className="flex justify-center px-4 pt-5">
      <div className="flex h-[50px] w-full place-items-center rounded-lg bg-gray-100 pl-2">
        <Search color="gray" onClick={clickHandler} />
        <Input
          className="border-none px-2"
          type="search"
          value={search}
          onChange={searchParamHandler}
          placeholder="검색어를 입력하세요"
        />
      </div>
    </div>
  );
};

export default SearchSection;
