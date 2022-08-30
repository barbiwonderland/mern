const router = require('express').Router();
let Comment = require('../models/comment.model');

router.route('/').get((req, res) =>
{
    Comment.find()
        // PORQUE ACA ES RES.JSON?
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json('Error: ' + err));
});
// Me devuelve solamente el comentario de un  determinado usuario
router.route('/:id').get((req, res) =>
{
    const query = Comment.find({ userId: req.params.id }).then(comments => res.json(comments))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add/:id').post((req, res) =>
{
    // Guardo toda la información , el id que esta en params es del usuario que va a crear el comentario
    const newComment = new Comment({   // Guardo los datos que ingresa el usuario en variables
        comment: req.body.comment,
        userId: (req.params.id),
        date: new Date().toLocaleString()

    });

    // ACTUALIZO LOS DATOS EN LA API CON EL USUARIO CREADO EN EL PASO ANTERIOR
    // . save , .find etc  viene de mongoose 
    newComment.save()
        .then((newComment) => res.json(`comment added! ${newComment}`))
        .catch(err => res.status(400).json('Error: ' + err));
});

// REQ PARAMS ID LO ENCUENTRA EXPRESS , REQUEST ES LO QUE LE LLEGA DEL CLIENTE AL SERVIDOR , Y RESP ES RESPUESTA 
router.route('/:id').get((req, res) =>
{
    Comment.findById(req.params.id)
        .then(comment => res.json(comment))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/:id').delete((req, res) =>
{
    Comment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Comment deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) =>
{
    Comment.findById(req.params.id)
        .then(comment =>
        {
            comment.comment = req.body.comment,
                comment.userId = (req.params.id);

            comment.save()
                .then(() => res.json('comment updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;