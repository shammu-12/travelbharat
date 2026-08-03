const states = [
      {
    id: 1,
    name: "Andhra Pradesh",
    capital: "Amaravati",
    language: "Telugu",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
    description: "Famous for Tirupati Temple, Araku Valley and Visakhapatnam beaches.",
    touristPlaces: [
      "Tirupati",
      "Araku Valley",
      "Visakhapatnam",
      "Papikondalu",
      "Lepakshi"
    ],
    map: "https://www.google.com/maps?q=Andhra+Pradesh&output=embed",
  },

  {
    id: 2,
    name: "Arunachal Pradesh",
    capital: "Itanagar",
    language: "English",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Known for mountains and monasteries.",
    touristPlaces: [
      "Tawang",
      "Ziro Valley",
      "Bomdila",
      "Namdapha National Park"
    ],
    map: "https://www.google.com/maps?q=Arunachal+Pradesh&output=embed",
  },

  {
    id: 3,
    name: "Assam",
    capital: "Dispur",
    language: "Assamese",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Famous for tea gardens and Kaziranga National Park.",
    touristPlaces: [
      "Kaziranga",
      "Majuli",
      "Kamakhya Temple",
      "Manas National Park"
    ],
    map: "https://www.google.com/maps?q=Assam&output=embed",
  },

  {
    id: 4,
    name: "Bihar",
    capital: "Patna",
    language: "Hindi",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    description: "Land of Nalanda and Bodh Gaya.",
    touristPlaces: [
      "Bodh Gaya",
      "Nalanda",
      "Rajgir",
      "Patna Sahib"
    ],
    map: "https://www.google.com/maps?q=Bihar&output=embed",
  },

  {
    id: 5,
    name: "Chhattisgarh",
    capital: "Raipur",
    language: "Hindi",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "Known for waterfalls and forests.",
    touristPlaces: [
      "Chitrakote Falls",
      "Tirathgarh Falls",
      "Barnawapara"
    ],
    map: "https://www.google.com/maps?q=Chhattisgarh&output=embed",
  },

  {
    id: 6,
    name: "Goa",
    capital: "Panaji",
    language: "Konkani",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    description: "Popular for beaches and nightlife.",
    touristPlaces: [
      "Baga Beach",
      "Calangute",
      "Dudhsagar Falls",
      "Fort Aguada"
    ],
    map: "https://www.google.com/maps?q=Goa&output=embed",
  },

  {
    id: 7,
    name: "Gujarat",
    capital: "Gandhinagar",
    language: "Gujarati",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    description: "Home of the Statue of Unity.",
    touristPlaces: [
      "Statue of Unity",
      "Gir Forest",
      "Somnath Temple",
      "Dwarka"
    ],
    map: "https://www.google.com/maps?q=Gujarat&output=embed",
  },

  {
    id: 8,
    name: "Haryana",
    capital: "Chandigarh",
    language: "Hindi",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Known for agriculture and history.",
    touristPlaces: [
      "Kurukshetra",
      "Pinjore Garden",
      "Sultanpur Bird Sanctuary"
    ],
    map: "https://www.google.com/maps?q=Haryana&output=embed",
  },

  {
    id: 9,
    name: "Himachal Pradesh",
    capital: "Shimla",
    language: "Hindi",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    description: "Famous for snowy mountains.",
    touristPlaces: [
      "Shimla",
      "Manali",
      "Dharamshala",
      "Spiti Valley"
    ],
    map: "https://www.google.com/maps?q=Himachal+Pradesh&output=embed",
  },

  {
    id: 10,
    name: "Jharkhand",
    capital: "Ranchi",
    language: "Hindi",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Known for waterfalls and forests.",
    touristPlaces: [
      "Dassam Falls",
      "Hundru Falls",
      "Betla National Park"
    ],
    map: "https://www.google.com/maps?q=Jharkhand&output=embed",
  },

  {
    id: 11,
    name: "Karnataka",
    capital: "Bengaluru",
    language: "Kannada",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2",
    description: "Famous for Mysore Palace and Hampi.",
    touristPlaces: [
      "Mysore Palace",
      "Hampi",
      "Coorg",
      "Jog Falls"
    ],
    map: "https://www.google.com/maps?q=Karnataka&output=embed",
  },

  {
    id: 12,
    name: "Kerala",
    capital: "Thiruvananthapuram",
    language: "Malayalam",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    description: "God's Own Country.",
    touristPlaces: [
      "Munnar",
      "Alleppey",
      "Kochi",
      "Wayanad"
    ],
    map: "https://www.google.com/maps?q=Kerala&output=embed",
  },
    {
    id: 13,
    name: "Madhya Pradesh",
    capital: "Bhopal",
    language: "Hindi",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Known as the Heart of India.",
    touristPlaces: [
      "Khajuraho",
      "Sanchi",
      "Kanha National Park",
      "Bhimbetka"
    ],
    map: "https://www.google.com/maps?q=Madhya+Pradesh&output=embed",
  },

  {
    id: 14,
    name: "Maharashtra",
    capital: "Mumbai",
    language: "Marathi",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    description: "Home to Mumbai and Ajanta-Ellora Caves.",
    touristPlaces: [
      "Gateway of India",
      "Ajanta Caves",
      "Ellora Caves",
      "Lonavala"
    ],
    map: "https://www.google.com/maps?q=Maharashtra&output=embed",
  },

  {
    id: 15,
    name: "Manipur",
    capital: "Imphal",
    language: "Manipuri",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "Known for Loktak Lake.",
    touristPlaces: [
      "Loktak Lake",
      "Kangla Fort",
      "Keibul Lamjao National Park"
    ],
    map: "https://www.google.com/maps?q=Manipur&output=embed",
  },

  {
    id: 16,
    name: "Meghalaya",
    capital: "Shillong",
    language: "English",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Famous for living root bridges.",
    touristPlaces: [
      "Shillong",
      "Cherrapunji",
      "Dawki",
      "Mawsynram"
    ],
    map: "https://www.google.com/maps?q=Meghalaya&output=embed",
  },

  {
    id: 17,
    name: "Mizoram",
    capital: "Aizawl",
    language: "Mizo",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Known for hills and forests.",
    touristPlaces: [
      "Aizawl",
      "Vantawng Falls",
      "Reiek Peak"
    ],
    map: "https://www.google.com/maps?q=Mizoram&output=embed",
  },

  {
    id: 18,
    name: "Nagaland",
    capital: "Kohima",
    language: "English",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "Known for the Hornbill Festival.",
    touristPlaces: [
      "Kohima",
      "Dzukou Valley",
      "Mon District"
    ],
    map: "https://www.google.com/maps?q=Nagaland&output=embed",
  },

  {
    id: 19,
    name: "Odisha",
    capital: "Bhubaneswar",
    language: "Odia",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    description: "Home to Jagannath Temple.",
    touristPlaces: [
      "Puri",
      "Konark",
      "Chilika Lake",
      "Bhubaneswar"
    ],
    map: "https://www.google.com/maps?q=Odisha&output=embed",
  },

  {
    id: 20,
    name: "Punjab",
    capital: "Chandigarh",
    language: "Punjabi",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Known for the Golden Temple.",
    touristPlaces: [
      "Golden Temple",
      "Jallianwala Bagh",
      "Wagah Border"
    ],
    map: "https://www.google.com/maps?q=Punjab&output=embed",
  },

  {
    id: 21,
    name: "Rajasthan",
    capital: "Jaipur",
    language: "Hindi",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    description: "Land of forts and palaces.",
    touristPlaces: [
      "Jaipur",
      "Udaipur",
      "Jaisalmer",
      "Mount Abu"
    ],
    map: "https://www.google.com/maps?q=Rajasthan&output=embed",
  },

  {
    id: 22,
    name: "Sikkim",
    capital: "Gangtok",
    language: "Nepali",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    description: "Known for Kanchenjunga.",
    touristPlaces: [
      "Gangtok",
      "Tsomgo Lake",
      "Nathula Pass"
    ],
    map: "https://www.google.com/maps?q=Sikkim&output=embed",
  },

  {
    id: 23,
    name: "Tamil Nadu",
    capital: "Chennai",
    language: "Tamil",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    description: "Famous for temples and beaches.",
    touristPlaces: [
      "Chennai",
      "Ooty",
      "Madurai",
      "Kanyakumari"
    ],
    map: "https://www.google.com/maps?q=Tamil+Nadu&output=embed",
  },

  {
    id: 24,
    name: "Telangana",
    capital: "Hyderabad",
    language: "Telugu",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
    description: "Known for Charminar and Golconda Fort.",
    touristPlaces: [
      "Charminar",
      "Golconda Fort",
      "Ramoji Film City",
      "Yadadri"
    ],
    map: "https://www.google.com/maps?q=Telangana&output=embed",
  },
    {
    id: 25,
    name: "Tripura",
    capital: "Agartala",
    language: "Bengali",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Known for palaces and temples.",
    touristPlaces: ["Ujjayanta Palace", "Neermahal", "Sepahijala Wildlife Sanctuary"],
    map: "https://www.google.com/maps?q=Tripura&output=embed",
  },

  {
    id: 26,
    name: "Uttar Pradesh",
    capital: "Lucknow",
    language: "Hindi",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    description: "Home of the Taj Mahal.",
    touristPlaces: ["Taj Mahal", "Varanasi", "Ayodhya", "Fatehpur Sikri"],
    map: "https://www.google.com/maps?q=Uttar+Pradesh&output=embed",
  },

  {
    id: 27,
    name: "Uttarakhand",
    capital: "Dehradun",
    language: "Hindi",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    description: "Known for the Himalayas.",
    touristPlaces: ["Mussoorie", "Nainital", "Kedarnath", "Badrinath"],
    map: "https://www.google.com/maps?q=Uttarakhand&output=embed",
  },

  {
    id: 28,
    name: "West Bengal",
    capital: "Kolkata",
    language: "Bengali",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Famous for Kolkata and Darjeeling.",
    touristPlaces: ["Darjeeling", "Sundarbans", "Victoria Memorial", "Howrah Bridge"],
    map: "https://www.google.com/maps?q=West+Bengal&output=embed",
  },

  {
    id: 29,
    name: "Andaman and Nicobar Islands",
    capital: "Port Blair",
    language: "Hindi",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Beautiful islands with beaches.",
    touristPlaces: ["Radhanagar Beach", "Cellular Jail", "Ross Island"],
    map: "https://www.google.com/maps?q=Andaman+and+Nicobar+Islands&output=embed",
  },

  {
    id: 30,
    name: "Chandigarh",
    capital: "Chandigarh",
    language: "Hindi",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "India's first planned city.",
    touristPlaces: ["Rock Garden", "Sukhna Lake", "Rose Garden"],
    map: "https://www.google.com/maps?q=Chandigarh&output=embed",
  },

  {
    id: 31,
    name: "Dadra and Nagar Haveli and Daman and Diu",
    capital: "Daman",
    language: "Gujarati",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    description: "Known for beaches.",
    touristPlaces: ["Devka Beach", "Jampore Beach", "Diu Fort"],
    map: "https://www.google.com/maps?q=Daman&output=embed",
  },

  {
    id: 32,
    name: "Delhi",
    capital: "New Delhi",
    language: "Hindi",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    description: "Capital of India.",
    touristPlaces: ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple"],
    map: "https://www.google.com/maps?q=Delhi&output=embed",
  },

  {
    id: 33,
    name: "Jammu and Kashmir",
    capital: "Srinagar (Summer), Jammu (Winter)",
    language: "Kashmiri",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Paradise on Earth.",
    touristPlaces: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
    map: "https://www.google.com/maps?q=Jammu+and+Kashmir&output=embed",
  },

  {
    id: 34,
    name: "Ladakh",
    capital: "Leh",
    language: "Ladakhi",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    description: "Famous for mountains and lakes.",
    touristPlaces: ["Pangong Lake", "Nubra Valley", "Leh Palace"],
    map: "https://www.google.com/maps?q=Ladakh&output=embed",
  },

  {
    id: 35,
    name: "Lakshadweep",
    capital: "Kavaratti",
    language: "Malayalam",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Coral islands in the Arabian Sea.",
    touristPlaces: ["Agatti Island", "Bangaram Island", "Kavaratti"],
    map: "https://www.google.com/maps?q=Lakshadweep&output=embed",
  },

  {
    id: 36,
    name: "Puducherry",
    capital: "Puducherry",
    language: "Tamil",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    description: "Known for French architecture.",
    touristPlaces: ["Promenade Beach", "Auroville", "Paradise Beach"],
    map: "https://www.google.com/maps?q=Puducherry&output=embed",
  }
];

export default states;