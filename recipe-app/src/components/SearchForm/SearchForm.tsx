import React, { useState } from 'react';

interface SearchFormProps {
  onSearch: (searchTerm: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Поиск рецептов…"
        className="w-full rounded-xl border border-[#d9d9dc] bg-white px-4 py-3 text-base text-[#1f1f20] shadow-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 transition"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-base font-medium text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md"
      >
        Найти
      </button>
    </form>
  );
};

export default SearchForm;
