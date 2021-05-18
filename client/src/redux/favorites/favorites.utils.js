export const addOrRemoveFavorite = (favoriteItems, favoriteToAddOrToRemove) => {
  const existingFavorite = favoriteItems.find(
    (fav) => fav.id === favoriteToAddOrToRemove.id
  );

  if (existingFavorite)
    return favoriteItems.filter((fav) => fav.id !== favoriteToAddOrToRemove.id);

  return [...favoriteItems, favoriteToAddOrToRemove];
};
