const getShelf = (req, res, next) => {
    const db = req.app.get("db");
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
//   db
//   .catch(console.log())
};

module.exports = {
  getShelf,
  getBin,
  updateBin,
  deleteObj,
  createObj
};
