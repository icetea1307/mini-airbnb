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
    lng: -0.5792
    }
}
];

module.exports = logements;