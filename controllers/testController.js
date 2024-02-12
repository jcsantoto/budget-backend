
exports.testGet = async (req, res) => {
    const data = req.query;
    res.json(data);
};

exports.testPost = async (req, res) => {
    const data = req.body;

    res.json(data);
};