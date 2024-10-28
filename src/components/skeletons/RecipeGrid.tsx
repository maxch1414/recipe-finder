import { RecipeCardSkeleton } from "./RecipeCard";

export function RecipesGridSkeleton() {
  return (
    <div>
      <div className="flex w-full items-center space-x-4 mb-4">
        <div className="relative w-full">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
        <div className="w-[180px] h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="w-[180px] h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <RecipeCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
