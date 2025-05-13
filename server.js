const express = require('express');
const app = express();
const path = require('path');

// Données fictives
const logements = [
{ id: 1, titre: 'Appartement cosy à Paris', prix: 120, image: '/img/paris.jpg', description: 'Proche du centre.' },
{ id: 2, titre: 'Villa avec piscine à Nice', prix: 250, image: '/img/nice.jpg', description: 'Vue sur la mer.' },
{ id: 3, titre: 'Chalet à Chamonix', prix: 180, image: '/img/chamonix.jpg', description: 'Parfait pour skier.' }
];

// Config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
res.render('accueil', { logements });
});

app.get('/logement/:id', (req, res) => {
const logement = logements.find(l => l.id == req.params.id);
if (!logement) {
    return res.status(404).send('Logement non trouvé');
}
res.render('detail', { logement });
});

// Démarrer le serveur
app.listen(3000, () => {
console.log('Serveur en écoute sur http://localhost:3000');
});
