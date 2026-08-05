const states = [
{
  id: 1,
  name: "Andhra Pradesh",
  capital: "Amaravati",
  language: "Telugu",
  population: "53 Million",
  image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
  description:
    "Famous for Tirupati Temple, Araku Valley and Visakhapatnam beaches.",
  places: [
    {
      name: "Tirupati",
      image: "https://picsum.photos/400/250?1",
    },
    {
      name: "Araku Valley",
      image: "https://picsum.photos/400/250?2",
    },
    {
      name: "Visakhapatnam",
      image: "https://picsum.photos/400/250?3",
    },
    {
      name: "Papikondalu",
      image: "https://picsum.photos/400/250?4",
    },
    {
      name: "Lepakshi",
      image: "https://picsum.photos/400/250?5",
    },
  ],
  map: "https://www.google.com/maps?q=Andhra+Pradesh&output=embed",
},
{
  id: 2,
  name: "Arunachal Pradesh",
  capital: "Itanagar",
  language: "English",
  population: "1.5 Million",
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  description: "Known for mountains and monasteries.",
  places: [
    {
      name: "Tawang",
      image: "https://picsum.photos/400/250?6",
    },
    {
      name: "Ziro Valley",
      image: "https://picsum.photos/400/250?7",
    },
    {
      name: "Bomdila",
      image: "https://picsum.photos/400/250?8",
    },
    {
      name: "Namdapha National Park",
      image: "https://picsum.photos/400/250?9",
    },
  ],
  map: "https://www.google.com/maps?q=Arunachal+Pradesh&output=embed",
},
{
  id: 3,
  name: "Assam",
  capital: "Dispur",
  language: "Assamese",
  population: "35 Million",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  description: "Famous for tea gardens and Kaziranga National Park.",
  places: [
    {
      name: "Kaziranga",
      image: "https://picsum.photos/400/250?10",
    },
    {
      name: "Majuli",
      image: "https://picsum.photos/400/250?11",
    },
    {
      name: "Kamakhya Temple",
      image: "https://picsum.photos/400/250?12",
    },
    {
      name: "Manas National Park",
      image: "https://picsum.photos/400/250?13",
    },
  ],
  map: "https://www.google.com/maps?q=Assam&output=embed",
},
{
  id: 4,
  name: "Bihar",
  capital: "Patna",
  language: "Hindi",
  population: "128 Million",
  image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
  description: "Land of Nalanda and Bodh Gaya.",
  places: [
    {
      name: "Bodh Gaya",
      image: "https://picsum.photos/400/250?14",
    },
    {
      name: "Nalanda",
      image: "https://picsum.photos/400/250?15",
    },
    {
      name: "Rajgir",
      image: "https://picsum.photos/400/250?16",
    },
    {
      name: "Patna Sahib",
      image: "https://picsum.photos/400/250?17",
    },
  ],
  map: "https://www.google.com/maps?q=Bihar&output=embed",
},
{
  id: 5,
  name: "Chhattisgarh",
  capital: "Raipur",
  language: "Hindi",
  population: "30 Million",
  image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  description: "Known for waterfalls and forests.",
  places: [
    {
      name: "Chitrakote Falls",
      image: "https://picsum.photos/400/250?18",
    },
    {
      name: "Tirathgarh Falls",
      image: "https://picsum.photos/400/250?19",
    },
    {
      name: "Barnawapara",
      image: "https://picsum.photos/400/250?20",
    },
  ],
  map: "https://www.google.com/maps?q=Chhattisgarh&output=embed",
},
{
  id: 6,
  name: "Goa",
  capital: "Panaji",
  language: "Konkani",
  population: "1.5 Million",
  image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
  description: "Popular for beaches and nightlife.",
  places: [
    {
      name: "Baga Beach",
      image: "https://picsum.photos/400/250?21",
    },
    {
      name: "Calangute",
      image: "https://picsum.photos/400/250?22",
    },
    {
      name: "Dudhsagar Falls",
      image: "https://picsum.photos/400/250?23",
    },
    {
      name: "Fort Aguada",
      image: "https://picsum.photos/400/250?24",
    },
  ],
  map: "https://www.google.com/maps?q=Goa&output=embed",
},
{
  id: 7,
  name: "Gujarat",
  capital: "Gandhinagar",
  language: "Gujarati",
  population: "71 Million",
  image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
  description: "Home of the Statue of Unity.",
  places: [
    {
      name: "Statue of Unity",
      image: "https://picsum.photos/400/250?25",
    },
    {
      name: "Gir Forest",
      image: "https://picsum.photos/400/250?26",
    },
    {
      name: "Somnath Temple",
      image: "https://picsum.photos/400/250?27",
    },
    {
      name: "Dwarka",
      image: "https://picsum.photos/400/250?28",
    },
  ],
  map: "https://www.google.com/maps?q=Gujarat&output=embed",
},
{
  id: 8,
  name: "Haryana",
  capital: "Chandigarh",
  language: "Hindi",
  population: "29 Million",
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  description: "Known for agriculture and history.",
  places: [
    {
      name: "Kurukshetra",
      image: "https://picsum.photos/400/250?29",
    },
    {
      name: "Pinjore Garden",
      image: "https://picsum.photos/400/250?30",
    },
    {
      name: "Sultanpur Bird Sanctuary",
      image: "https://picsum.photos/400/250?31",
    },
  ],
  map: "https://www.google.com/maps?q=Haryana&output=embed",
},
{
  id: 9,
  name: "Himachal Pradesh",
  capital: "Shimla",
  language: "Hindi",
  population: "7.5 Million",
  image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  description: "Famous for snowy mountains.",
  places: [
    {
      name: "Shimla",
      image: "https://picsum.photos/400/250?32",
    },
    {
      name: "Manali",
      image: "https://picsum.photos/400/250?33",
    },
    {
      name: "Dharamshala",
      image: "https://picsum.photos/400/250?34",
    },
    {
      name: "Spiti Valley",
      image: "https://picsum.photos/400/250?35",
    },
  ],
  map: "https://www.google.com/maps?q=Himachal+Pradesh&output=embed",
},
{
  id: 10,
  name: "Jharkhand",
  capital: "Ranchi",
  language: "Hindi",
  population: "39 Million",
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  description: "Known for waterfalls and forests.",
  places: [
    {
      name: "Dassam Falls",
      image: "https://picsum.photos/400/250?36",
    },
    {
      name: "Hundru Falls",
      image: "https://picsum.photos/400/250?37",
    },
    {
      name: "Betla National Park",
      image: "https://picsum.photos/400/250?38",
    },
  ],
  map: "https://www.google.com/maps?q=Jharkhand&output=embed",
},
{
  id: 11,
  name: "Karnataka",
  capital: "Bengaluru",
  language: "Kannada",
  population: "68 Million",
  image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2",
  description: "Famous for Mysore Palace and Hampi.",
  places: [
    {
      name: "Mysore Palace",
      image: "https://picsum.photos/400/250?39",
    },
    {
      name: "Hampi",
      image: "https://picsum.photos/400/250?40",
    },
    {
      name: "Coorg",
      image: "https://picsum.photos/400/250?41",
    },
    {
      name: "Jog Falls",
      image: "https://picsum.photos/400/250?42",
    },
  ],
  map: "https://www.google.com/maps?q=Karnataka&output=embed",
},
{
  id: 12,
  name: "Kerala",
  capital: "Thiruvananthapuram",
  language: "Malayalam",
  population: "35 Million",
  image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
  description: "God's Own Country.",
  places: [
    {
      name: "Munnar",
      image: "https://picsum.photos/400/250?43",
    },
    {
      name: "Alleppey",
      image: "https://picsum.photos/400/250?44",
    },
    {
      name: "Kochi",
      image: "https://picsum.photos/400/250?45",
    },
    {
      name: "Wayanad",
      image: "https://picsum.photos/400/250?46",
    },
  ],
  map: "https://www.google.com/maps?q=Kerala&output=embed",
},
{
  id: 13,
  name: "Madhya Pradesh",
  capital: "Bhopal",
  language: "Hindi",
  population: "85 Million",
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  description: "Known as the Heart of India.",
  places: [
    {
      name: "Khajuraho",
      image: "https://picsum.photos/400/250?47",
    },
    {
      name: "Sanchi",
      image: "https://picsum.photos/400/250?48",
    },
    {
      name: "Kanha National Park",
      image: "https://picsum.photos/400/250?49",
    },
    {
      name: "Bhimbetka",
      image: "https://picsum.photos/400/250?50",
    },
  ],
  map: "https://www.google.com/maps?q=Madhya+Pradesh&output=embed",
},
{
  id: 14,
  name: "Maharashtra",
  capital: "Mumbai",
  language: "Marathi",
  population: "125 Million",
  image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
  description: "Home to Mumbai and Ajanta-Ellora Caves.",
  places: [
    {
      name: "Gateway of India",
      image: "https://picsum.photos/400/250?51",
    },
    {
      name: "Ajanta Caves",
      image: "https://picsum.photos/400/250?52",
    },
    {
      name: "Ellora Caves",
      image: "https://picsum.photos/400/250?53",
    },
    {
      name: "Lonavala",
      image: "https://picsum.photos/400/250?54",
    },
  ],
  map: "https://www.google.com/maps?q=Maharashtra&output=embed",
},
{
  id: 15,
  name: "Manipur",
  capital: "Imphal",
  language: "Manipuri",
  population: "3.2 Million",
  image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  description: "Known for Loktak Lake.",
  places: [
    {
      name: "Loktak Lake",
      image: "https://picsum.photos/400/250?55",
    },
    {
      name: "Kangla Fort",
      image: "https://picsum.photos/400/250?56",
    },
    {
      name: "Keibul Lamjao National Park",
      image: "https://picsum.photos/400/250?57",
    },
  ],
  map: "https://www.google.com/maps?q=Manipur&output=embed",
},
{
  id: 16,
  name: "Meghalaya",
  capital: "Shillong",
  language: "English",
  population: "3.5 Million",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  description: "Famous for living root bridges.",
  places: [
    {
      name: "Shillong",
      image: "https://picsum.photos/400/250?58",
    },
    {
      name: "Cherrapunji",
      image: "https://picsum.photos/400/250?59",
    },
    {
      name: "Dawki",
      image: "https://picsum.photos/400/250?60",
    },
    {
      name: "Mawsynram",
      image: "https://picsum.photos/400/250?61",
    },
  ],
  map: "https://www.google.com/maps?q=Meghalaya&output=embed",
},
{
  id: 17,
  name: "Mizoram",
  capital: "Aizawl",
  language: "Mizo",
  population: "1.3 Million",
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  description: "Known for hills and forests.",
  places: [
    {
      name: "Aizawl",
      image: "https://picsum.photos/400/250?62",
    },
    {
      name: "Vantawng Falls",
      image: "https://picsum.photos/400/250?63",
    },
    {
      name: "Reiek Peak",
      image: "https://picsum.photos/400/250?64",
    },
  ],
  map: "https://www.google.com/maps?q=Mizoram&output=embed",
},
{
  id: 18,
  name: "Nagaland",
  capital: "Kohima",
  language: "English",
  population: "2.2 Million",
  image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  description: "Known for the Hornbill Festival.",
  places: [
    {
      name: "Kohima",
      image: "https://picsum.photos/400/250?65",
    },
    {
      name: "Dzukou Valley",
      image: "https://picsum.photos/400/250?66",
    },
    {
      name: "Mon District",
      image: "https://picsum.photos/400/250?67",
    },
  ],
  map: "https://www.google.com/maps?q=Nagaland&output=embed",
},
{
  id: 19,
  name: "Odisha",
  capital: "Bhubaneswar",
  language: "Odia",
  population: "46 Million",
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
  description: "Home to Jagannath Temple.",
  places: [
    {
      name: "Puri",
      image: "https://picsum.photos/400/250?68",
    },
    {
      name: "Konark",
      image: "https://picsum.photos/400/250?69",
    },
    {
      name: "Chilika Lake",
      image: "https://picsum.photos/400/250?70",
    },
    {
      name: "Bhubaneswar",
      image: "https://picsum.photos/400/250?71",
    },
  ],
  map: "https://www.google.com/maps?q=Odisha&output=embed",
},
{
  id: 20,
  name: "Punjab",
  capital: "Chandigarh",
  language: "Punjabi",
  population: "31 Million",
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  description: "Known for the Golden Temple.",
  places: [
    {
      name: "Golden Temple",
      image: "https://picsum.photos/400/250?72",
    },
    {
      name: "Jallianwala Bagh",
      image: "https://picsum.photos/400/250?73",
    },
    {
      name: "Wagah Border",
      image: "https://picsum.photos/400/250?74",
    },
  ],
  map: "https://www.google.com/maps?q=Punjab&output=embed",
},
{
  id: 21,
  name: "Rajasthan",
  capital: "Jaipur",
  language: "Hindi",
  population: "81 Million",
  image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
  description: "Land of forts and palaces.",
  places: [
    {
      name: "Jaipur",
      image: "https://picsum.photos/400/250?75",
    },
    {
      name: "Udaipur",
      image: "https://picsum.photos/400/250?76",
    },
    {
      name: "Jaisalmer",
      image: "https://picsum.photos/400/250?77",
    },
    {
      name: "Mount Abu",
      image: "https://picsum.photos/400/250?78",
    },
  ],
  map: "https://www.google.com/maps?q=Rajasthan&output=embed",
},
{
  id: 22,
  name: "Sikkim",
  capital: "Gangtok",
  language: "Nepali",
  population: "0.7 Million",
  image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  description: "Known for Kanchenjunga.",
  places: [
    {
      name: "Gangtok",
      image: "https://picsum.photos/400/250?79",
    },
    {
      name: "Tsomgo Lake",
      image: "https://picsum.photos/400/250?80",
    },
    {
      name: "Nathula Pass",
      image: "https://picsum.photos/400/250?81",
    },
  ],
  map: "https://www.google.com/maps?q=Sikkim&output=embed",
},
{
  id: 23,
  name: "Tamil Nadu",
  capital: "Chennai",
  language: "Tamil",
  population: "78 Million",
  image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
  description: "Famous for temples and beaches.",
  places: [
    {
      name: "Chennai",
      image: "https://picsum.photos/400/250?82",
    },
    {
      name: "Ooty",
      image: "https://picsum.photos/400/250?83",
    },
    {
      name: "Madurai",
      image: "https://picsum.photos/400/250?84",
    },
    {
      name: "Kanyakumari",
      image: "https://picsum.photos/400/250?85",
    },
  ],
  map: "https://www.google.com/maps?q=Tamil+Nadu&output=embed",
},
{
  id: 24,
  name: "Telangana",
  capital: "Hyderabad",
  language: "Telugu",
  population: "40 Million",
  image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
  description: "Known for Charminar and Golconda Fort.",
  places: [
    {
      name: "Charminar",
      image: "https://picsum.photos/400/250?86",
    },
    {
      name: "Golconda Fort",
      image: "https://picsum.photos/400/250?87",
    },
    {
      name: "Ramoji Film City",
      image: "https://picsum.photos/400/250?88",
    },
    {
      name: "Yadadri",
      image: "https://picsum.photos/400/250?89",
    },
  ],
  map: "https://www.google.com/maps?q=Telangana&output=embed",
},
{
  id: 25,
  name: "Tripura",
  capital: "Agartala",
  language: "Bengali",
  population: "4.2 Million",
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  description: "Known for palaces and temples.",
  places: [
    {
      name: "Ujjayanta Palace",
      image: "https://picsum.photos/400/250?90",
    },
    {
      name: "Neermahal",
      image: "https://picsum.photos/400/250?91",
    },
    {
      name: "Sepahijala Wildlife Sanctuary",
      image: "https://picsum.photos/400/250?92",
    },
  ],
  map: "https://www.google.com/maps?q=Tripura&output=embed",
},
{
  id: 26,
  name: "Uttar Pradesh",
  capital: "Lucknow",
  language: "Hindi",
  population: "240 Million",
  image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
  description: "Home of the Taj Mahal.",
  places: [
    {
      name: "Taj Mahal",
      image: "https://picsum.photos/400/250?93",
    },
    {
      name: "Varanasi",
      image: "https://picsum.photos/400/250?94",
    },
    {
      name: "Ayodhya",
      image: "https://picsum.photos/400/250?95",
    },
    {
      name: "Fatehpur Sikri",
      image: "https://picsum.photos/400/250?96",
    },
  ],
  map: "https://www.google.com/maps?q=Uttar+Pradesh&output=embed",
},
{
  id: 27,
  name: "Uttarakhand",
  capital: "Dehradun",
  language: "Hindi",
  population: "11 Million",
  image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  description: "Known for the Himalayas.",
  places: [
    {
      name: "Mussoorie",
      image: "https://picsum.photos/400/250?97",
    },
    {
      name: "Nainital",
      image: "https://picsum.photos/400/250?98",
    },
    {
      name: "Kedarnath",
      image: "https://picsum.photos/400/250?99",
    },
    {
      name: "Badrinath",
      image: "https://picsum.photos/400/250?100",
    },
  ],
  map: "https://www.google.com/maps?q=Uttarakhand&output=embed",
},
{
  id: 28,
  name: "West Bengal",
  capital: "Kolkata",
  language: "Bengali",
  population: "100 Million",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  description: "Famous for Kolkata and Darjeeling.",
  places: [
    {
      name: "Darjeeling",
      image: "https://picsum.photos/400/250?101",
    },
    {
      name: "Sundarbans",
      image: "https://picsum.photos/400/250?102",
    },
    {
      name: "Victoria Memorial",
      image: "https://picsum.photos/400/250?103",
    },
    {
      name: "Howrah Bridge",
      image: "https://picsum.photos/400/250?104",
    },
  ],
  map: "https://www.google.com/maps?q=West+Bengal&output=embed",
},
{
  id: 29,
  name: "Andaman and Nicobar Islands",
  capital: "Port Blair",
  language: "Hindi",
  population: "0.4 Million",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  description: "Beautiful islands with beaches.",
  places: [
    {
      name: "Radhanagar Beach",
      image: "https://picsum.photos/400/250?105",
    },
    {
      name: "Cellular Jail",
      image: "https://picsum.photos/400/250?106",
    },
    {
      name: "Ross Island",
      image: "https://picsum.photos/400/250?107",
    },
  ],
  map: "https://www.google.com/maps?q=Andaman+and+Nicobar+Islands&output=embed",
},
{
  id: 30,
  name: "Chandigarh",
  capital: "Chandigarh",
  language: "Hindi",
  population: "1.2 Million",
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  description: "India's first planned city.",
  places: [
    {
      name: "Rock Garden",
      image: "https://picsum.photos/400/250?108",
    },
    {
      name: "Sukhna Lake",
      image: "https://picsum.photos/400/250?109",
    },
    {
      name: "Rose Garden",
      image: "https://picsum.photos/400/250?110",
    },
  ],
  map: "https://www.google.com/maps?q=Chandigarh&output=embed",
},
{
  id: 31,
  name: "Dadra and Nagar Haveli and Daman and Diu",
  capital: "Daman",
  language: "Gujarati",
  population: "0.7 Million",
  image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
  description: "Known for beaches.",
  places: [
    {
      name: "Devka Beach",
      image: "https://picsum.photos/400/250?111",
    },
    {
      name: "Jampore Beach",
      image: "https://picsum.photos/400/250?112",
    },
    {
      name: "Diu Fort",
      image: "https://picsum.photos/400/250?113",
    },
  ],
  map: "https://www.google.com/maps?q=Daman&output=embed",
},
{
  id: 32,
  name: "Delhi",
  capital: "New Delhi",
  language: "Hindi",
  population: "33 Million",
  image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
  description: "Capital of India.",
  places: [
    {
      name: "India Gate",
      image: "https://picsum.photos/400/250?114",
    },
    {
      name: "Red Fort",
      image: "https://picsum.photos/400/250?115",
    },
    {
      name: "Qutub Minar",
      image: "https://picsum.photos/400/250?116",
    },
    {
      name: "Lotus Temple",
      image: "https://picsum.photos/400/250?117",
    },
  ],
  map: "https://www.google.com/maps?q=Delhi&output=embed",
},
{
  id: 33,
  name: "Jammu and Kashmir",
  capital: "Srinagar (Summer), Jammu (Winter)",
  language: "Kashmiri",
  population: "13 Million",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  description: "Paradise on Earth.",
  places: [
    {
      name: "Srinagar",
      image: "https://picsum.photos/400/250?118",
    },
    {
      name: "Gulmarg",
      image: "https://picsum.photos/400/250?119",
    },
    {
      name: "Pahalgam",
      image: "https://picsum.photos/400/250?120",
    },
    {
      name: "Sonamarg",
      image: "https://picsum.photos/400/250?121",
    },
  ],
  map: "https://www.google.com/maps?q=Jammu+and+Kashmir&output=embed",
},
{
  id: 34,
  name: "Ladakh",
  capital: "Leh",
  language: "Ladakhi",
  population: "0.3 Million",
  image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  description: "Famous for mountains and lakes.",
  places: [
    {
      name: "Pangong Lake",
      image: "https://picsum.photos/400/250?122",
    },
    {
      name: "Nubra Valley",
      image: "https://picsum.photos/400/250?123",
    },
    {
      name: "Leh Palace",
      image: "https://picsum.photos/400/250?124",
    },
  ],
  map: "https://www.google.com/maps?q=Ladakh&output=embed",
},
{
  id: 35,
  name: "Lakshadweep",
  capital: "Kavaratti",
  language: "Malayalam",
  population: "0.07 Million",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  description: "Coral islands in the Arabian Sea.",
  places: [
    {
      name: "Agatti Island",
      image: "https://picsum.photos/400/250?125",
    },
    {
      name: "Bangaram Island",
      image: "https://picsum.photos/400/250?126",
    },
    {
      name: "Kavaratti",
      image: "https://picsum.photos/400/250?127",
    },
  ],
  map: "https://www.google.com/maps?q=Lakshadweep&output=embed",
},
{
  id: 36,
  name: "Puducherry",
  capital: "Puducherry",
  language: "Tamil",
  population: "1.6 Million",
  image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
  description: "Known for French architecture.",
  places: [
    {
      name: "Promenade Beach",
      image: "https://picsum.photos/400/250?128",
    },
    {
      name: "Auroville",
      image: "https://picsum.photos/400/250?129",
    },
    {
      name: "Paradise Beach",
      image: "https://picsum.photos/400/250?130",
    },
  ],
  map: "https://www.google.com/maps?q=Puducherry&output=embed",
},
];

export default states;