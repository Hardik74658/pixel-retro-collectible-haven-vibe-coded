
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample collection data
const collections = [
  {
    id: 1,
    name: "Heroes Series",
    description: "Iconic heroes and protagonists from the golden era of pixel gaming. From sword-wielding adventurers to nimble archers, this collection celebrates the legendary characters that defined retro gaming history.",
    itemCount: 48,
    thumbnailColor: "bg-retro-red",
    textColor: "text-retro-red",
    featured: true,
    backgroundPattern: "bg-grid-pattern",
    highlightItems: [1, 5],
  },
  {
    id: 2,
    name: "Space Series",
    description: "Explore the cosmos with our space-themed pixel art collectibles. Featuring sleek spaceships, mysterious aliens, and stunning cosmic environments inspired by classic arcade shooters.",
    itemCount: 32,
    thumbnailColor: "bg-retro-blue",
    textColor: "text-retro-blue",
    featured: true,
    backgroundPattern: "bg-dots-pattern",
    highlightItems: [2],
  },
  {
    id: 3,
    name: "Fantasy Creatures",
    description: "Mythical beings from fantasy worlds and RPG adventures. Dragons, monsters, and magical creatures that bring the wonder of classic RPGs to life through authentic pixel artistry.",
    itemCount: 36,
    thumbnailColor: "bg-retro-green",
    textColor: "text-retro-green",
    featured: true,
    backgroundPattern: "bg-zigzag-pattern",
    highlightItems: [3],
  },
  {
    id: 4,
    name: "Dungeon Items",
    description: "Treasures, weapons, and magical artifacts from the most memorable dungeon crawlers. Each pixel-perfect item tells a story of adventure and discovery.",
    itemCount: 52,
    thumbnailColor: "bg-retro-yellow",
    textColor: "text-retro-yellow",
    featured: false,
    backgroundPattern: "bg-cross-pattern",
    highlightItems: [4],
  },
  {
    id: 5,
    name: "Landmark Series",
    description: "Iconic locations and buildings rendered in beautiful pixel art style. From castles to spaceports, these collectibles showcase memorable environments from gaming history.",
    itemCount: 24,
    thumbnailColor: "bg-retro-purple",
    textColor: "text-retro-purple",
    featured: false,
    backgroundPattern: "bg-diagonal-pattern",
    highlightItems: [6],
  },
  {
    id: 6,
    name: "Vehicle Series",
    description: "From racing cars to futuristic hovercrafts, this collection features iconic vehicles from classic gaming reimagined as pixel art collectibles.",
    itemCount: 28,
    thumbnailColor: "bg-retro-orange",
    textColor: "text-retro-orange",
    featured: false,
    backgroundPattern: "bg-diamond-pattern",
    highlightItems: [7],
  },
  {
    id: 7,
    name: "Magic Items",
    description: "Potions, spellbooks, and magical artifacts from fantasy worlds. These collectibles capture the mystery and wonder of magic systems from beloved retro RPGs.",
    itemCount: 31,
    thumbnailColor: "bg-retro-pink",
    textColor: "text-retro-pink",
    featured: false,
    backgroundPattern: "bg-wave-pattern",
    highlightItems: [8],
  },
  {
    id: 8,
    name: "Arcade Classics",
    description: "Iconic elements from the golden age of arcade gaming. This nostalgic collection brings back the excitement of dropping quarters and setting high scores.",
    itemCount: 40,
    thumbnailColor: "bg-retro-dark-blue",
    textColor: "text-retro-dark-blue",
    featured: true,
    backgroundPattern: "bg-pixel-pattern",
    highlightItems: [1, 5],
  },
];

