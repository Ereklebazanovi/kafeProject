import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaUpload, FaImage, FaTimes, FaCheck } from 'react-icons/fa';
import { uploadImage } from '../../services/storage';
import { validateImageFile } from '../../utils/imageUtils';

interface ImageUploadProps {
  currentImage?: string;
  onImageUploaded: (imageUrl: string) => void;
  folder?: 'menu' | 'chefs' | 'gallery' | 'hero';
}

const ImageUpload = ({ 
  currentImage, 
  onImageUploaded, 
  folder = 'menu' 
}: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file
    const validationError = validateImageFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    // Create preview
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    setError(null);

    // Upload to Firebase
    setUploading(true);
    try {
      const downloadUrl = await uploadImage(file, folder);
      onImageUploaded(downloadUrl);
      console.log('Image uploaded successfully:', downloadUrl);
    } catch (error) {
      console.error('Upload error:', error);
      setError('ფოტოს ატვირთვისას დაფიქსირდა შეცდომა');
      setPreview(currentImage || null);
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    onImageUploaded('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-primary">
        კერძის ფოტო
      </label>

      {/* Upload Area */}
      <div className="relative">
        {preview ? (
          /* Image Preview */
          <div className="relative group">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg border-2 border-accent/20"
            />
            
            {/* Overlay with actions */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-3">
              <motion.button
                type="button"
                onClick={handleClick}
                className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={uploading}
              >
                <FaUpload />
              </motion.button>
              
              <motion.button
                type="button"
                onClick={handleRemoveImage}
                className="bg-error text-white p-3 rounded-full hover:bg-error/80 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={uploading}
              >
                <FaTimes />
              </motion.button>
            </div>

            {/* Upload Progress */}
            {uploading && (
              <div className="absolute inset-0 bg-black/70 rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
                  <p className="text-sm">ატვირთვა...</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Upload Placeholder */
          <motion.div
            onClick={handleClick}
            className="w-full h-48 border-2 border-dashed border-accent/30 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaImage className="text-4xl text-gray/40 mb-4" />
            <p className="text-gray font-medium mb-1">დააჭირე ფოტოს ასარჩევად</p>
            <p className="text-sm text-gray/60">JPG, PNG ან WebP - მაქს. 5MB</p>
          </motion.div>
        )}

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          disabled={uploading}
        />
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          className="bg-error/10 border border-error/20 text-error p-3 rounded-lg text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.div>
      )}

      {/* Success Message */}
      {preview && !uploading && !error && (
        <motion.div
          className="bg-success/10 border border-success/20 text-success p-3 rounded-lg text-sm flex items-center space-x-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaCheck />
          <span>ფოტო წარმატებით აიტვირთა</span>
        </motion.div>
      )}
    </div>
  );
};

export default ImageUpload;