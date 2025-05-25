const express = require('express');
const path = require('path');
const logements = require('./data/logements');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const { ville, type } = req.query;

  let filtres = logements;

  if (ville && ville.trim() !== "") {
    filtres = filtres.filter(l =>
      l.ville.toLowerCase().includes(ville.toLowerCase())
    );
  }

  if (type && type.trim() !== "") {
    filtres = filtres.filter(l =>
      l.type.toLowerCase() === type.toLowerCase()
    );
  }

  res.render('accueil', {
    logements: filtres,
    title: 'Mini-Airbnb - Accueil',
    ville,
    type
  });
});

// Détail logement
app.get('/logement/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const logement = logements.find(l => l.id === id);

  if (!logement) {
    return res.status(404).render('404', { title: 'Logement non trouvé' });
  }

  res.render('detail', { logement, title: logement.titre });
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Page non trouvée'
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🏠 Serveur Mini-Airbnb démarré sur http://localhost:${PORT}`);
  console.log(`📋 Logements disponibles : ${logements.length}`);
});
