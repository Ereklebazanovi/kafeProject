import type { Chef, MenuItem, GalleryItem } from '../types';

export const mockChefs: Chef[] = [
  {
    id: '1',
    name: 'ნიკა ჯანელიძე',
    role: 'მთავარი შეფი',
    specialty: 'ქართული და თანამედროვე სამზარეულო',
    experience: '15 წლიანი გამოცდილება',
    image: '/images/chefs/nika-janlidze.jpg',
    bio: 'ნიკა არის ქართული ტრადიციული სამზარეულოს ექსპერტი, რომელიც აერთიანებს ძველ რეცეპტებს თანამედროვე ტექნიკებთან.',
    signatureDishes: ['ხინკალი ტრიუფელით', 'თანამედროვე მწვადი', 'ნაპოლეონის ტორტი ნაძვის თოვლით'],
    socialMedia: {
      instagram: '@chefnika.ge',
      facebook: 'nikajanelidze.chef'
    }
  },
  {
    id: '2',
    name: 'მარიამ ალექსიძე',
    role: 'საკონდიტრო შეფი',
    specialty: 'ავტორული დესერტები და ტორტები',
    experience: '8 წლიანი გამოცდილება',
    image: '/images/chefs/mariam-aleksidze.jpg',
    bio: 'მარიამი სპეციალიზირებულია ტრადიციული ქართული სიტკბოების თანამედროვე ინტერპრეტაციაში.',
    signatureDishes: ['ჩურჩხელას მუსი', 'თოვლის კუბიკები ღია შაქრით', 'ლავანდის კრემი ბრიული'],
    socialMedia: {
      instagram: '@mariam.sweets'
    }
  },
  {
    id: '3',
    name: 'დავით მაზმიშვილი',
    role: 'ბარისტა',
    specialty: 'სპეციალური ყავის მომზადება',
    experience: '6 წლიანი გამოცდილება',
    image: '/images/chefs/davit-mazmishvili.jpg',
    bio: 'დავითი არის პროფესიონალი ბარისტა, რომელიც მუშაობს საუკეთესო ადგილობრივ და იმპორტირებულ ყავასთან.',
    signatureDishes: ['ესპრესო კონ პანა', 'კოლდ ბრუ ფხვნილი', 'ღია ყავა ქართული თაფლით'],
    socialMedia: {
      instagram: '@davit.coffee'
    }
  },
  {
    id: '4',
    name: 'სალომე ქავთარაძე',
    role: 'სუს-შეფი',
    specialty: 'ზღვის პროდუქტები და სალათები',
    experience: '10 წლიანი გამოცდილება',
    image: '/images/chefs/salome-kavtaradze.jpg',
    bio: 'სალომე სპეციალიზირებულია სალათების და ზღვის პროდუქტების შემოქმედებითი პრეზენტაციაში.',
    signatureDishes: ['ტუნას ტარტარი', 'ზვიგენი კრემითა და კაულით', 'სეზონური ზელენი სალათი'],
    socialMedia: {
      instagram: '@salome.sea'
    }
  },
  {
    id: '5',
    name: 'გიორგი წამალაშვილი',
    role: 'მწვადის ოსტატი',
    specialty: 'შქაფული და მწვადი',
    experience: '20 წლიანი გამოცდილება',
    image: '/images/chefs/giorgi-tsamalashvili.jpg',
    bio: 'გიორგი არის მწვადის ნამდვილი ხელოსანი, რომელიც იცავს ქართული მწვადის ყველა ტრადიციას.',
    signatureDishes: ['ღორის მწვადი', 'მოწამვლული შქაფული', 'ღვინო-ნიგვზის მწვადი'],
    socialMedia: {
      facebook: 'giorgi.meat.master'
    }
  }
];

