import { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SearchBar from '../components/menu/SearchBar';
import MenuCategory from '../components/menu/MenuCategory';
import { useMenuItems } from '../hooks/useFirestore';

const Menu = () => {
  const { menuItems, loading, error } = useMenuItems();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'ყველა', nameEn: 'All' },
    { id: 'hot-drinks', name: 'ცხელი სასმელები', nameEn: 'Hot Drinks' },
    { id: 'cold-drinks', name: 'ცივი სასმელები', nameEn: 'Cold Drinks' },
    { id: 'food', name: 'საკვები', nameEn: 'Food' },
    { id: 'desserts', name: 'დესერტები', nameEn: 'Desserts' }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.nameEn || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-xl text-primary">მენიუს ჩატვირთვა...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            ჩვენი მენიუ
          </h1>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            აღმოაჩინე ქართული ტრადიციული და თანამედროვე კერძები ჩვენს მენიუში
          </p>
        </div>
        
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <div className="mt-8">
          {/* Error State */}
          {error && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-xl font-serif font-bold text-error mb-2">
                შეცდომა მენიუს ჩატვირთვისას
              </h3>
              <p className="text-gray">{error}</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && menuItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-8xl mb-6">🍽️</div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                მენიუ ჯერ არ არის დამატებული
              </h3>
              <p className="text-lg text-gray mb-6">
                ჩვენი შეფები მუშაობენ ახალ კერძებზე
              </p>
              <div className="bg-background p-6 rounded-xl max-w-md mx-auto">
                <p className="text-sm text-gray">
                  💡 <strong>რჩევა:</strong> Admin panel-დან შეგიძლიათ დაამატოთ კერძები
                </p>
              </div>
            </div>
          )}

          {/* Menu Categories */}
          {!loading && !error && menuItems.length > 0 && (
            <>
              {categories.map(category => {
                if (selectedCategory !== 'all' && category.id !== selectedCategory) return null;
                
                const categoryItems = filteredItems.filter(item => 
                  category.id === 'all' || item.category === category.id
                );
                
                if (categoryItems.length === 0) return null;
                
                return (
                  <MenuCategory
                    key={category.id}
                    category={category}
                    items={categoryItems}
                  />
                );
              })}
              
              {/* Search Results Empty */}
              {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-serif font-bold text-gray mb-2">
                    მოძებნილი კერძები ვერ მოიძებნა
                  </h3>
                  <p className="text-gray">
                    სცადეთ სხვა საძიებო ტერმინი ან კატეგორია
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;