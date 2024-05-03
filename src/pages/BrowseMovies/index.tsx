import  { useState } from 'react';
import { SearchBox } from "../../components/BrowseMovies/SearchBox";
import { YIFYMovies } from "../../components/BrowseMovies/YIFYMovies";

export const BrowseMovies = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="dark:bg-[#171717] py-16">
      <SearchBox onSearch={handleSearch} />
      <YIFYMovies searchQuery={searchQuery}/>
    </div>
  );
};