export const mockMenuItems: MenuItem[] = [
  // Hot Drinks
  {
    id: '1',
    name: 'ესპრესო',
    nameEn: 'Espresso',
    description: 'კლასიკური ესპრესო პრემიუმ ქართული ყავის მარცვლებით',
    descriptionEn: 'Classic espresso with premium Georgian coffee beans',
    price: 3.50,
    category: 'hot-drinks',
    image: '/images/menu/espresso.jpg',
    isChefRecommended: true,
    allergens: [],
    preparationTime: 2,
    isAvailable: true,
    nutritionalInfo: {
      calories: 5,
      protein: 0.2,
      carbs: 0,
      fat: 0
    }
  },
  {
    id: '2',
    name: 'კაპუჩინო',
    nameEn: 'Cappuccino',
    description: 'კრემიანი კაპუჩინო ხელნაკეთი ფხვნილით და დამატებული შინამონით',
    descriptionEn: 'Creamy cappuccino with handmade foam and cinnamon',
    price: 4.50,
    category: 'hot-drinks',
    image: '/images/menu/cappuccino.jpg',
    isChefRecommended: false,
    allergens: ['რძე'],
    preparationTime: 4,
    isAvailable: true,
    nutritionalInfo: {
      calories: 120,
      protein: 6,
      carbs: 12,
      fat: 5
    }
  },
  {
    id: '3',
    name: 'ქართული ყავა თაფლით',
    nameEn: 'Georgian Coffee with Honey',
    description: 'ტრადიციული ქართული ყავა მთის თაფლით და თოვდაშეფენილი ნიგოზით',
    descriptionEn: 'Traditional Georgian coffee with mountain honey and chopped walnuts',
    price: 5.00,
    category: 'hot-drinks',
    image: '/images/menu/georgian-coffee-honey.jpg',
    isChefRecommended: true,
    allergens: ['ნიგოზი'],
    preparationTime: 5,
    isAvailable: true
  },
  {
    id: '4',
    name: 'მწვანე ჩაი',
    nameEn: 'Green Tea',
    description: 'ქართული მწვანე ჩაი ლაიმის ფოთლებით',
    descriptionEn: 'Georgian green tea with lime leaves',
    price: 3.00,
    category: 'hot-drinks',
    image: '/images/menu/green-tea.jpg',
    isChefRecommended: false,
    allergens: [],
    preparationTime: 3,
    isAvailable: true
  },

  // Cold Drinks
  {
    id: '5',
    name: 'ყინულოვანი ლატე',
    nameEn: 'Iced Latte',
    description: 'გრილი ლატე ყინულით და ვანილის არომატით',
    descriptionEn: 'Cold latte with ice and vanilla flavor',
    price: 4.75,
    category: 'cold-drinks',
    image: '/images/menu/iced-latte.jpg',
    isChefRecommended: false,
    allergens: ['რძე'],
    preparationTime: 3,
    isAvailable: true
  },
  {
    id: '6',
    name: 'ლიმონადა',
    nameEn: 'Lemonade',
    description: 'სახლური ლიმონადა ახალი ლიმონებით და პიტნით',
    descriptionEn: 'Homemade lemonade with fresh lemons and mint',
    price: 3.50,
    category: 'cold-drinks',
    image: '/images/menu/lemonade.jpg',
    isChefRecommended: true,
    allergens: [],
    preparationTime: 2,
    isAvailable: true
  },
  {
    id: '7',
    name: 'თაბარჯის შავი',
    nameEn: 'Blueberry Smoothie',
    description: 'თაბარჯის შავით, იოგურტითა და თაფლით მომზადებული სმუზი',
    descriptionEn: 'Smoothie made with blueberries, yogurt and honey',
    price: 5.50,
    category: 'cold-drinks',
    image: '/images/menu/blueberry-smoothie.jpg',
    isChefRecommended: true,
    allergens: ['რძე'],
    preparationTime: 4,
    isAvailable: true
  },

  // Food
  {
    id: '8',
    name: 'ხინკალი',
    nameEn: 'Khinkali',
    description: 'ქართული ტრადიციული ხინკალი (6 ცალი) ხორცით და მწვანილით',
    descriptionEn: 'Georgian traditional dumplings (6 pieces) with meat and herbs',
    price: 12.00,
    category: 'food',
    image: '/images/menu/khinkali.jpg',
    isChefRecommended: true,
    allergens: ['წითელ ვარდისფერი'],
    preparationTime: 15,
    isAvailable: true,
    nutritionalInfo: {
      calories: 480,
      protein: 25,
      carbs: 45,
      fat: 20
    }
  },
  {
    id: '9',
    name: 'ხაჩაპური',
    nameEn: 'Khachapuri',
    description: 'ქართული ტრადიციული ხაჩაპური გურული ყველით',
    descriptionEn: 'Georgian traditional cheese bread with Guria cheese',
    price: 8.00,
    category: 'food',
    image: '/images/menu/khachapuri.jpg',
    isChefRecommended: true,
    allergens: ['რძე', 'წითელ ვარდისფერი'],
    preparationTime: 20,
    isAvailable: true
  },
  {
    id: '10',
    name: 'აჯარული ხაჩაპური',
    nameEn: 'Adjarian Khachapuri',
    description: 'ნავის ფორმის ხაჩაპური კვერცხითა და ტკბილი კარაქით',
    descriptionEn: 'Boat-shaped cheese bread with egg and butter',
    price: 10.00,
    category: 'food',
    image: '/images/menu/adjarian-khachapuri.jpg',
    isChefRecommended: true,
    allergens: ['რძე', 'კვერცხი', 'წითელ ვარდისფერი'],
    preparationTime: 25,
    isAvailable: true
  },
  {
    id: '11',
    name: 'ცეზარის სალათი',
    nameEn: 'Caesar Salad',
    description: 'კლასიკური ცეზარის სალათი გრილობისა და კრუტონებით',
    descriptionEn: 'Classic Caesar salad with chicken and croutons',
    price: 9.00,
    category: 'food',
    image: '/images/menu/caesar-salad.jpg',
    isChefRecommended: false,
    allergens: ['რძე', 'კვერცხი', 'წითელ ვარდისფერი'],
    preparationTime: 8,
    isAvailable: true
  },
  {
    id: '12',
    name: 'მწვადი',
    nameEn: 'Mtsvadi (Georgian BBQ)',
    description: 'ღორის მწვადი ხისძეებად მოხარშული ვენით და მწვანილით',
    descriptionEn: 'Pork BBQ grilled on wood with wine and herbs',
    price: 15.00,
    category: 'food',
    image: '/images/menu/mtsvadi.jpg',
    isChefRecommended: true,
    allergens: [],
    preparationTime: 30,
    isAvailable: true
  },

  // Desserts
  {
    id: '13',
    name: 'ნაპოლეონის ტორტი',
    nameEn: 'Napoleon Cake',
    description: 'კლასიკური ნაპოლეონის ტორტი სახლური ღია კრემით',
    descriptionEn: 'Classic Napoleon cake with homemade custard cream',
    price: 6.50,
    category: 'desserts',
    image: '/images/menu/napoleon-cake.jpg',
    isChefRecommended: true,
    allergens: ['რძე', 'კვერცხი', 'წითელ ვარდისფერი'],
    preparationTime: 5,
    isAvailable: true
  },
  {
    id: '14',
    name: 'ჩურჩხელა',
    nameEn: 'Churchkhela',
    description: 'ტრადიციული ქართული ჩურჩხელა ნიგოზითა და ბადაგის წვენით',
    descriptionEn: 'Traditional Georgian churchkhela with walnuts and grape juice',
    price: 4.00,
    category: 'desserts',
    image: '/images/menu/churchkhela.jpg',
    isChefRecommended: true,
    allergens: ['ნიგოზი'],
    preparationTime: 1,
    isAvailable: true
  },
  {
    id: '15',
    name: 'თაფლიანი შაღაღი',
    nameEn: 'Honey Cake',
    description: 'ზამზამების საზ ღრუბლები ღია თაფლით და ნიგოზით',
    descriptionEn: 'Layered honey cake with whipped cream and walnuts',
    price: 5.50,
    category: 'desserts',
    image: '/images/menu/honey-cake.jpg',
    isChefRecommended: false,
    allergens: ['რძე', 'კვერცხი', 'ნიგოზი', 'წითელ ვარდისფერი'],
    preparationTime: 5,
    isAvailable: true
  }
];

