let router = require('express').Router();

let D = require('../models/data');


//Pour la gestion d'authentification 
let auth = require('./../middleware/auth');
router.use(auth);

//les requires utils


//Message de Vérification
router.get('/',(req,res)=>{
    res.send({message:"API 1.0 Fonctionnel"})
});

//Ajout de l'admin si c'est pas déjà fait
router.get('/add-m',require('../controller/status.controller').addMaster);

//Route pour les test
router.get('/test-hash',require('../controller/test.controller').testBcrypt);


//Gestion de connexion
router.get('/status-connexion',require('../controller/status.controller').status);

//Route d'authentification
router.post('/auth',require('../controller/status.controller').auth); 

//Pour la gestion hospitalisation 
router.post('/hosp',require('../controller/hospitalisation.controller').register); // Ajout des données de l'hospitalisation
router.get('/hosp',require('../controller/hospitalisation.controller').getList); // récupération des données hospitalisation
router.delete('/hosp/:ref',require('../controller/hospitalisation.controller').delete); // Suppression d'une ligne d'hospitalisation par paramètre

//Gestion des utilisateur
router.post('/users',require('../controller/utilisateur.controller').register);
router.delete('/user',require('../controller/utilisateur.controller').delete);
router.get('/users',require('../controller/utilisateur.controller').getList);
router.get('/user/:id',require('../controller/utilisateur.controller').getDetailsUser);
router.put('/user',require('../controller/utilisateur.controller').update);

//Gestion des visite
router.post('/visites',require('../controller/visite.controller').register);
router.delete('/visite',require('../controller/visite.controller').delete);
router.get('/visites',require('../controller/visite.controller').getList);
router.put('/visite',require('../controller/visite.controller').update);

//Gestion des patient
router.post('/patient',require('../controller/patient.controller').register);
router.delete('/patient',require('../controller/patient.controller').delete);
router.get('/patients',require('../controller/patient.controller').getList);
router.put('/patient',require('../controller/patient.controller').update);

//Gestion des entreprises
router.post('/entreprises',require('../controller/entreprise.controller').register);
router.delete('/entreprise',require('../controller/entreprise.controller').delete);
router.get('/entreprises',require('../controller/entreprise.controller').getList);
router.put('/entreprise',require('../controller/entreprise.controller').update);

//Gestion des payement
router.post('/payements',require('../controller/payement.controller').register);
router.delete('/payement',require('../controller/payement.controller').delete);
router.get('/payements',require('../controller/payement.controller').getList);
router.put('/payement',require('../controller/payement.controller').update);

//Gestion des service
router.post('/services',require('../controller/service.controller').register);
router.delete('/service',require('../controller/service.controller').delete);
router.get('/services',require('../controller/service.controller').getList);
router.put('/service',require('../controller/service.controller').update);

//Gestion des detail
router.post('/details',require('../controller/detail.controller').register);
router.delete('/detail',require('../controller/detail.controller').delete);
router.get('/details',require('../controller/detail.controller').getList);
router.put('/detail',require('../controller/detail.controller').update);

//Gestion des tarif
router.post('/tarifs',require('../controller/tarif.controller').register);
router.delete('/tarif',require('../controller/tarif.controller').delete);
router.get('/tarifs',require('../controller/tarif.controller').getList);
router.put('/tarif',require('../controller/tarif.controller').update);

//Gestion des departement
router.post('/departements',require('../controller/departement.controller').register);
router.delete('/departement',require('../controller/departement.controller').delete);
router.get('/departements',require('../controller/departement.controller').getList);
router.put('/departement',require('../controller/departement.controller').update);

//Gestion des hospitalisation
router.post('/hospitalisations',require('../controller/hospitalisation.controller').register);
router.delete('/hospitalisation',require('../controller/hospitalisation.controller').delete);
router.get('/hospitalisations',require('../controller/hospitalisation.controller').getList);
router.put('/hospitalisation',require('../controller/hospitalisation.controller').update);

//Gestion des versement
router.post('/versements',require('../controller/versement.controller').register);
router.delete('/versement',require('../controller/versement.controller').delete);
router.get('/versements',require('../controller/versement.controller').getList);
router.put('/versement',require('../controller/versement.controller').update);


//------
module.exports = router