// Simple collection icon component
const CollectionIcon = ({ collection }: { collection: typeof collections[0] }) => {
  // Create a unique pattern for each collection based on its ID
  const getPattern = () => {
    const patterns = [
      // Heroes pattern (shield shape)
      <div key="heroes" className="w-full h-full flex items-center justify-center">
        <div className="w-2/3 h-2/3 relative">
          <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-full" style={{ backgroundColor: 'currentColor' }}></div>
          <div className="absolute inset-x-1/4 bottom-0 h-1/2 w-1/2" style={{ backgroundColor: 'currentColor' }}></div>
        </div>
      </div>,
      
      // Space pattern (simple spaceship)
      <div key="space" className="w-full h-full flex items-center justify-center">
        <div className="w-2/3 h-2/3 relative">
          <div className="absolute inset-x-1/4 top-1/4 w-1/2 h-1/2" style={{ backgroundColor: 'currentColor' }}></div>
          <div className="absolute inset-x-1/3 bottom-0 w-1/3 h-1/4" style={{ backgroundColor: 'currentColor' }}></div>
          <div className="absolute left-0 bottom-1/4 w-1/4 h-1/4" style={{ backgroundColor: 'currentColor' }}></div>
          <div className="absolute right-0 bottom-1/4 w-1/4 h-1/4" style={{ backgroundColor: 'currentColor' }}></div>
        </div>
      </div>,
      
      // Fantasy pattern (dragon shape)
      <div key="fantasy" className="w-full h-full flex items-center justify-center">
        <div className="w-2/3 h-2/3 relative">
          <div className="absolute left-0 top-0 w-1/2 h-1/2" style={{ backgroundColor: 'currentColor' }}></div>
          <div className="absolute right-1/4 top-1/4 w-1/2 h-1/4" style={{ backgroundColor: 'currentColor' }}></div>
          <div className="absolute inset-x-1/4 bottom-0 w-1/4 h-1/2" style={{ backgroundColor: 'currentColor' }}></div>
        </div>
      </div>,
      
      // Dungeon pattern (treasure chest)
      <div key="dungeon" className="w-full h-full flex items-center justify-center">
        <div className="w-2/3 h-1/2 relative" style={{ backgroundColor: 'currentColor' }}></div>
      </div>,
      
      // Landmark pattern (castle)
      <div key="landmark" className="w-full h-full flex items-center justify-center">
        <div className="w-2/3 h-2/3 relative">
          <div className="absolute inset-x-0 bottom-0 h-2/3" style={{ backgroundColor: 'currentColor' }}></div>
          <div className="absolute left-1/6 top-0 w-1/6 h-1/3" style={{ backgroundColor: 'currentColor' }}></div>
          <div className="absolute left-1/2 top-0 w-1/6 h-1/3" style={{ backgroundColor: 'currentColor' }}></div>
        </div>
      </div>,
      
      // Vehicle pattern (car shape)
      <div key="vehicle" className="w-full h-full flex items-center justify-center">
        <div className="w-2/3 h-1/3 mt-1/3 relative" style={{ backgroundColor: 'currentColor' }}></div>
      </div>,
      
      // Magic pattern (potion bottle)
      <div key="magic" className="w-full h-full flex items-center justify-center">
        <div className="w-1/2 h-2/3 relative">
          <div className="absolute inset-x-0 bottom-0 h-2/3 rounded-b-lg" style={{ backgroundColor: 'currentColor' }}></div>
          <div className="absolute inset-x-1/4 top-0 w-1/2 h-1/3" style={{ backgroundColor: 'currentColor' }}></div>
        </div>
      </div>,
      
      // Arcade pattern (arcade cabinet)
      <div key="arcade" className="w-full h-full flex items-center justify-center">
        <div className="w-2/3 h-2/3 relative">
          <div className="absolute inset-0 rounded-t-lg" style={{ backgroundColor: 'currentColor' }}></div>
          <div className="absolute inset-x-1/4 bottom-0 w-1/2 h-1/6" style={{ backgroundColor: 'currentColor' }}></div>
        </div>
      </div>,
    ];

    // Return pattern based on collection id (with fallback)
    return patterns[(collection.id - 1) % patterns.length];
  };

  return (
    <div className={`w-16 h-16 rounded-xl ${collection.thumbnailColor} flex items-center justify-center ${collection.textColor}`}>
      {getPattern()}
    </div>
  );
};

