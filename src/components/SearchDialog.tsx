
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Search as SearchIcon } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

// Sample product data - in a real app, this would come from API or context
const products = [
  {
    id: 1,
    name: "Pixel Hero Character",
    description: "Classic 16-bit hero character with sword and shield",
    price: 49.99,
    category: "Heroes Series",
  },
  {
    id: 2,
    name: "Retro Space Ship",
    description: "Vintage space shooter inspired craft with animated thrusters",
    price: 69.99,
    category: "Space Series",
  },
  {
    id: 3,
    name: "Fantasy Dragon",
    description: "Fearsome fire-breathing dragon from the golden age of RPGs",
    price: 89.99,
    category: "Fantasy Creatures",
  },
  {
    id: 4,
    name: "Pixel Treasure Chest",
    description: "Animated treasure chest filled with pixel gold and gems",
    price: 39.99,
    category: "Dungeon Items",
  },
  {
    id: 5,
    name: "8-Bit Warrior",
    description: "Legendary warrior from the early days of adventure games",
    price: 59.99,
    category: "Heroes Series",
  },
  {
    id: 6,
    name: "Pixel Art Castle",
    description: "Majestic medieval castle with animated flag and drawbridge",
    price: 79.99,
    category: "Landmark Series",
  },
  {
    id: 7,
    name: "Retro Racing Car",
    description: "Speedy pixel art race car inspired by arcade classics",
    price: 44.99,
    category: "Vehicle Series",
  },
  {
    id: 8,
    name: "Pixel Art Potion Set",
    description: "Collection of magical potions with different effects",
    price: 34.99,
    category: "Magic Items",
  },
];

// Sample search categories
const categories = [
  "Heroes Series",
  "Space Series",
  "Fantasy Creatures",
  "Dungeon Items",
  "Landmark Series",
  "Vehicle Series",
  "Magic Items",
];

// Recent searches - would be stored in localStorage or user preferences in a real app
const recentSearches = ["dragon", "hero", "treasure", "castle"];

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  
  // Filter products based on search query
  useEffect(() => {
    if (!searchQuery) {
      setSearchResults([]);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const results = products.filter(
      product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
    
    setSearchResults(results);
  }, [searchQuery]);
  
  const handleSelect = (productId: number) => {
    // Close the dialog and navigate to the product page
    onOpenChange(false);
    // The Link component in the CommandItem will handle navigation
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <div className="flex items-center border-b px-3">
        <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <input
          className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Search for pixel art collectibles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setSearchQuery("")}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <CommandList>
        {!searchQuery && (
          <>
            <CommandGroup heading="Recent Searches">
              {recentSearches.map((term) => (
                <CommandItem 
                  key={term} 
                  onSelect={() => setSearchQuery(term)}
                  className="cursor-pointer"
                >
                  <div className="flex items-center">
                    <SearchIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{term}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
            
            <CommandGroup heading="Browse by Category">
              {categories.map((category) => (
                <CommandItem 
                  key={category} 
                  onSelect={() => setSearchQuery(category)}
                  className="cursor-pointer"
                >
                  <span>{category}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
        
        {searchQuery && (
          <>
            <CommandEmpty>
              <div className="py-6 text-center">
                <p className="text-sm text-muted-foreground">
                  No results found for "<span className="font-medium text-foreground">{searchQuery}</span>"
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Try adjusting your search or browse all items in our shop.
                </p>
                <Button 
                  variant="link" 
                  asChild 
                  className="mt-2"
                  onClick={() => onOpenChange(false)}
                >
                  <Link to="/shop">Browse Shop</Link>
                </Button>
              </div>
            </CommandEmpty>
            
            <CommandGroup heading="Products">
              {searchResults.slice(0, 5).map((product) => (
                <CommandItem 
                  key={product.id} 
                  onSelect={() => handleSelect(product.id)}
                  className="cursor-pointer"
                >
                  <Link to={`/product/${product.id}`} className="flex justify-between w-full">
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-xs text-muted-foreground truncate max-w-[400px]">
                        {product.description}
                      </div>
                    </div>
                    <div className="text-sm font-medium">
                      ${product.price.toFixed(2)}
                    </div>
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
            
            {searchResults.length > 5 && (
              <div className="py-2 text-center">
                <Button 
                  variant="link" 
                  asChild
                  className="text-sm"
                  onClick={() => onOpenChange(false)}
                >
                  <Link to={`/shop?search=${searchQuery}`}>
                    See all {searchResults.length} results
                  </Link>
                </Button>
              </div>
            )}
          </>
        )}
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;
