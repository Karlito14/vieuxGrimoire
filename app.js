const express = require('express');

const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://leiroz26:monVieuxGrimoire052023@bddmonvieuxgrimoire.rnsqoxc.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use('/api/books', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/api/books', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({ message: 'objet créé' });
})

app.get('/api/books', (req, res, next ) => {
    const books = [
        {
            userId : 'id1250',
            title : 'a la peche',
            author : 'montessori',
            year : 2000,
            imageUrl : 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            genre : 'roman',
            ratings : [
                {
                    userId : 'id1250',
                    grade : 5,
                }
            ],
            averageRating : 4,
        },
        {
            userId : 'id1240',
            title : 'a la montagne',
            author : 'montessori',
            year : 2002,
            genre : 'roman',
            imageUrl : 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            ratings : [
                {
                    userId : 'id1240',
                    grade : 4,
                }
            ],
            averageRating : 4,
        }
    ];
    res.status(200).json(books);
});

module.exports = app;