import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroeGrid } from "@/heroes/components/HeroeGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPage } from "@/heroes/actions/get-heroes-by-page.actions";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");

  useEffect(() => {
    getHeroesByPage().then((heroes) => {
      console.log({ heroes });
    });
  }, []);

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Superhero Universe"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />

      <CustomBreadcrumbs currentPage="Heroes" />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Tabs */}
      <Tabs value={activeTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
            All Characters (16)
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            className="flex items-center gap-2"
            onClick={() => setActiveTab("favorites")}
          >
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger
            value="villains"
            onClick={() => setActiveTab("villains")}
          >
            Villains (2)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {/* Mostrar todos los personajes */}
          <HeroeGrid />
        </TabsContent>
        <TabsContent value="favorites">
          {/* Mostrar todos los personajes favoritos */}
          <h1>Favorites</h1>
          <HeroeGrid />
        </TabsContent>
        <TabsContent value="heroes">
          {/* Mostrar todos los heroes */}
          <h1>Heroes</h1>
          <HeroeGrid />
        </TabsContent>
        <TabsContent value="villains">
          {/* Mostrar todos los villanos */}
          <h1>Villains</h1>
          <HeroeGrid />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <CustomPagination totalPages={8} />
    </>
  );
};
