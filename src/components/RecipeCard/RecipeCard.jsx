import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";

const RecipeCard = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, ingredients, url } = recipe;

  return (
    <div className="flex flex-col p-2.5 w-72 shadow-md">
      <Dialog open={show} onClose={() => setShow(false)}>
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>
          <h3 className="text-lg font-semibold mb-2">{label}</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Ingredient</th>
                <th className="text-left">Weight</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((ingredient, index) => (
                <tr key={index} className="odd:bg-gray-100">
                  <td className="py-1">{ingredient.text}</td>
                  <td className="py-1">{Math.round(ingredient.weight)}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <button
            onClick={() => window.open(url)}
            className="text-green-600 border border-green-600 rounded px-4 py-2 mx-2 hover:bg-green-50"
          >
            See More
          </button>
          <button
            onClick={() => setShow(false)}
            className="text-red-600 border border-red-600 rounded px-4 py-2 mx-2 hover:bg-red-50"
          >
            Close
          </button>
        </DialogActions>
      </Dialog>

      <img
        src={image}
        alt={label}
        className="object-cover h-48 w-full rounded-t"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold my-2 truncate">{label}</h3>
        <div className="flex ">
          <button
            onClick={() => setShow(true)}
            className="text-xs w-1/2 text-green-600 border border-green-600 rounded px-2 py-2 mr-1 hover:bg-green-50"
          >
            Ingredients
          </button>
          <button
            onClick={() => window.open(url)}
            className="text-xs w-1/2 text-red-600 border border-red-600 rounded px-2 py-2 hover:bg-red-50"
          >
            Complete Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
