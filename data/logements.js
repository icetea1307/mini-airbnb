// Données des logements
const logements = [
  {
    id: 1,
    titre: "Appartement cosy au centre-ville",
    description: "Magnifique appartement de 2 pièces en plein cœur de la ville. Idéal pour un séjour romantique ou professionnel. Proche de tous les commerces et transports.",
    prix: 85,
    ville: "Paris",
    type: "Appartement",
    image: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      "https://www.maybourneriviera.com/siteassets/rooms--suites/2025/grand-sea-view-studio/fr-mbr-grand-sea-view-studio-722-973.jpg",
      "https://th.bing.com/th/id/OIP.OqXGLRvb3iXOW3EFQIR2DgAAAA?w=203&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    ],
    capacite: 2,
    chambres: 1,
    equipements: ["WiFi", "Cuisine équipée", "Balcon", "Parking"],
    coordonnees: {
      lat: 48.8566,
      lng: 2.3522
    },
    hôte: {
    nom: "Florestan",
    photo: "https://a0.muscache.com/im/pictures/user/89e42adc-cd7a-4dcc-bd47-cd61599ae0dd.jpg?im_w=240"
  }
  },
  {
    id: 2,
    titre: "Villa avec piscine - Vue mer",
    description: "Superbe villa avec piscine privée et vue imprenable sur la mer. 4 chambres, jardin tropical, parfait pour des vacances en famille ou entre amis.",
    prix: 250,
    ville: "Nice",
    type: "Villa",
    image: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      "https://www.maisons-mca.com/wp-content/uploads/2024/12/decorer-une-maison-contemporaine-2.jpg",
      "https://i.pinimg.com/originals/03/4a/bc/034abcf4ed251fc62d35c4087015edae.jpg",
    ],
    chambres: 4,
    equipements: ["Piscine", "WiFi", "Barbecue", "Jardin", "Vue mer"],
    coordonnees: {
      lat: 43.7102,
      lng: 7.2620
    },
    hôte: {
    nom: "Gregory",
    photo: "https://a0.muscache.com/im/pictures/user/f2879ba8-d9c9-4d2c-9c58-23b314901b64.jpg?im_w=240"
  }
    
  },
  {
    id: 3,
    titre: "Chalet montagne - Ski aux pieds",
    description: "Chalet traditionnel situé au pied des pistes. Cheminée, sauna, vue panoramique sur les montagnes. Parfait pour des vacances au ski.",
    prix: 180,
    ville: "Chamonix",
    type: "Chalet",
    image: ["https://cf.bstatic.com/xdata/images/hotel/max500/107758856.jpg?k=6c501e40991a03f46ddfcb2863d251dc9f50c5486b507576df1582362c789c6a&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/265228751.jpg?k=6fb5e0b8cfecbfa2fb6da303a8c0d7d2984a726fed16fba9e14a2e3ae453849d&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max500/70064947.jpg?k=c982e40e0d9a5cb12e7e375a09edd72969e3f87ddfd79e1ef7c3e5b49efa6bb6&o=",
    ],
    capacite: 6,
    chambres: 3,
    equipements: ["Cheminée", "Sauna", "WiFi", "Parking", "Ski aux pieds"],
    coordonnees: {
      lat: 45.9237,
      lng: 6.8694
    },
    hôte: {
    nom: "Virginie",
    photo: "https://a0.muscache.com/im/pictures/user/User-187657829/original/023ea9e6-a485-4091-b5b6-2c5ee6990b24.jpeg?im_w=240"
  }
  },
  {
    id: 4,
    titre: "Loft moderne - Quartier artistique",
    description: "Loft spacieux et moderne dans le quartier des artistes. Hauts plafonds, verrière, décoration contemporaine. Idéal pour un séjour culturel.",
    prix: 120,
    ville: "Lyon",
    type: "Loft",
    image: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      "https://th.bing.com/th/id/OIP.1bS7LwizG8FiT8MD301juwHaFW?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://www.baunetzwissen.de/imgs/2/0/1/9/7/1/1/0cb853870b37b95d.jpg",
    ],
    capacite: 4,
    chambres: 2,
    equipements: ["WiFi", "Cuisine moderne", "Climatisation", "Terrasse"],
    coordonnees: {
      lat: 45.7640,
      lng: 4.8357
    },
    hôte: {
    nom: "Sanae",
    photo: "https://a0.muscache.com/im/pictures/user/27bbc1c2-ce34-4248-bd15-4f81224b12f6.jpg?im_w=240"
  }
  },
  {
    id: 5,
    titre: "Maison de campagne - Vignoble",
    description: "Charmante maison au cœur des vignes. Dégustation de vins incluse, piscine, grande terrasse. Parfait pour un séjour œnologique.",
    prix: 200,
    ville: "Bordeaux",
    type: "Maison",
    image: ["https://th.bing.com/th/id/OIP.sUS6OcESKhm5iSfcgjYdkQHaFj?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.WSH1F2CQc3NVMD32jSSO4AHaJ-?w=145&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.71",
      "https://maison.20minutes.fr/wp-content/uploads/2021/10/1-un-salon-qui-mise-sur-lauthenticite-la-maison-saint-gobain.jpg",
    ],
      capacite: 6,
    chambres: 3,
    equipements: ["Piscine", "Dégustation vins", "WiFi", "Barbecue", "Jardin"],
    coordonnees: {
      lat: 44.8378,
      lng: -0.5792,
    },
    hôte: {
    nom: " Augustine",
    photo: "https://a0.muscache.com/im/pictures/user/User/original/e943097f-0e5a-4949-9d7a-e43591261130.jpeg?im_w=240"
  }
  },
  {
      id: 7,
      titre: "Maison au bord de la plage",
      description: "Maison a côter de la plage a même pas 3 minutes a pied.Elle a été renovée en 2022",
      prix: 170,
      ville: "Biscarrosse",
      type: "Maison",
      image: ["https://th.bing.com/th/id/R.4c042f1f01462aa9fe8b00f8147405bd?rik=SUuhZNmti1L6vw&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/OIP.mdtDtFcwP0fX3UJIcX8hsQHaEo?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.PwClIUIX3aXPH9y6eOS7BAHaE8?w=284&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      ],
      capacite: 4,
      chambres: 2,
      equipements: ["WiFi", "lave-linge" ,"barbecue", "cuisine", "espace extérieur"],
      coordonnees: { lat: 44.454880, lng: -1.252270

      },
    hôte: {
    nom: " Norbert",
    photo: "https://a0.muscache.com/im/pictures/user/b993723f-b6bb-4fac-b6ef-b5fe746f3888.jpg?im_w=240"
  }
    },
    {
      id: 8,
      titre: "Maison dans la forêt avec vue panoramique",
      description: "Loin des bruits et de l'agitation de la ville, nichée au cœur d’une forêt de châtaigniers vieille de plus d’un siècle.",
      prix: 110,
      ville: "Roquefère",
      type: "Maison",
      image: ["https://a0.muscache.com/im/pictures/miso/Hosting-743855749926683823/original/829d1340-e700-4ba8-a5dc-629c7a929076.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-743855749926683823/original/bc7fb333-2877-428c-b017-4935d75e60c2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-743855749926683823/original/2fc7956b-82b7-4c7c-acdd-73b3dcef2ed8.jpeg?im_w=720",
      ],
      capacite: 6,
      chambres: 3,
      equipements: ["WiFi", "Piscine", "cheminée", "cuisine"],
      coordonnees: { lat: 43.3744, lng: 2.38197 

      },
     hôte: {
    nom: " Olivier",
    photo: "https://a0.muscache.com/im/pictures/user/12e05e97-ccd2-4859-bed6-0d175a59d3df.jpg?im_w=240"
  }
    },
    {
      id: 9,
      titre: "Logement entier : appartement Lille",
      description: "Appartement spacieux entourer d'un copropriété de 5 appartements et d'un jolie boutique",
      prix: 159,
      ville: "Lille",
      type: "Appartement",
      image: ["https://a0.muscache.com/im/pictures/airflow/Hosting-16284708/original/384c0366-d6ba-44cc-a0f7-26d05addaa58.jpg?im_w=720",
        "https://th.bing.com/th/id/OIP.slNG0ZFM7_9G4yJMY9-pXwHaE8?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.z10JawiIAnXRUuvGRcv_-wHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      ],
      capacite: 2,
      chambres: 1,
      equipements: ["WiFi", "Piscine","Vue sur la cour", "TV avec abonnement standard au câble", "Four à micro-ondes"],
      coordonnees: { lat: 50.6270, lng: 3.0586 

      },
    hôte: {
    nom: " Yakubu",
    photo: "https://a0.muscache.com/im/pictures/user/User-517133359/original/5caf0e7b-9a35-45cb-8e77-6827d3f78d64.jpeg?im_w=240"
  }
    },
    {
      id: 10,
      titre: "Logement entier : villa Marseille",
      description: "Détendez-vous dans ce logement unique et tranquille. Maison sur les hauteurs de la Milliere à Marseille 11eme",
      prix: 220,
      ville: "Marseille",
      type: "Villa",
      image: ["https://a0.muscache.com/im/pictures/9b6f8c1b-17ce-4a3e-a8d0-1c2ccbc512d1.jpg?im_w=1200",
        "https://th.bing.com/th/id/OIP.h8dVRYTzQkZrlFwfMtfNEAHaE5?w=280&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.8xSH1IkoXp-Gs_EDWso6VgHaE8?w=278&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.7fETIGrujvitfulPYUw3JAHaE8?w=289&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      ],
      capacite: 10,
      chambres: 5,
      equipements: ["WiFi", , "TV HD 35 pouces", "Piscine privée", "Lave-linge (Gratuit) dans le logement", "Animaux acceptés"],
      coordonnees: { lat: 43.2831, lng: 5.3523 

      },
    hôte: {
    nom: " Alexandra",
    photo: "https://a0.muscache.com/im/pictures/user/28d78b21-f4ba-48f7-bbf3-60b5f76596d0.jpg?im_w=240"
  }
    },
    {
      id: 11,
      titre: "Logement entier : appartement Argelès",
      description: "Vue Mer à 180°C, accès direct plage 30 sec, à 2 min du Costa Blanca (Alimentation, boulangerie, pharmacie), à 5 min à pieds des plages privées et clubs nautiques",
      prix: 115,
      ville: "Argelès-sur-Mer",
      type: "Appartement",
      image: ["https://a0.muscache.com/im/pictures/miso/Hosting-1093986176413320634/original/368f26dd-a8bb-4c36-811d-5bea19abcf1c.jpeg?im_w=1200",
        "https://th.bing.com/th/id/R.70f58c40d4a1359cb45e437aa581b05a?rik=7S%2bc5pRndWoysQ&riu=http%3a%2f%2fwww.hotelyeu.com%2fusermedia%2fphoto-635170261047688399-1.jpg%3fdummy%3d0%26h%3d800&ehk=Y9qN1PumXTY2WB3jO6F%2bSa6de5wSMItC%2bzoh6i7wxak%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/OIP.IEqbAIGHiAL83PA_leH7VQHaE8?w=271&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      ],
      capacite: 4,
      chambres: 2,
      equipements: ["WiFi", "Piscine", "Télévision", "Accès partagé à la plage", "Cuisine"],
      coordonnees: { lat: 42.5470, lng: 3.0290 

      },
    hôte: {
    nom: " Hélène",
    photo: "https://a0.muscache.com/im/pictures/user/0040132b-d7b0-43e3-ab41-0508f0aa898d.jpg?im_w=240"
    }
    },
    {
      id: 12,
      titre: "Logement entier : appartement - Biarritz",
      description: "Situé en plein coeur du centre ville de Biarritz, ce studio dispose d'un balcon face à la Grande Plage avec vue du Phare au Rocher de la Vierge et les Pyrénées en arrière plan.",
      prix: 200,
      ville: "Biarritz",
      type: "Appartement",
      image: ["https://a0.muscache.com/im/pictures/miso/Hosting-1398475593403755842/original/019d206c-1dcf-4d7b-b42f-cb6b0d2dca0c.jpeg?im_w=1200",
        "https://novarta.fr/wp-content/uploads/2022/03/colocatere-colocation-menetrier-chambre-2-746-12598-682x1024.jpeg",
        "https://th.bing.com/th/id/OIP.xVQG30SjYorngKzNvOt9MQHaE8?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      ],
      capacite: 2,
      chambres: 1,
      equipements: ["WiFi", "Piscine", "Télévision", "Cuisine", "Parking gratuit dans la rue"],
      coordonnees: { lat: 43.4810, lng: -1.5580 

      },
    hôte: {
    nom: "Sebastien",
    photo: "https://a0.muscache.com/im/pictures/user/c8b7a3d9-a246-4866-96ed-c810f00a9720.jpg?im_w=240"
    }
    },
    {
      id: 13,
      titre: "Cabane perchée - Jurançon",
      description: "À seulement quelques minutes du centre-ville de Pau, nichée au cœur des vignes du domaine La Paloma, découvrez une suite de luxe exceptionnelle avec une vue imprenable sur la majestueuse chaîne des Pyrénées",
      prix: 285,
      ville: "Pau",
      type: "Maison",
      image: ["https://a0.muscache.com/im/pictures/airflow/Hosting-1235336076149222512/original/4ef42f15-9076-49dd-a042-68c8c37bbebb.jpg?im_w=720",
        "https://maison.20minutes.fr/wp-content/uploads/2020/05/5-chambre-adulte-moderne-taupe-am-pm.jpg",
        "https://th.bing.com/th/id/OIP.kxnEgbVetNhwwNDP69uihgHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      ],
      capacite: 2,
      chambres: 1,
      equipements: ["WiFi", "Climatisation : système split sans évacuation", "Arrière-cour privée", "TV HD avec Apple TV"],
      coordonnees: { lat: 43.3333, lng: -0.9667

      },
    hôte: {
    nom: "Stephanie",
    photo: "https://a0.muscache.com/im/pictures/user/62b1343e-ad17-49e4-8ed4-55f6e518642d.jpg?im_w=240"
    }
    },
    {
      id: 14,
      titre: "Logement entier : appartement - La Teste-de-Buch",
      description: "Envie de calme et de nature à deux pas du lac ? Offrez-vous un séjour cocooning dans ce charmant studio de 15 m², niché dans un écrin de verdure à Cazaux, sur la commune de La Teste-de-Buch.",
      prix: 59,
      ville: "La Teste-de-Buch",
      type: "Appartement",
      image: ["https://a0.muscache.com/im/pictures/9790e964-ca7c-4328-9461-02899080a010.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/70736e4a-8f39-44f3-b247-7debdcc76682.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-699868166223613965/original/39c84673-2074-455c-a313-61b3cbbbd34b.jpeg?im_w=720",
      ],
      capacite: 2,
      chambres: 1,
      equipements: ["WiFi", "Arrière-cour privée – Clôture partielle", "parking", "télévision", "cuisine"],
      coordonnees: { lat: 44.6360, lng: -1.1578

      },
    hôte: {
    nom: "Cydric",
    photo: "https://a0.muscache.com/im/pictures/user/User-30262305/original/aabf4bfe-697b-4d57-8daf-a8a7f8af8614.jpeg?im_w=240"
    }
    },
    {
      id: 15,
      titre: "Logement entier : villa - Fillé",
      description: "Maison de plein pied 165 m2. expo sud, terrasse, parking sécurisé. extérieur paysagé. dans joli village en bord de  rivière, randonnée, canoé, paddle,  gastronomie à proximité. ",
      prix: 281,
      ville: "Fillé",
      type: "Villa",
      image: ["https://a0.muscache.com/im/pictures/miso/Hosting-2200317/original/0c5b110f-1d77-4ab3-9732-010e997be510.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/dd1711b4-7c1a-42a0-b5c0-12d5e903fc65.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/9fee8960-a02b-4fa3-befd-6d640b4b88e6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a7c3e310-4f3c-4c2b-a72f-34d2685e5881.jpg?im_w=720",
      ],
      capacite: 8,
      chambres: 4,
      equipements: ["WiFi", "parking", "Privé : patio ou balcon", "Cheminée", "Cuisine"],
      coordonnees: { lat: 47.8982, lng: 0.1267 

      },
    hôte: {
        nom: "Gerald",
    photo: "https://a0.muscache.com/im/users/10256674/profile_pic/1391241394/original.jpg?im_w=240"
    }
    },
  
];

module.exports = logements;