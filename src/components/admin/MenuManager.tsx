import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaSave, FaTimes } from 'react-icons/fa';
import { useMenuItems } from '../../hooks/useFirestore';
import { mockMenuItems } from '../../data/mockData';
import type { MenuItem } from '../../types';

const MenuManager = () => {
  const { menuItems: firebaseItems, loading, refreshMenuItems } = useMenuItems();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // Use Firebase data if available, otherwise fallback to mock data
  const menuItems = firebaseItems.length > 0 ? firebaseItems : mockMenuItems;

  const categories = [
    { id: 'all', name: 'ყველა' },
    { id: 'hot-drinks', name: 'ცხელი სასმელები' },
    { id: 'cold-drinks', name: 'ცივი სასმელები' },
    { id: 'food', name: 'საკვები' },
    { id: 'desserts', name: 'დესერტები' }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.nameEn.toLowerCase().includes(searchTerm.toLowerCase());
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
        // In a real app, this would call addMenuItem from firestore
        console.log('Creating new item:', editingItem);
      } else {
        // In a real app, this would call updateMenuItem from firestore
        console.log('Updating item:', editingItem);
      }
      
      setEditingItem(null);
      setIsCreating(false);
      await refreshMenuItems();
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('დარწმუნებული ხართ, რომ გსურთ ამ კერძის წაშლა?')) {
      try {
        // In a real app, this would call deleteMenuItem from firestore
        console.log('Deleting item:', id);
        await refreshMenuItems();
      } catch (error) {
        console.error('Error deleting item:', error);
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-primary">მენიუს მართვა</h2>
          <p className="text-gray">დაამატე, რედაქტირება და წაშალე მენიუს ნივთები</p>
        </div>
        
        <motion.button
          onClick={handleCreateNew}
          className="flex items-center space-x-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaPlus />
          <span>ახალი კერძი</span>
        </motion.button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray" />
            <input
              type="text"
              placeholder="მოძებნე კერძი..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-accent/20 rounded-lg focus:border-primary focus:outline-none"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-accent/20 rounded-lg focus:border-primary focus:outline-none"
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
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-background">
              <tr>
                <th className="text-left p-4 font-medium text-primary">კერძი</th>
                <th className="text-left p-4 font-medium text-primary">კატეგორია</th>
                <th className="text-left p-4 font-medium text-primary">ფასი</th>
                <th className="text-left p-4 font-medium text-primary">სტატუსი</th>
                <th className="text-right p-4 font-medium text-primary">მოქმედებები</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
                <motion.tr
                  key={item.id}
                  className="border-t border-accent/10 hover:bg-background/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <td className="p-4">
                    <div>
                      <div className="font-medium text-primary">{item.name}</div>
                      <div className="text-sm text-gray">{item.nameEn}</div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-accent/10 text-accent">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="font-medium text-primary">₾{item.price}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-1">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.isAvailable ? 'bg-success/10 text-success' : 'bg-error/10 text-error'
                      }`}>
                        {item.isAvailable ? 'ხელმისაწვდომი' : 'მიუწვდომელი'}
                      </span>
                      {item.isChefRecommended && (
                        <span className="px-2 py-1 rounded-full text-xs bg-warning/10 text-warning">
                          რეკომენდება
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 text-error hover:bg-error/10 rounded-lg transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-gray">
              მოძებნილი კერძები ვერ მოიძებნა
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="p-6 border-b border-accent/10">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-serif font-bold text-primary">
                  {isCreating ? 'ახალი კერძის დამატება' : 'კერძის რედაქტირება'}
                </h3>
                <button
                  onClick={handleCancel}
                  className="text-gray hover:text-error transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">
                    დასახელება (ქართული)
                  </label>
                  <input
                    type="text"
                    value={editingItem.name}
                    onChange={(e) => setEditingItem({...editingItem, name: e.target.value})}
                    className="w-full px-3 py-2 border border-accent/20 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-1">
                    დასახელება (ინგლისური)
                  </label>
                  <input
                    type="text"
                    value={editingItem.nameEn}
                    onChange={(e) => setEditingItem({...editingItem, nameEn: e.target.value})}
                    className="w-full px-3 py-2 border border-accent/20 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  აღწერა (ქართული)
                </label>
                <textarea
                  value={editingItem.description}
                  onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-accent/20 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">
                    ფასი (₾)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={editingItem.price}
                    onChange={(e) => setEditingItem({...editingItem, price: parseFloat(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-accent/20 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-1">
                    კატეგორია
                  </label>
                  <select
                    value={editingItem.category}
                    onChange={(e) => setEditingItem({...editingItem, category: e.target.value as any})}
                    className="w-full px-3 py-2 border border-accent/20 rounded-lg focus:border-primary focus:outline-none"
                  >
                    {categories.filter(cat => cat.id !== 'all').map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-1">
                    დრო (წუთი)
                  </label>
                  <input
                    type="number"
                    value={editingItem.preparationTime}
                    onChange={(e) => setEditingItem({...editingItem, preparationTime: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-accent/20 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={editingItem.isAvailable}
                    onChange={(e) => setEditingItem({...editingItem, isAvailable: e.target.checked})}
                    className="rounded border-accent/20 focus:border-primary"
                  />
                  <span className="text-sm text-primary">ხელმისაწვდომია</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={editingItem.isChefRecommended}
                    onChange={(e) => setEditingItem({...editingItem, isChefRecommended: e.target.checked})}
                    className="rounded border-accent/20 focus:border-primary"
                  />
                  <span className="text-sm text-primary">შეფის რეკომენდაცია</span>
                </label>
              </div>
            </div>

            <div className="p-6 border-t border-accent/10 flex justify-end space-x-3">
              <button
                onClick={handleCancel}
                className="px-6 py-2 border border-gray/20 text-gray rounded-lg hover:bg-gray/5 transition-colors"
              >
                გაუქმება
              </button>
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 px-6 py-2 bg-primary hover:bg-secondary text-white rounded-lg transition-colors"
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