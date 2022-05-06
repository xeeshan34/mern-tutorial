const errorHandler = (req, res) => res.status(500).json({
    message: "Something went wrong",
    status: 500
});

module.exports = {
    errorHandler,
}