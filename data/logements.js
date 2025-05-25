// Données des logements
const logements = [
  {
    id: 1,
    titre: "Appartement cosy au centre-ville",
    description: "Magnifique appartement de 2 pièces en plein cœur de la ville. Idéal pour un séjour romantique ou professionnel. Proche de tous les commerces et transports.",
    prix: 85,
    ville: "Paris",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    capacite: 2,
    chambres: 1,
    equipements: ["WiFi", "Cuisine équipée", "Balcon", "Parking"],
    coordonnees: {
      lat: 48.8566,
      lng: 2.3522
    }
  },
  {
    id: 2,
    titre: "Villa avec piscine - Vue mer",
    description: "Superbe villa avec piscine privée et vue imprenable sur la mer. 4 chambres, jardin tropical, parfait pour des vacances en famille ou entre amis.",
    prix: 250,
    ville: "Nice",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    capacite: 8,
    chambres: 4,
    equipements: ["Piscine", "WiFi", "Barbecue", "Jardin", "Vue mer"],
    coordonnees: {
      lat: 43.7102,
      lng: 7.2620
    }
  },
  {
    id: 3,
    titre: "Chalet montagne - Ski aux pieds",
    description: "Chalet traditionnel situé au pied des pistes. Cheminée, sauna, vue panoramique sur les montagnes. Parfait pour des vacances au ski.",
    prix: 180,
    ville: "Chamonix",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    capacite: 6,
    chambres: 3,
    equipements: ["Cheminée", "Sauna", "WiFi", "Parking", "Ski aux pieds"],
    coordonnees: {
      lat: 45.9237,
      lng: 6.8694
    }
  },
  {
    id: 4,
    titre: "Loft moderne - Quartier artistique",
    description: "Loft spacieux et moderne dans le quartier des artistes. Hauts plafonds, verrière, décoration contemporaine. Idéal pour un séjour culturel.",
    prix: 120,
    ville: "Lyon",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    capacite: 4,
    chambres: 2,
    equipements: ["WiFi", "Cuisine moderne", "Climatisation", "Terrasse"],
    coordonnees: {
      lat: 45.7640,
      lng: 4.8357
    }
  },
  {
    id: 5,
    titre: "Maison de campagne - Vignoble",
    description: "Charmante maison au cœur des vignes. Dégustation de vins incluse, piscine, grande terrasse. Parfait pour un séjour œnologique.",
    prix: 200,
    ville: "Bordeaux",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&h=300&fit=crop",
    capacite: 6,
    chambres: 3,
    equipements: ["Piscine", "Dégustation vins", "WiFi", "Barbecue", "Jardin"],
    coordonnees: {
      lat: 44.8378,
      lng: -0.5792,
    }
  },
  {
      id: 7,
      titre: "Maison au bord de la plage",
      description: "Maison a côter de la plage a même pas 3 minutes a pied.Elle a été renovée en 2022",
      prix: 170,
      ville: "Biscarrosse",
      image: "https://th.bing.com/th/id/R.4c042f1f01462aa9fe8b00f8147405bd?rik=SUuhZNmti1L6vw&pid=ImgRaw&r=0",
      capacite: 4,
      chambres: 2,
      equipements: ["WiFi", "lave-linge" ,"barbecue", "cuisine", "espace extérieur"],
      coordonnees: { lat: 44.454880, lng: -1.252270

      }
    },
    { 
      id: 8,
      titre: "Maison dans la forêt avec vue panoramique",
      description: "Loin des bruits et de l'agitation de la ville, nichée au cœur d’une forêt de châtaigniers vieille de plus d’un siècle.",
      prix: 110,
      ville: "Roquefère",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-867130267614916977/original/6d086530-58a4-4543-bb0a-868e715aa871.jpeg?im_w=720",
      capacite: 6,
      chambres: 3,
      equipements: ["WiFi", "Piscine", "cheminée", "cuisine"],
      coordonnees: { lat: 43.3744, lng: 2.38197 

      }
    },
    {
      id: 9,
      titre: "Logement entier : appartement Lille",
      description: "Appartement spacieux entourer d'un copropriété de 5 appartements et d'un jolie boutique",
      prix: 159,
      ville: "Lille",
      image: "https://a0.muscache.com/im/pictures/airflow/Hosting-16284708/original/384c0366-d6ba-44cc-a0f7-26d05addaa58.jpg?im_w=720",
      capacite: 2,
      chambres: 1,
      equipements: ["WiFi", "Piscine","Vue sur la cour", "TV avec abonnement standard au câble", "Four à micro-ondes"],
      coordonnees: { lat: 50.6270, lng: 3.0586 

      }
    },
    {
      id: 10,
      titre: "Logement entier : villa Marseille",
      description: "Détendez-vous dans ce logement unique et tranquille. Maison sur les hauteurs de la Milliere à Marseille 11eme",
      prix: 220,
      ville: "Marseille",
      image: "https://a0.muscache.com/im/pictures/9b6f8c1b-17ce-4a3e-a8d0-1c2ccbc512d1.jpg?im_w=1200",
      capacite: 10,
      chambres: 5,
      equipements: ["WiFi", , "TV HD 35 pouces", "Piscine privée", "Lave-linge (Gratuit) dans le logement", "Animaux acceptés"],
      coordonnees: { lat: 43.2831, lng: 5.3523 

      }
    },
    {
      id: 11,
      titre: "Logement entier : appartement Argelès",
      description: "Vue Mer à 180°C, accès direct plage 30 sec, à 2 min du Costa Blanca (Alimentation, boulangerie, pharmacie), à 5 min à pieds des plages privées et clubs nautiques",
      prix: 115,
      ville: "Argelès-sur-Mer",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-1093986176413320634/original/368f26dd-a8bb-4c36-811d-5bea19abcf1c.jpeg?im_w=1200",
      capacite: 4,
      chambres: 2,
      equipements: ["WiFi", "Piscine", "Télévision", "Accès partagé à la plage", "Cuisine"],
      coordonnees: { lat: 42.5470, lng: 3.0290 

      }
    },
    {
      id: 12,
      titre: "Logement entier : appartement - Biarritz",
      description: "Situé en plein coeur du centre ville de Biarritz, ce studio dispose d'un balcon face à la Grande Plage avec vue du Phare au Rocher de la Vierge et les Pyrénées en arrière plan.",
      prix: 200,
      ville: "Biarritz",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-1398475593403755842/original/019d206c-1dcf-4d7b-b42f-cb6b0d2dca0c.jpeg?im_w=1200",
      capacite: 2,
      chambres: 1,
      equipements: ["WiFi", "Piscine", "Télévision", "Cuisine", "Parking gratuit dans la rue"],
      coordonnees: { lat: 43.4810, lng: -1.5580 

      }
    },
    {
      id: 13,
      titre: "Cabane perchée - Jurançon",
      description: "À seulement quelques minutes du centre-ville de Pau, nichée au cœur des vignes du domaine La Paloma, découvrez une suite de luxe exceptionnelle avec une vue imprenable sur la majestueuse chaîne des Pyrénées",
      prix: 285,
      ville: "Pau",
      image: "https://a0.muscache.com/im/pictures/airflow/Hosting-1235336076149222512/original/4ef42f15-9076-49dd-a042-68c8c37bbebb.jpg?im_w=720",
      capacite: 2,
      chambres: 1,
      equipements: ["WiFi", "Climatisation : système split sans évacuation", "Arrière-cour privée", "TV HD avec Apple TV"],
      coordonnees: { lat: 43.3333, lng: -0.9667

      }
    },
    {
      id: 14,
      titre: "Logement entier : appartement - La Teste-de-Buch",
      description: "Envie de calme et de nature à deux pas du lac ? Offrez-vous un séjour cocooning dans ce charmant studio de 15 m², niché dans un écrin de verdure à Cazaux, sur la commune de La Teste-de-Buch.",
      prix: 59,
      ville: "La Teste-de-Buch",
      image: "https://a0.muscache.com/im/pictures/9790e964-ca7c-4328-9461-02899080a010.jpg?im_w=1200",
      capacite: 2,
      chambres: 1,
      equipements: ["WiFi", "Arrière-cour privée – Clôture partielle", "parking", "télévision", "cuisine"],
      coordonnees: { lat: 44.6360, lng: -1.1578 

      }
    },
    {
      id: 15,
      titre: "Logement entier : villa - Fillé",
      description: "Maison de plein pied 165 m2. expo sud, terrasse, parking sécurisé. extérieur paysagé. dans joli village en bord de  rivière, randonnée, canoé, paddle,  gastronomie à proximité. ",
      prix: 281,
      ville: "Fillé",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-2200317/original/0c5b110f-1d77-4ab3-9732-010e997be510.jpeg?im_w=720",
      capacite: 8,
      chambres: 4,
      equipements: ["WiFi", "parking", "Privé : patio ou balcon", "Cheminée", "Cuisine"],
      coordonnees: { lat: 47.8982, lng: 0.1267 

      }
    },
  
];

module.exports = logements;