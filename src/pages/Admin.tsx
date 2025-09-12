import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import LoginForm from '../components/admin/LoginForm';
import MenuManager from '../components/admin/MenuManager';

const Admin = () => {
  const { isAuthenticated, loading, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'menu' | 'categories' | 'settings'>('menu');

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-xl text-primary">ჩატვირთვა...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-serif font-bold text-primary text-center mb-8">
              ადმინისტრაციული პანელი
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm border-b border-accent/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-serif font-bold text-primary">
              ადმინისტრაციული პანელი
            </h1>
            <button
              onClick={logout}
              className="px-4 py-2 text-sm bg-error text-white rounded hover:bg-error/90 transition-colors"
            >
              გამოსვლა
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm">
          <button
            onClick={() => setActiveTab('menu')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'menu'
                ? 'bg-primary text-white'
                : 'text-gray hover:bg-accent/10'
            }`}
          >
            მენიუს მართვა
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'categories'
                ? 'bg-primary text-white'
                : 'text-gray hover:bg-accent/10'
            }`}
          >
            კატეგორიები
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'settings'
                ? 'bg-primary text-white'
                : 'text-gray hover:bg-accent/10'
            }`}
          >
            პარამეტრები
          </button>
        </div>

        {activeTab === 'menu' && <MenuManager />}
        {activeTab === 'categories' && (
          <div className="text-center py-12">
            <p className="text-gray">კატეგორიების მართვა მალე დაემატება</p>
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="text-center py-12">
            <p className="text-gray">პარამეტრების მართვა მალე დაემატება</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;