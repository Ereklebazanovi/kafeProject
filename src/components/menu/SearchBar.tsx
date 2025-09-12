import { FaSearch, FaTimes } from 'react-icons/fa';

interface Category {
  id: string;
  name: string;
  nameEn: string;
}

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const SearchBar = ({
  searchTerm,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange
}: SearchBarProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      {/* Search Input */}
      <div className="relative mb-6">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray">
          <FaSearch size={20} />
        </div>
        <input
          type="text"
          placeholder="მოძებნე კერძი..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-12 py-4 border-2 border-accent/20 rounded-full focus:border-primary focus:outline-none text-lg"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray hover:text-primary transition-colors"
          >
            <FaTimes size={20} />
          </button>
        )}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-primary text-white shadow-lg transform scale-105'
                : 'bg-background text-gray hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;