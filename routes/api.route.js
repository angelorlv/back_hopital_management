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
router.get('/deconnect',require('../controller/status.controller').deconnect);

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
router.put('/user/access/:util_id',require('../controller/utilisateur.controller').setAccess);
router.get('/user/:id',require('../controller/utilisateur.controller').getDetailsUser);
router.put('/user',require('../controller/utilisateur.controller').update);

//Gestion des visite
router.post('/visites',require('../controller/visite.controller').register);
router.delete('/visite',require('../controller/visite.controller').delete);
router.get('/visites',require('../controller/visite.controller').getList);
router.put('/visite',require('../controller/visite.controller').update);

//Gestion des patient
router.post('/patient',require('../controller/patient.controller').register);
router.delete('/patient/:pat_id',require('../controller/patient.controller').delete);
router.get('/patients',require('../controller/patient.controller').getList);
router.get('/patients/out/search',require('../controller/patient.controller').outSearch);
router.put('/patient',require('../controller/patient.controller').update);

//Gestion des entreprises
router.post('/entreprises',require('../controller/entreprise.controller').register);
router.delete('/entreprise/:ent_id',require('../controller/entreprise.controller').delete);
router.get('/entreprises',require('../controller/entreprise.controller').getList);
router.get('/entreprises/out/search',require('../controller/entreprise.controller').outSearch);
router.put('/entreprise',require('../controller/entreprise.controller').update);

//Gestion des payement
router.post('/payements',require('../controller/payement.controller').register);
router.delete('/payement',require('../controller/payement.controller').delete);
router.get('/payements',require('../controller/payement.controller').getList);
router.put('/payement',require('../controller/payement.controller').update);

//Gestion des service
router.post('/service',require('../controller/service.controller').register);
router.delete('/service/:service_id',require('../controller/service.controller').delete);
router.get('/services',require('../controller/service.controller').getList);
router.get('/service/add-utils',require('../controller/service.controller').getAddUtils);
router.get('/service/utils-modif-prix',require('../controller/service.controller').getModifPrix);
router.put('/service',require('../controller/service.controller').update);
router.put('/service/modif-prix',require('../controller/service.controller').modifPrix);

router.get('/products/tarifs',require('../controller/service.controller').getListTarifsProducts)

//Gestion des detail
router.post('/details',require('../controller/detail.controller').register);
router.delete('/detail',require('../controller/detail.controller').delete);
router.get('/details',require('../controller/detail.controller').getList);
router.put('/detail',require('../controller/detail.controller').update);

//Gestion des tarif
router.post('/tarifs',require('../controller/tarif.controller').register);
router.delete('/tarif/:tarif_id',require('../controller/tarif.controller').delete);
router.get('/tarifs',require('../controller/tarif.controller').getList);
router.put('/tarif',require('../controller/tarif.controller').update);

//Gestion des departement
router.post('/departements',require('../controller/departement.controller').register);
router.delete('/departement/:dep_id',require('../controller/departement.controller').delete);
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

/*  -- mar 25 --   */ 

//Gestion des fournisseur
router.post('/fournisseurs',require('../controller/fournisseur.controller').register);
router.delete('/fournisseur/:fourn_id',require('../controller/fournisseur.controller').delete);
router.get('/fournisseurs',require('../controller/fournisseur.controller').getList);
router.put('/fournisseur',require('../controller/fournisseur.controller').update);

//Gestion des categorie_article
router.post('/categorie_articles',require('../controller/categorie_article.controller').register);
router.delete('/categorie_article',require('../controller/categorie_article.controller').delete);
router.get('/categorie_articles',require('../controller/categorie_article.controller').getList);
router.get('/categorie_articles/parent',require('../controller/categorie_article.controller').getListParent);
router.put('/categorie_article',require('../controller/categorie_article.controller').update);

//Gestion des article
router.post('/articles',require('../controller/article.controller').register);
router.delete('/article/:art_id',require('../controller/article.controller').delete);

//Recherche d'article
router.get('/articles/search',require('../controller/article.controller').searchByLabel)
router.get('/articles',require('../controller/article.controller').getList);
router.put('/article',require('../controller/article.controller').update);

router.get('/articles/utils-add',require('../controller/article.controller').getUtilsAdd);
router.get('/articles/sub-cat/:cat_id',require('../controller/article.controller').getListSubCat);

//Gestion des depot
router.post('/depots',require('../controller/depot.controller').register);
router.delete('/depot',require('../controller/depot.controller').delete);
router.get('/depots',require('../controller/depot.controller').getList);
router.put('/depot',require('../controller/depot.controller').update);

//Gestion des stock_article
router.post('/stock_articles',require('../controller/stock_article.controller').register);
router.delete('/stock_article',require('../controller/stock_article.controller').delete);
router.get('/stock_articles',require('../controller/stock_article.controller').getList);
router.put('/stock_article',require('../controller/depot.controller').update); 

//Gestion des encharge
router.post('/encharge',require('../controller/encharge.controller').register);
router.delete('/encharge/:encharge_id',require('../controller/encharge.controller').delete);

router.get('/encharge/utils/add',require('../controller/encharge.controller').utilsAdd); 
router.get('/encharge',require('../controller/encharge.controller').getList);
router.get('/encharge/print-pdf',require('../controller/encharge.controller').printToPDF);

router.get('/encharge/:encharge_id',require('../controller/encharge.controller').getOne);

router.put('/encharge',require('../controller/encharge.controller').update);

//Gestion des conslutation
router.post('/consultation',require('../controller/cons.controller').register);
router.delete('/consultation/:cons_id',require('../controller/cons.controller').delete);
// router.get('/conslutation/:conslutation_id',require('../controller/cons.controller').getOne);
router.get('/consultation',require('../controller/cons.controller').getList);
router.put('/consultation',require('../controller/cons.controller').update);
router.get('/consultation/:date',require('../controller/cons.controller').get_date_to);


//Gestion des facture
router.post('/facture',require('../controller/facture.controller').register);
router.delete('/facture/:cons_id',require('../controller/facture.controller').delete);
// router.get('/facture/:facture_id',require('../controller/facture.controller').getOne); 
router.get('/facture',require('../controller/facture.controller').getList);
router.get('/facture/add-utils',require('../controller/facture.controller').getAddUtils);
router.put('/facture',require('../controller/facture.controller').update);

router.get('/facture/download',require('../controller/encharge.controller').downFacture)

// router.get('/facture/set/med/tarif/',require('../controller/facture.controller').setMedicamentsTarif)

//Gestion des fact_service
router.post('/fact_service',require('../controller/fact_service.controller').register);
router.delete('/fact_service/:fserv_id',require('../controller/fact_service.controller').delete);
// router.get('/fact_service/:fact_service_id',require('../controller/fact_service.controller').getOne); 
router.get('/fact_service',require('../controller/fact_service.controller').getList);
router.put('/fact_service',require('../controller/fact_service.controller').update); 

//Gestion des importation des fichier
router.get('/article',require('../controller/impor_export/importation.controller').article); 
router.get('/export',require('../controller/impor_export/importation.controller').export); 
router.get('/import_temp',require('../controller/impor_export/importation.controller').import_temp);

//Gestion des mouvements dans le stock
router.post('/mvmt',require('../controller/mvmt.controller').register)
router.get('/mvmt/utils-add',require('../controller/mvmt.controller').getUtilsAdd)

//------
module.exports = router