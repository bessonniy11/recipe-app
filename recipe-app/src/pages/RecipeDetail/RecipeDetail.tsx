import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipesData from '../../data/recipes.json';
import { Recipe } from '@/types';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const foundRecipe = (recipesData as Recipe[]).find((r) => r.id === id);
    if (foundRecipe) {
      setRecipe(foundRecipe);
      setCurrentIndex(0);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const gallery = useMemo(() => {
    if (!recipe) return [];
    return recipe.images && recipe.images.length > 0 ? recipe.images : [recipe.image];
  }, [recipe]);

  const goNext = () => {
    if (gallery.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const goPrev = () => {
    if (gallery.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  if (!recipe) {
    return (
      <main className="max-w-screen-xl mx-auto px-4 py-16 min-h-[calc(100vh-140px)] flex justify-center items-center">
        <p className="text-xl text-[#4c4c4f]">Загружаем рецепт…</p>
      </main>
    );
  }

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-12 min-h-[calc(100vh-140px)]">
      <div className="mb-8 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 rounded-full border border-[#e4e4e7] bg-white px-4 py-2 text-sm font-medium text-[#2b2b2d] shadow-sm transition hover:-translate-y-[1px] hover:shadow-md"
        >
          <span aria-hidden>←</span>
          <span>Назад</span>
        </button>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-3xl bg-[#f4f4f6] shadow-md">
            {gallery.length > 0 && (
              <img
                src={gallery[currentIndex]}
                alt={`${recipe.name} фото ${currentIndex + 1}`}
                className="h-[420px] w-full object-cover transition"
              />
            )}
            {gallery.length > 1 && (
              <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4">
                <button
                  onClick={goPrev}
                  className="rounded-full bg-white/80 px-3 py-2 text-sm font-medium text-[#1f1f20] shadow-sm backdrop-blur transition hover:-translate-y-[1px] hover:shadow-md"
                >
                  Назад
                </button>
                <div className="flex items-center gap-2">
                  {gallery.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-2 w-2 rounded-full transition ${idx === currentIndex ? 'bg-black' : 'bg-white/70'}`}
                    />
                  ))}
                </div>
                <button
                  onClick={goNext}
                  className="rounded-full bg-white/80 px-3 py-2 text-sm font-medium text-[#1f1f20] shadow-sm backdrop-blur transition hover:-translate-y-[1px] hover:shadow-md"
                >
                  Далее
                </button>
              </div>
            )}
          </div>
          <div className="rounded-2xl border border-[#ececee] bg-white px-5 py-4 shadow-sm">
            <h2 className="text-3xl font-semibold text-[#161617] mb-2">{recipe.name}</h2>
            <p className="text-base leading-relaxed text-[#4c4c4f]">{recipe.description}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <section className="rounded-2xl border border-[#ececee] bg-white px-5 py-4 shadow-sm">
            <h3 className="text-xl font-semibold text-[#161617] mb-3">Ингредиенты</h3>
            <ul className="space-y-2 text-base text-[#3a3a3d]">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black" aria-hidden />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-[#ececee] bg-white px-5 py-4 shadow-sm">
            <h3 className="text-xl font-semibold text-[#161617] mb-3">Шаги</h3>
            <ol className="space-y-3 text-base text-[#3a3a3d]">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 text-sm font-semibold text-[#5c5c5f]">{index + 1}</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
};

export default RecipeDetail;
