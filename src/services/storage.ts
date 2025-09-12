import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from './firebase';

export const uploadImage = async (
  file: File,
  folder: 'menu' | 'chefs' | 'gallery' | 'hero'
): Promise<string> => {
  const timestamp = Date.now();
  const fileName = `${timestamp}_${file.name}`;
  const storageRef = ref(storage, `${folder}/${fileName}`);
  
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  
  return downloadURL;
};

export const deleteImage = async (url: string): Promise<void> => {
  const imageRef = ref(storage, url);
  await deleteObject(imageRef);
};