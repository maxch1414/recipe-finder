"use client";

import React, { useState } from "react";
import { FullRecipe, Ingredient } from "../../lib/types";
import { IngredientForm } from "../forms/IngredientForm";
import { RecipesGrid } from "./RecipesGrid";
import { fetchFilteredRecipes } from "@/app/actions/recipes";
import { RecipesGridSkeleton } from "../skeletons/RecipeGrid";

type RecipeSearchProps = {
  ingredients: Ingredient[];
};

export const RecipeSearch = ({ ingredients }: RecipeSearchProps) => {
  const [recipes, setRecipes] = useState<FullRecipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipes = async (ingredientIds: string[]) => {
    try {
      setIsLoading(true);
      const recipes = await fetchFilteredRecipes(ingredientIds);
      const validRecipes: FullRecipe[] = recipes.map((recipe) => ({
        ...recipe,
        ingredients: recipe.ingredients.filter(
          (ingredient): ingredient is string => ingredient !== undefined
        ),
      }));
      setRecipes(validRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <IngredientForm ingredients={ingredients} onSubmit={fetchRecipes} />
      <div className="mt-4">
        {isLoading ? (
          <RecipesGridSkeleton />
        ) : (
          <RecipesGrid recipes={recipes} />
        )}
      </div>
    </div>
  );
};
