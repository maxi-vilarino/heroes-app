import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction } from "../actions/search-heroes.action";

export const useSearchHeroes = (
  name: string,
  team: string,
  category: string,
  universe: string,
  status: string,
  strength: string
) => {
  return useQuery({
    queryKey: [
      "search-heroes",
      {
        name,
        team,
        category,
        universe,
        status,
        strength,
      },
    ],
    queryFn: () =>
      searchHeroesAction({
        name,
        team,
        category,
        universe,
        status,
        strength,
      }),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
