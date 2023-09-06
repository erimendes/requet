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

    router.post('/', async (req, res) => {
        try {
            return res.send("Post Sucesso");

        } catch (err) {
            console.log(err);
            res.status(400).send({ error: `Erro ao criar.`, err });
        }
    });

    router.get('/object-get', async (req, res) => {
        return res.json({ ok: 'teste' });
    });
    router.get('/object-list', async (req, res) => {});
    router.post('/object-add', async (req, res) => {
        res.json({iv_pgmid: 'R3TR', 
                  iv_object: 'TABU',
                  iv_obj_name: 'ZTR_REQ',
                  objfunc: 'K'
                })
    });
    router.put('/object-move', async (req, res) => {});
    router.put('/object-lock', async (req, res) => {});
    router.put('/object-unlock', async (req, res) => {});
    router.delete('/object-del', async (req, res) => {});

    router.put('/request-change', async (req, res) => {});
    router.get('/request-find', async (req, res) => {});
    router.put('/request-release', async (req, res) => {});
    router.delete('/request-del', async (req, res) => {});
    router.post('/request-create', async (req, res) => {});

    router.put('/task-release', async (req, res) => {});
    router.delete('/task-cancel', async (req, res) => {});

    return router;
}