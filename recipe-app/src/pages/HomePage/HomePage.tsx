import React, { useState, useEffect } from 'react';
import recipesData from '../../data/recipes.json';
import SearchForm from '../../components/SearchForm/SearchForm';
import RecipeList from '../../components/RecipeList/RecipeList';
import { Recipe } from '@/types';

const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    setRecipes(recipesData as Recipe[]);
  }, []);

  useEffect(() => {
    const filtered = (recipesData as Recipe[]).filter((recipe: Recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setRecipes(filtered);
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <main className="bg-[#f5f5f7]">
      <div className="max-w-screen-xl mx-auto px-4 pb-16 pt-2 md:pt-4">
        <section className="mb-10 rounded-3xl border border-[#e8e8eb] bg-white px-6 py-6 shadow-sm md:px-8 md:py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#111113]">Выбери вкус по настроению</h2>
              <p className="text-base text-[#4c4c4f] leading-relaxed">
                От пасты до завтраков — всё под рукой. Найди рецепт по названию или просто листай коллекцию.
              </p>
            </div>
            <div className="w-full md:max-w-md">
              <SearchForm onSearch={handleSearch} />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-semibold text-[#111113]">Коллекция недели</h3>
            <span className="text-sm text-[#6b6b6f]">{recipes.length} рецептов</span>
          </div>
          <RecipeList recipes={recipes} />
        </section>
      </div>
    </main>
  );
};

export default HomePage;
