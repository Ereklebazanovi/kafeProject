import { useState, useEffect } from 'react';
import { getMenuItems, getChefs, getGalleryItems, subscribeToMenuItems } from '../services/firestore';
import type { MenuItem, Chef, GalleryItem } from '../types';

export const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToMenuItems((items) => {
      setMenuItems(items);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const refreshMenuItems = async () => {
    try {
      setLoading(true);
      const items = await getMenuItems();
      setMenuItems(items);
      setError(null);
    } catch (err) {
      setError('მენიუს ჩატვირთვისას დაფიქსირდა შეცდომა');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { menuItems, loading, error, refreshMenuItems };
};

export const useChefs = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const data = await getChefs();
        setChefs(data);
        setError(null);
      } catch (err) {
        setError('შეფების ჩატვირთვისას დაფიქსირდა შეცდომა');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchChefs();
  }, []);

  return { chefs, loading, error };
};

export const useGallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await getGalleryItems();
        setGalleryItems(data);
        setError(null);
      } catch (err) {
        setError('გალერეის ჩატვირთვისას დაფიქსირდა შეცდომა');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return { galleryItems, loading, error };
};