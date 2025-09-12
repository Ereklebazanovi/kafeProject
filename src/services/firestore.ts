import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot
} from 'firebase/firestore';
import { db } from './firebase';
import type { MenuItem, Chef, GalleryItem } from '../types';

// Menu Items
export const menuItemsCollection = collection(db, 'menu-items');
export const chefsCollection = collection(db, 'chefs');
export const galleryCollection = collection(db, 'gallery');
export const settingsCollection = collection(db, 'settings');

// Menu Items CRUD
export const getMenuItems = async (): Promise<MenuItem[]> => {
  const snapshot = await getDocs(menuItemsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as MenuItem[];
};

export const getMenuItemsByCategory = async (category: string): Promise<MenuItem[]> => {
  const q = query(menuItemsCollection, where('category', '==', category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as MenuItem[];
};

export const addMenuItem = async (item: Omit<MenuItem, 'id'>): Promise<string> => {
  const docRef = await addDoc(menuItemsCollection, item);
  return docRef.id;
};

export const updateMenuItem = async (id: string, updates: Partial<MenuItem>): Promise<void> => {
  const docRef = doc(menuItemsCollection, id);
  await updateDoc(docRef, updates);
};

export const deleteMenuItem = async (id: string): Promise<void> => {
  const docRef = doc(menuItemsCollection, id);
  await deleteDoc(docRef);
};

// Chefs CRUD
export const getChefs = async (): Promise<Chef[]> => {
  const snapshot = await getDocs(chefsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Chef[];
};

export const addChef = async (chef: Omit<Chef, 'id'>): Promise<string> => {
  const docRef = await addDoc(chefsCollection, chef);
  return docRef.id;
};

// Gallery CRUD
export const getGalleryItems = async (): Promise<GalleryItem[]> => {
  const snapshot = await getDocs(galleryCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as GalleryItem[];
};

// Real-time subscriptions
export const subscribeToMenuItems = (callback: (items: MenuItem[]) => void) => {
  return onSnapshot(menuItemsCollection, (snapshot) => {
    const items = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as MenuItem[];
    callback(items);
  });
};