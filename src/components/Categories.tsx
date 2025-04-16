
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Game Characters",
    description: "Iconic heroes and villains from classic video games.",
    count: 48,
    color: "bg-retro-blue",
    textColor: "text-retro-blue",
    borderColor: "border-retro-blue",
  },
  {
    id: 2,
    name: "Fantasy Creatures",
    description: "Mythical beings from fantasy worlds and RPG adventures.",
    count: 36,
    color: "bg-retro-green",
    textColor: "text-retro-green",
    borderColor: "border-retro-green",
  },
  {
    id: 3,
    name: "Space Series",
    description: "Spaceships, aliens, and cosmic elements from sci-fi games.",
    count: 27,
    color: "bg-retro-purple",
    textColor: "text-retro-purple",
    borderColor: "border-retro-purple",
  },
  {
    id: 4,
    name: "Retro Items",
    description: "Classic power-ups, weapons, and treasures from gaming history.",
    count: 52,
    color: "bg-retro-orange",
    textColor: "text-retro-orange",
    borderColor: "border-retro-orange",
  },
  {
    id: 5,
    name: "Arcade Classics",
    description: "Elements from the golden age of arcade gaming.",
    count: 31,
    color: "bg-retro-red",
    textColor: "text-retro-red",
    borderColor: "border-retro-red",
  },
  {
    id: 6,
    name: "Pixel Landscapes",
    description: "Beautiful scenery and environments in retro pixel art style.",
    count: 19,
    color: "bg-retro-yellow",
    textColor: "text-retro-yellow",
    borderColor: "border-retro-yellow",
  },
];

const PixelArtIcon = ({ category }: { category: typeof categories[0] }) => {
  // Simple category icon representation using pixel art style
  // Each category has a different pattern
  
  switch (category.id) {
    case 1: // Game Characters - simple character
      return (
        <div className="w-12 h-12 grid grid-cols-4 grid-rows-4 gap-0.5">
          <div className={`col-start-2 col-span-2 row-start-1 row-span-1 ${category.color}`}></div>
          <div className={`col-start-2 col-span-2 row-start-2 row-span-2 ${category.color}`}></div>
          <div className={`col-start-1 col-span-4 row-start-4 row-span-1 ${category.color}`}></div>
        </div>
      );
    case 2: // Fantasy Creatures - dragon-like
      return (
        <div className="w-12 h-12 grid grid-cols-4 grid-rows-4 gap-0.5">
          <div className={`col-start-1 col-span-1 row-start-1 row-span-1 ${category.color}`}></div>
          <div className={`col-start-1 col-span-3 row-start-2 row-span-1 ${category.color}`}></div>
          <div className={`col-start-2 col-span-2 row-start-3 row-span-1 ${category.color}`}></div>
          <div className={`col-start-1 col-span-1 row-start-4 row-span-1 ${category.color}`}></div>
          <div className={`col-start-4 col-span-1 row-start-4 row-span-1 ${category.color}`}></div>
        </div>
      );
    case 3: // Space Series - spaceship
      return (
        <div className="w-12 h-12 grid grid-cols-4 grid-rows-4 gap-0.5">
          <div className={`col-start-2 col-span-2 row-start-1 row-span-1 ${category.color}`}></div>
          <div className={`col-start-1 col-span-4 row-start-2 row-span-1 ${category.color}`}></div>
          <div className={`col-start-2 col-span-2 row-start-3 row-span-1 ${category.color}`}></div>
          <div className={`col-start-1 col-span-1 row-start-4 row-span-1 ${category.color}`}></div>
          <div className={`col-start-4 col-span-1 row-start-4 row-span-1 ${category.color}`}></div>
        </div>
      );
    case 4: // Retro Items - treasure chest
      return (
        <div className="w-12 h-12 grid grid-cols-4 grid-rows-4 gap-0.5">
          <div className={`col-start-1 col-span-4 row-start-1 row-span-1 ${category.color}`}></div>
          <div className={`col-start-1 col-span-4 row-start-2 row-span-2 ${category.color}`}></div>
          <div className={`col-start-1 col-span-1 row-start-3 row-span-1 ${category.color}`}></div>
          <div className={`col-start-4 col-span-1 row-start-3 row-span-1 ${category.color}`}></div>
        </div>
      );
    case 5: // Arcade Classics - arcade machine
      return (
        <div className="w-12 h-12 grid grid-cols-4 grid-rows-4 gap-0.5">
          <div className={`col-start-1 col-span-4 row-start-1 row-span-1 ${category.color}`}></div>
          <div className={`col-start-1 col-span-4 row-start-2 row-span-2 ${category.color}`}></div>
          <div className={`col-start-1 col-span-1 row-start-2 row-span-1 bg-white`}></div>
          <div className={`col-start-3 col-span-1 row-start-2 row-span-1 bg-white`}></div>
          <div className={`col-start-2 col-span-2 row-start-4 row-span-1 ${category.color}`}></div>
        </div>
      );
    case 6: // Pixel Landscapes - mountains
      return (
        <div className="w-12 h-12 grid grid-cols-4 grid-rows-4 gap-0.5">
          <div className={`col-start-2 col-span-1 row-start-1 row-span-1 ${category.color}`}></div>
          <div className={`col-start-2 col-span-1 row-start-2 row-span-1 ${category.color}`}></div>
          <div className={`col-start-1 col-span-1 row-start-3 row-span-1 ${category.color}`}></div>
          <div className={`col-start-2 col-span-2 row-start-3 row-span-1 ${category.color}`}></div>
          <div className={`col-start-1 col-span-4 row-start-4 row-span-1 ${category.color}`}></div>
        </div>
      );
    default:
      return (
        <div className="w-12 h-12 grid grid-cols-4 grid-rows-4 gap-0.5">
          <div className={`col-start-2 col-span-2 row-start-2 row-span-2 ${category.color}`}></div>
        </div>
      );
  }
};

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Decorative pixel art background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-retro-pink/10 rotate-45"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-retro-blue/10 rotate-12"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-retro-yellow/10 -rotate-12"></div>
      
      <div className="pixel-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collection of pixel art treasures, organized by themes and series for easy discovery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <Card className="pixel-card h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <PixelArtIcon category={category} />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className={`font-semibold ${category.textColor}`}>
                        {category.name}
                      </h3>
                      <span className={`text-xs font-medium ${category.textColor} px-2 py-0.5 rounded-full ${category.color}/10`}>
                        {category.count} items
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {category.description}
                    </p>
                    
                    <div className={`flex items-center text-sm ${category.textColor}`}>
                      <span>Explore collection</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
