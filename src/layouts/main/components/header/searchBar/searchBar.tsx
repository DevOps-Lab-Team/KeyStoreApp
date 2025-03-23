import { useCallback, useState } from "react";
import debounce from "lodash/debounce";

import S from "./searchBar.style.ts";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [value, setValue] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedSearch(newValue);
  };

  return (
    <S.SearchBar>
      <S.SearchInput
        value={value}
        onChange={handleChange}
        placeholder="Поиск игр..."
      />
    </S.SearchBar>
  );
};

export default SearchBar; 