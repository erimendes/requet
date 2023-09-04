import express from 'express';

export const Routes = () => {
    const router = express.Router();

    router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now());

        next();
    });

    router.get('/', async (req, res) => {
        try {
            console.log("Get Sucesso");

            return res.send("Get Sucesso")

        } catch (err) {
            console.log(err);
            res.status(400).send({ error: `Erro ao consultar.`, err});
        }
    });

    router.post('/', async (rea, res) => {
        try {
            return res.send("Post Sucesso");

        } catch (err) {
            console.log(err);
            res.status(400).send({ error: `Erro ao criar.`, err });
        }
    });

    return router;
}