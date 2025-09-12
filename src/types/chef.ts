export interface Chef {
  id: string;
  name: string;
  role: string; // "Head Chef", "Pastry Chef", etc.
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  signatureDishes: string[];
  socialMedia?: {
    instagram?: string;
    facebook?: string;
  };
}