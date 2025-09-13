import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaSave, FaTimes } from 'react-icons/fa';
import { useMenuItems } from '../../hooks/useFirestore';
import ImageUpload from './ImageUpload';
import type { MenuItem } from '../../types';

const MenuManager = () => {
  const { menuItems, loading, refreshMenuItems } = useMenuItems();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const categories = [
    { id: 'all', name: 'ყველა' },
    { id: 'hot-drinks', name: 'ცხელი სასმელები' },
    { id: 'cold-drinks', name: 'ცივი სასმელები' },
    { id: 'food', name: 'საკვები' },
    { id: 'desserts', name: 'დესერტები' }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.nameEn || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCreateNew = () => {
    setIsCreating(true);
    setEditingItem({
      id: '',
      name: '',
      nameEn: '',
      description: '',
      descriptionEn: '',
      price: 0,
      category: 'food' as const,
      image: '',
      isChefRecommended: false,
      allergens: [],
      preparationTime: 10,
      isAvailable: true
    });
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem({ ...item });
    setIsCreating(false);
  };

  const handleSave = async () => {
    if (!editingItem) return;
    
    try {
      if (isCreating) {
        // Add new menu item to Firestore
        const { addMenuItem } = await import('../../services/firestore');
        const newItem = { ...editingItem };
        delete (newItem as any).id; // Remove empty id for new items
        await addMenuItem(newItem);
        console.log('New item created successfully');
      } else {
        // Update existing menu item in Firestore
        const { updateMenuItem } = await import('../../services/firestore');
        const { id, ...updates } = editingItem;
        await updateMenuItem(id, updates);
        console.log('Item updated successfully');
      }
      
      setEditingItem(null);
      setIsCreating(false);
      await refreshMenuItems();
    } catch (error) {
      console.error('Error saving item:', error);
      alert('შეცდომა: ' + (error as Error).message);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('დარწმუნებული ხართ, რომ გსურთ ამ კერძის წაშლა?')) {
      try {
        // Delete menu item from Firestore
        const { deleteMenuItem } = await import('../../services/firestore');
        await deleteMenuItem(id);
        console.log('Item deleted successfully');
        await refreshMenuItems();
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('შეცდომა: ' + (error as Error).message);
      }
    }
  };

  const handleCancel = () => {
    setEditingItem(null);
    setIsCreating(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white rounded-3xl p-6 shadow-lg border border-gray-light/50">
        <div>
          <div className="inline-flex items-center space-x-2 bg-warm/10 text-warm px-3 py-1 rounded-full text-sm font-medium mb-2">
            <span>🍽️</span>
            <span>ადმინ პანელი</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-primary">მენიუს მართვა</h2>
          <p className="text-gray">დამატება, რედაქტირება, წაშლა</p>
        </div>
        
        <motion.button
          onClick={handleCreateNew}
          className="flex items-center space-x-2 bg-gradient-to-r from-accent to-warm text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaPlus />
          <span>ახალი კერძი</span>
        </motion.button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-light/50">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent" />
            <input
              type="text"
              placeholder="მოძებნე კერძი..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-accent/20 rounded-xl focus:border-accent focus:outline-none bg-gray-light/30 focus:bg-white transition-colors"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-accent/20 rounded-xl focus:border-accent focus:outline-none bg-gray-light/30 focus:bg-white transition-colors font-medium"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Items List */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-light/50">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-light/50 to-background/80">
              <tr>
                <th className="text-left p-6 font-semibold text-primary">კერძი</th>
                <th className="text-left p-6 font-semibold text-primary">კატეგორია</th>
                <th className="text-left p-6 font-semibold text-primary">ფასი</th>
                <th className="text-left p-6 font-semibold text-primary">სტატუსი</th>
                <th className="text-right p-6 font-semibold text-primary">მოქმედებები</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
                <motion.tr
                  key={item.id}
                  className="border-t border-gray-light/50 hover:bg-gradient-to-r hover:from-gray-light/20 hover:to-background/30 transition-all duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <td className="p-6">
                    <div>
                      <div className="font-semibold text-primary">{item.name}</div>
                      <div className="text-sm text-gray">{item.nameEn || ''}</div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="px-4 py-2 rounded-xl text-sm bg-gradient-to-r from-accent/20 to-warm/20 text-primary font-medium border border-accent/20">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </td>
                  <td className="p-6">
                    <span className="font-bold text-accent text-lg">₾{item.price}</span>
                  </td>
                  <td className="p-6">
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.isAvailable ? 'bg-success/20 text-success border border-success/30' : 'bg-error/20 text-error border border-error/30'
                      }`}>
                        {item.isAvailable ? 'ხელმისაწვდომი' : 'მიუწვდომელი'}
                      </span>
                      {item.isChefRecommended && (
                        <span className="px-3 py-1 rounded-full text-sm bg-warning/20 text-warning font-medium border border-warning/30">
                          რეკომენდება
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-3 text-accent hover:bg-gradient-to-br hover:from-accent/10 hover:to-warm/10 rounded-xl transition-all duration-200 border border-transparent hover:border-accent/20"
                      >
                        <FaEdit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-3 text-error hover:bg-error/10 rounded-xl transition-all duration-200 border border-transparent hover:border-error/20"
                      >
                        <FaTrash size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gradient-to-br from-gray-light/50 to-background/50 rounded-3xl p-12 mx-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-warm/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl text-gray">🔍</span>
                </div>
                <p className="text-xl text-gray font-medium">
                  მოძებნილი კერძები ვერ მოიძებნა
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-light/50"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 border-b border-gray-light/50 bg-gradient-to-r from-gray-light/30 to-background/50">
              <div className="flex justify-between items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-warm/10 text-warm px-3 py-1 rounded-full text-sm font-medium mb-2">
                    <span>✏️</span>
                    <span>{isCreating ? 'ახალი კერძი' : 'რედაქტირება'}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary">
                    {isCreating ? 'ახალი კერძის დამატება' : 'კერძის რედაქტირება'}
                  </h3>
                </div>
                <button
                  onClick={handleCancel}
                  className="text-gray hover:text-error transition-colors p-2 hover:bg-error/10 rounded-xl"
                >
                  <FaTimes size={20} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  დასახელება
                </label>
                <input
                  type="text"
                  value={editingItem.name}
                  onChange={(e) => setEditingItem({...editingItem, name: e.target.value})}
                  className="w-full px-4 py-3 border border-accent/20 rounded-xl focus:border-accent focus:outline-none bg-gray-light/20 focus:bg-white transition-colors"
                  placeholder="მაგ: ესპრესო"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  აღწერა
                </label>
                <textarea
                  value={editingItem.description}
                  onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 border border-accent/20 rounded-xl focus:border-accent focus:outline-none bg-gray-light/20 focus:bg-white transition-colors resize-none"
                  placeholder="მაგ: კლასიკური ესპრესო პრემიუმ ყავის მარცვლებით"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    ფასი (₾)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={editingItem.price}
                    onChange={(e) => setEditingItem({...editingItem, price: parseFloat(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-accent/20 rounded-xl focus:border-accent focus:outline-none bg-gray-light/20 focus:bg-white transition-colors"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    კატეგორია
                  </label>
                  <select
                    value={editingItem.category}
                    onChange={(e) => setEditingItem({...editingItem, category: e.target.value as any})}
                    className="w-full px-4 py-3 border border-accent/20 rounded-xl focus:border-accent focus:outline-none bg-gray-light/20 focus:bg-white transition-colors"
                  >
                    {categories.filter(cat => cat.id !== 'all').map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Image Upload */}
              <ImageUpload
                currentImage={editingItem.image}
                onImageUploaded={(imageUrl) => setEditingItem({...editingItem, image: imageUrl})}
                folder="menu"
              />

              <div className="bg-gray-light/30 rounded-2xl p-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingItem.isAvailable}
                    onChange={(e) => setEditingItem({...editingItem, isAvailable: e.target.checked})}
                    className="w-5 h-5 rounded border-accent/30 text-accent focus:ring-accent/50"
                  />
                  <span className="text-sm font-medium text-primary">ხელმისაწვდომია</span>
                </label>
              </div>
            </div>

            <div className="p-6 border-t border-gray-light/50 bg-gradient-to-r from-gray-light/20 to-background/30 flex justify-end space-x-3">
              <button
                onClick={handleCancel}
                className="px-6 py-3 border-2 border-gray/20 text-gray rounded-xl hover:bg-gray/10 transition-colors font-medium"
              >
                გაუქმება
              </button>
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent to-warm text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                <FaSave />
                <span>{isCreating ? 'დამატება' : 'შენახვა'}</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MenuManager;