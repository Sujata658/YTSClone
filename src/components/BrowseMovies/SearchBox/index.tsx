import React, { useState } from 'react';
import Button from '../../General/Button';
import Input from '../../General/Input';
import { Dropdown } from '../../General/Dropdown';

interface SearchBoxProps {
  onSearch: (query: string) => void; // Callback function to handle search
}

export const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (value: string) => {
    setQuery(value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="px-40">
      <div className="text-[#919191] font-bold">Search Term:</div>
      <div className="grid grid-cols-8 gap-5">
        <div className="col-span-7">
          <Input
            placeholder={""}
            border="border-none"
            backgroundColor="bg-[#282828]"
            onChange={handleChange}
          />
        </div>
        <Button background={"bg-[#5da93c]"} content={"Search"} onClick={handleSearchClick} />
      </div>
      <div>
        <Dropdown/>
      </div>
    </div>
  );
};
