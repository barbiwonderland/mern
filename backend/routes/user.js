const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) =>
{
    User.find()
        // PORQUE ACA ES RES.JSON?
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>
{


    // Guardo toda la información en un objeto de tipo User 
    const newUser = new User({   // Guardo los datos que ingresa el usuario en variables
        username: req.body.username,
        nickname: (req.body.nickname),
        age: Number(req.body.age)
    });

    // ACTUALIZO LOS DATOS EN LA API CON EL USUARIO CREADO EN EL PASO ANTERIOR
    // . save , .find etc  viene de mongoose 
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// REQ PARAMS ID LO ENCUENTRA EXPRESS , REQUEST ES LO QUE LE LLEGA DEL CLIENTE AL SERVIDOR , Y RESP ES RESPUESTA 
router.route('/:id').get((req, res) =>
{
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) =>
{
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) =>
{
    User.findById(req.params.id)
        .then(user =>
        {
            user.username = req.body.username;
            user.nickname = req.body.nickname;
            user.age = Number(req.body.age);

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;