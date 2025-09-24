import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContext {
  favorites: Hero[];
  favoriteCount: number;

  toggleFavorite: (hero: Hero) => void;
  isFavorite: (hero: Hero) => boolean;
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

const getFavoritesFromLocalStorage = (): Hero[] => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse("favorites") : [];
};

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(
    getFavoritesFromLocalStorage()
  );

  const toggleFavorites = (hero: Hero) => {
    const heroExist = favorites.find((h) => h.id === hero.id);
    if (heroExist) {
      const newFavorites = favorites.filter((h) => h.id != hero.id);
      setFavorites(newFavorites);
      return;
    }
    setFavorites([...favorites, hero]);
  };

  const isFavorite = (hero: Hero) => {
    return favorites.some((h) => h.id === hero.id);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteHeroContext
      value={{
        favoriteCount: favorites.length,
        favorites: favorites,
        isFavorite: isFavorite,
        toggleFavorite: toggleFavorites,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
