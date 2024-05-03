import { useState } from 'react';
import { SearchBox } from "../../components/BrowseMovies/SearchBox";
import { YIFYMovies } from "../../components/BrowseMovies/YIFYMovies";

export const BrowseMovies = () => {
  const [searchQuery, setSearchQuery] = useState<SearchProps>();

  const handleSearch = (searchProps: SearchProps) => {
    setSearchQuery(searchProps);
  };

  return (
    <div className="">
      <div className='bg-bkgsec py-16'>

        <SearchBox onSearch={handleSearch} />
      </div>
      <YIFYMovies searchQuery={searchQuery} />
    </div>
  );
};
