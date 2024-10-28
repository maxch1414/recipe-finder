export function RecipeCardSkeleton() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm animate-pulse">
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700 rounded-t-lg" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
      </div>
    </div>
  );
}
