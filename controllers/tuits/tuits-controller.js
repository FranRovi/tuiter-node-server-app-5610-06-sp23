import * as tuitsDao from '../tuits/tuits-dao.js'
// import posts from "./tuits.js"
// let tuits = posts;

const TuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.get('/api/tuits/:tid', findTuitById);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 100;
    newTuit.liked = false;
    newTuit.retuits = 50;
    newTuit.dislikes = 10;
    newTuit.replies = 123;
    newTuit.image = '../../images/web_dev_nasa_logo.png';
    newTuit.userName = "NASA",
    newTuit.handle = "@nasa",
    newTuit.time = "2h"

    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
    // console.log(req.body.description);
    // newTuit._id = (new Date()).getTime()+'';
    // newTuit.likes = 100;
    // newTuit.liked = false;
    // newTuit.retuits = 50;
    // newTuit.dislikes = 10;
    // newTuit.comments = 123

    //newTuit.description = "Hello World";
    // newTuit.userIcon = '../../../images/web_dev_nasa.logo.png'
    // tuits.push(newTuit);
    // res.json(newTuit);
    // res.sendStatus(201);
};
const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
    //res.json(tuits);
};

const findTuitById = (req, res) => {
    const singleTuitID = req.params.tid;
    const tuit = tuits.find(tuit => tuit._id === singleTuitID)
    res.json(tuit);
};

const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;
    console.log(updates);
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);
    res.json(status);
    // console.log(tuitIdToUpdate);
    
    // const tuit = tuits.find(tuit => tuit._id === tuitIdToUpdate)
    // const tuitIndex = tuits.findIndex(tuit => tuit._id === tuitIdToUpdate);
    // tuits[tuitIndex] = {...tuit, ...update};
    // console.log(tuit);
    // console.log(update);
    // res.sendStatus(200);
};
const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    // const tuit = tuits.find(tuit => tuit._id === tuitIdToDelete);
    // const index = tuits.indexOf(tuit);
    // tuits.splice(index, 1);
    //const tuits = tuits.filter(tuit => tuit._id !== tuitIDToDelete);
    // res.sendStatus(200);
    res.json(status);
};

export default TuitsController;
