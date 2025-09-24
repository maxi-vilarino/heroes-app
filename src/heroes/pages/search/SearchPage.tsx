import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { HeroeGrid } from "@/heroes/components/HeroeGrid";
import { useSearchHeroes } from "@/heroes/hooks/useSearchHeroes";
import { useSearchParams } from "react-router";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? "";
  const team = searchParams.get("team") ?? "";
  const category = searchParams.get("category") ?? "";
  const universe = searchParams.get("universe") ?? "";
  const status = searchParams.get("status") ?? "";
  const strength = searchParams.get("strength") ?? "";

  const { data = [] } = useSearchHeroes(
    name,
    team,
    category,
    universe,
    status,
    strength
  );

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Superhero Search"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />

      {/* Breadcrums */}
      <CustomBreadcrumbs currentPage="Search" />
      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and Search */}
      <SearchControls />

      {/* Results */}
      <HeroeGrid heroes={data} />
    </>
  );
};

export default SearchPage;
