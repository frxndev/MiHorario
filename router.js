const express = require('express');
const router = express.Router();

const conexion = require('./database/db');
const crud = require('./controllers/crud');

// PAGINA INICIAL
router.get("/", (req, res) => {
    res.render('login');
});

// RUTAS PREDEFINIDAS
router.get("/dashboard", (req, res) => {
    res.render('dashboard');
});

router.get("/carrera", (req, res) => {
    res.render('carrera');
});

router.get("/aula", (req, res) => {
    res.render('aula');
});

router.get("/docente", (req, res) => {
    res.render('docente');
});

// LLAMAMOS LOS METODOS CRUDS
router.post('/saveUser', crud.saveUser);
router.post('/authUser', crud.authUser);
router.get('/register', crud.registerUser);
router.get('/deleteuser/:id', crud.deleteUser);

module.exports = router;