export const mockGalleryItems: GalleryItem[] = [
  {
    id: '1',
    image: '/images/gallery/interior-1.jpg',
    title: 'მნიშვნელოვანი ზეაული ფურნიტურა',
    description: 'თბილი და მშვიდი ატმოსფერო ქართული მოდივით',
    category: 'interior'
  },
  {
    id: '2',
    image: '/images/gallery/interior-2.jpg',
    title: 'ღია ოთახი პანორამული ხოჩაქით',
    description: 'ღია ოთახი პანორამული ხედებით ქალაქზე',
    category: 'interior'
  },
  {
    id: '3',
    image: '/images/gallery/food-1.jpg',
    title: 'საუკეთესო ხინკალი ძველი რეცეპტით',
    description: 'სახლურად მომზადებული ხინკალი მარმარილოს ბაღში',
    category: 'food'
  },
  {
    id: '4',
    image: '/images/gallery/food-2.jpg',
    title: 'ღია კერძების ინსისტრუქცია',
    description: 'შეფის რეკომენდები ღია კერძების მევახშე შოვაში',
    category: 'food'
  },
  {
    id: '5',
    image: '/images/gallery/staff-1.jpg',
    title: 'პროფესიონალური გუნდი',
    description: 'ჩვენი გუნდი ყოვულდღიურად მუშაობს თქვენი კმაყოფილებისთვის',
    category: 'staff'
  },
  {
    id: '6',
    image: '/images/gallery/events-1.jpg',
    title: 'შემოდგომის ყავის ღონისძიება',
    description: 'სპეციალური ღონისძიება ადგილობრივი ყავისა და დესერტების გემოვნებისთვის',
    category: 'events'
  },
  {
    id: '7',
    image: '/images/gallery/interior-3.jpg',
    title: 'საჩუქრების კუთხე',
    description: 'კუთხე სუვენირებისა და ქართული ტრადიციული ნაწარმებისთვის',
    category: 'interior'
  },
  {
    id: '8',
    image: '/images/gallery/food-3.jpg',
    title: 'ნამღები დესერტები',
    description: 'სახლურად მომზადებული დესერტები მჟავეულ იელემენტებით',
    category: 'food'
  },
  {
    id: '9',
    image: '/images/gallery/staff-2.jpg',
    title: 'მეგზურო ბარისტა მუშაობისას',
    description: 'ჩვენი გამოცდილი ბარისტა ტერასას კოექცია უმახვილავს',
    category: 'staff'
  },
  {
    id: '10',
    image: '/images/gallery/events-2.jpg',
    title: 'მუსიკალური საღამო',
    description: 'ყოველ კვირას მუსიკალური საღამოები ჯაზითა და ქართული სიმღერებით',
    category: 'events'
  }
];

export const cafeInfo = {
  name: 'ქართული კაფე "ალუბანი"',
  nameEn: 'Georgian Cafe "Alubani"',
  description: 'ტრადიციული ქართული სამზარეულო თანამედროვე გემოთი',
  descriptionEn: 'Traditional Georgian cuisine with modern flavors',
  address: 'რუსთაველის გამზირი 25, თბილისი',
  addressEn: 'Rustaveli Avenue 25, Tbilisi',
  phone: '+995 32 299 99 99',
  email: 'info@alubani.ge',
  workingHours: {
    monday: '09:00 - 22:00',
    tuesday: '09:00 - 22:00',
    wednesday: '09:00 - 22:00',
    thursday: '09:00 - 22:00',
    friday: '09:00 - 23:00',
    saturday: '10:00 - 23:00',
    sunday: '10:00 - 21:00'
  }
};