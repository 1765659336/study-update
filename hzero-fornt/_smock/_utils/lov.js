

const getLovData = (req, res) => {
  const {lovCode} = req.query || {};
  const retData = require('../_mock-data/lovData')[lovCode] || [];
  res.json(retData);
};

module.exports = {
  getLovData,
};
