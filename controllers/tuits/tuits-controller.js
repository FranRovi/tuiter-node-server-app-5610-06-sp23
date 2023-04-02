import posts from "./tuits.js"

let tuits = posts;

const TuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.get('/api/tuits/:tid', findTuitById);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = (req, res) => {
    const newTuit = req.body;
    console.log(req.body.description);
    // console.log(newTuit)
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 100;
    newTuit.liked = false;
    newTuit.retuits = 50;
    newTuit.dislikes = 10;
    newTuit.comments = 123

    //newTuit.description = "Hello World";
    newTuit.userIcon = '../../../images/web_dev_nasa.logo.png'
    tuits.push(newTuit);
    res.json(newTuit);
    // const newTuit = req.body;
    // tuits.push({
    //     ...tuits,
    //     id: (new Date()).getTime() + '',
    //     likes: 0,
    //     liked: false

    // })
    
    // tuits.push(newTuit);
    //res.json(newTuit);
    res.sendStatus(201);
};
const findTuits = (req, res) => {
    res.json(tuits);
};

const findTuitById = (req, res) => {
    const singleTuitID = req.params.tid;
    const tuit = tuits.find(tuit => tuit._id === singleTuitID)
    res.json(tuit);
};

const updateTuit = (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    console.log(tuitIdToUpdate);
    const update = req.body;
    const tuit = tuits.find(tuit => tuit._id === tuitIdToUpdate)
    const tuitIndex = tuits.findIndex(tuit => tuit._id === tuitIdToUpdate);
    tuits[tuitIndex] = {...tuit, ...update};
    console.log(tuit);
    console.log(update);
    res.sendStatus(200);
};
const deleteTuit = (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const tuit = tuits.find(tuit => tuit._id === tuitIdToDelete);
    const index = tuits.indexOf(tuit);
    tuits.splice(index, 1);
    //const tuits = tuits.filter(tuit => tuit._id !== tuitIDToDelete);
    res.sendStatus(200);
};

export default TuitsController;
