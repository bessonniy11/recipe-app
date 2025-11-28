import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Recipe } from '@/types';

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id} className="h-full">
            <RecipeCard recipe={recipe} />
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-base text-[#6b6b6f]">Рецепты не найдены.</p>
      )}
    </div>
  );
};

export default RecipeList;
