const getShelf = (req, res, next) => {
  const {id} = req.params;
  const shelfId = id[0];
  const binNum = id[i];
  req.app   
    .get('db')
    .get_shelf_id([shelfId, binNum])
    .then(result => res.status(200).json(result))
    .catch(console.log);
};
const getBin = (req, res, next) => {
  const db = req.app.get("db");
};
const updateBin = (req, res, next) => {
  const db = req.app.get("db");
};
const deleteObj = (req, res, next) => {
  const db = req.app.get("db");
};
const createObj = (req, res, next) => {
  const db = req.app.get("db");
};

module.exports = {
  getShelf,
  getBin,
  updateBin,
  deleteObj,
  createObj
};
