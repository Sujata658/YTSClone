import React, { useState } from 'react';
import Button from '../../General/Button';
import Input from '../../General/Input';
import { dropdownlist } from '../../Constants/const';

interface SearchBoxProps {
  onSearch: (searchProps: SearchProps) => void;
  submit?: (searchProps: SearchProps) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchProps, setSearchProps] = useState<SearchProps>({
    query: '',
    quality: '',
    genre: '',
    rating: '',
    year: '',
    language: '',
    orderby: ''
  });


  const handleChange = (value: string) => {
    setSearchProps(prevState => ({ ...prevState, query: value }));
  };

  const handleDropdownChange = (fieldName: string, value: string) => {
    // console.log(fieldName, value)
    setSearchProps(prevState => ({ ...prevState, [fieldName.toLowerCase()]: value }));
    // console.log(searchProps)
  };

  const handleSearchClick = () => {
    onSearch(searchProps);
  };

  return (
    <div className="px-40">
      <div className="text-textsec text-2xl font-bold">Search Term:</div>
      <div className="grid grid-cols-8 gap-5">
        <div className="col-span-7">
          <Input
            placeholder=""
            border="border-none"
            backgroundColor="bg-bkgprim"
            onChange={handleChange}
          />
        </div>
        <Button background="bg-webthemeprim" textColor='text-textprim' content="Search" onClick={handleSearchClick} />
      </div>
      <div>
        <div className='grid grid-cols-6 gap-8'>
          {dropdownlist.map((item, index) => (
            <div key={index} className='mt-4'>
              <div className='text-textsec text-sm font-bold'>
                {item.name + ':'}
              </div>
              <select
                name={item.name}
                id={item.id}
                className='p-2 rounded-md text-sm bg-bkgprim text-textsec w-full'
                onChange={(e) => handleDropdownChange(item.name, e.target.value)}
              >
                {item.options.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
