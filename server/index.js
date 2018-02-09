const express = require ('express');
const cors = require ('cors');
const {json} = require ('body-parser');
const massive = require ('massive');
// const ctr = require ("./controller");
const app = express();

app.use(cors());
app.use(json());

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log(process.env)
    });

//shelves
// app.get('api/shelf/:id', ctr.getShelf)
// //bins
// app.get("/api/shelf/:id", ctr.getBin)
// app.put('/api/bin:id', ctr. updateBin)
// app.delete('/api/bin/:id', ctr.deleteObj)
// app.post('api/bin/:id', ctr.createObj)

const port = 3000;
app.listen(port, ()=>console.log(`I'm listening on port ${port}!`))