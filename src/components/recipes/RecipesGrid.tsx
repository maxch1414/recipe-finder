import React, { useState } from "react";
import { FullRecipe } from "../../lib/types";
import { RecipeCard } from "./RecipeCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { RecipeModal } from "./RecipeModal";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = {
  recipes: FullRecipe[];
};

export function RecipesGrid({ recipes }: Readonly<Props>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState<string>("all");
  const [selectedCourse, setSelectedCourse] = useState<string>("all");
  const [open, setOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<FullRecipe | null>(null);

  if (!recipes.length) return;

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      searchQuery === "" ||
      recipe.strMeal.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesOrigin =
      selectedOrigin === "all" || recipe.strArea === selectedOrigin;
    const matchesCourse =
      selectedCourse === "all" || recipe.strCategory === selectedCourse;
    return matchesSearch && matchesOrigin && matchesCourse;
  });

  return (
    <div>
      {recipes.length ? (
        <div>
          <div className="flex w-full items-center space-x-4 mb-4">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search recipes"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <Select onValueChange={setSelectedOrigin}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an origin" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Origins</SelectLabel>
                  <SelectItem value="all">All Origins</SelectItem>
                  {recipes.map((recipe: FullRecipe) => (
                    <SelectItem key={recipe.idMeal} value={recipe.strArea}>
                      {recipe.strArea}
                    </SelectItem>
                  ))}
                  <SelectItem value={"random"}>Random</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedCourse}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Course" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Courses</SelectLabel>
                  <SelectItem value="all">All Courses</SelectItem>
                  {recipes.map((recipe: FullRecipe) => (
                    <SelectItem key={recipe.idMeal} value={recipe.strCategory}>
                      {recipe.strCategory}
                    </SelectItem>
                  ))}
                  <SelectItem value={"random"}>Random</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                setSelectedRecipe={setSelectedRecipe}
                openModal={() => setOpen(true)}
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-lg">No recipes found.</p>
      )}
      {selectedRecipe ? (
        <RecipeModal recipe={selectedRecipe} open={open} setOpen={setOpen} />
      ) : null}
    </div>
  );
}
