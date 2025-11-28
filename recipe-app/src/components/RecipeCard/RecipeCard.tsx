import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '@/types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const preview = recipe.images?.[0] || recipe.image;

  return (
    <Link to={`/recipe/${recipe.id}`} className="block no-underline text-inherit w-full h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8e8eb] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#f4f4f6]">
          <img
            src={preview}
            alt={recipe.name}
            className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col px-5 py-4 gap-2">
          <h3 className="m-0 text-lg font-semibold text-[#161617]">{recipe.name}</h3>
          <p className="m-0 text-sm text-[#6b6b6f] overflow-hidden text-ellipsis">
            {recipe.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