const Collections = () => {
  const featuredCollections = collections.filter(c => c.featured);
  const regularCollections = collections.filter(c => !c.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero banner */}
        <div className="bg-gradient-to-r from-retro-purple/20 to-retro-blue/20 py-16">
          <div className="pixel-container text-center">
            <h1 className="text-4xl font-bold mb-4">Curated Collections</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated collections of pixel art treasures. Each collection 
              tells a story, bringing together related pieces that celebrate the rich history of retro gaming.
            </p>
          </div>
        </div>
        
        {/* Featured collections */}
        <section className="py-16 relative overflow-hidden">
          {/* Pixel art decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-retro-pink/10 rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-retro-blue/10 rotate-12"></div>
          
          <div className="pixel-container">
            <h2 className="text-3xl font-bold mb-8">Featured Collections</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredCollections.map((collection) => (
                <Link 
                  to={`/collection/${collection.id}`} 
                  key={collection.id}
                  className="group"
                >
                  <Card className="pixel-card h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className={`${collection.thumbnailColor}/10 p-6`}>
                        <div className="flex items-center mb-4">
                          <CollectionIcon collection={collection} />
                          <div className="ml-4">
                            <h3 className={`text-xl font-bold ${collection.textColor}`}>
                              {collection.name}
                            </h3>
                            <div className="flex items-center mt-1">
                              <span className="text-sm text-muted-foreground">
                                {collection.itemCount} collectibles
                              </span>
                            </div>
                          </div>
                          <Badge className="ml-auto bg-white/80">Featured</Badge>
                        </div>
                        
                        <p className="text-muted-foreground">
                          {collection.description}
                        </p>
                        
                        <div className="mt-6 text-sm font-medium flex items-center">
                          <span className={collection.textColor}>View Collection</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`ml-1 h-5 w-5 ${collection.textColor} transform transition-transform group-hover:translate-x-1`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* All collections */}
        <section className="py-16 bg-muted/30">
          <div className="pixel-container">
            <h2 className="text-3xl font-bold mb-8">All Collections</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <Link 
                  to={`/collection/${collection.id}`} 
                  key={collection.id}
                  className="group"
                >
                  <Card className="pixel-card overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <CollectionIcon collection={collection} />
                        <div className="ml-4">
                          <h3 className={`font-bold ${collection.textColor}`}>
                            {collection.name}
                          </h3>
                          <div className="flex items-center">
                            <span className="text-xs text-muted-foreground">
                              {collection.itemCount} collectibles
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {collection.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Collection guide */}
        <section className="py-16">
          <div className="pixel-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Collecting Guide</h2>
                <p className="text-muted-foreground mb-6">
                  Our pixel art collectibles are organized into themed collections, each capturing a different 
                  facet of retro gaming culture. Whether you're a completionist or a selective curator, 
                  understanding our collection system will enhance your experience.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-retro-red/20 flex items-center justify-center text-retro-red font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold">Rarity Tiers</h3>
                      <p className="text-sm text-muted-foreground">
                        Our collectibles come in three rarity tiers: Common, Rare, and Epic. 
                        Each tier represents the complexity, detail level, and exclusivity of the artwork.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-retro-green/20 flex items-center justify-center text-retro-green font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold">Themed Collections</h3>
                      <p className="text-sm text-muted-foreground">
                        Each collection revolves around a central theme, from iconic game characters to fantasy 
                        creatures and sci-fi elements. Collecting complete sets unlocks special rewards.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-retro-blue/20 flex items-center justify-center text-retro-blue font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold">Limited Editions</h3>
                      <p className="text-sm text-muted-foreground">
                        Watch for our limited edition releases, which feature special color variants, 
                        enhanced animations, or collaborative designs with renowned pixel artists.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-retro-yellow/20 flex items-center justify-center text-retro-yellow font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold">Collector Rewards</h3>
                      <p className="text-sm text-muted-foreground">
                        The more you collect, the more exclusive perks you unlock. Track your collection 
                        progress in your profile and earn special badges and early access to new releases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Simple pixel art collection illustration */}
              <div className="relative">
                <div className="w-full max-w-md mx-auto aspect-square p-8">
                  <div className="w-full h-full relative bg-white rounded-xl shadow-lg overflow-hidden pixel-border border-retro-blue">
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-2 p-10">
                      {/* Create a grid of colorful squares representing collectibles */}
                      {Array.from({ length: 16 }).map((_, i) => {
                        const color = 
                          i % 5 === 0 ? "bg-retro-red" : 
                          i % 5 === 1 ? "bg-retro-blue" : 
                          i % 5 === 2 ? "bg-retro-green" : 
                          i % 5 === 3 ? "bg-retro-yellow" : 
                          "bg-retro-purple";
                        
                        return (
                          <div 
                            key={i} 
                            className={`${color} rounded-lg shadow-md animate-pixel-pulse`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-retro-yellow rounded-md animate-pixel-float"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-retro-pink rounded-md animate-pixel-bounce"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collections;
