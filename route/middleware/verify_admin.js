function handle(req, res, next) {
    // TODO Xử lý middleware backend
    console.log("Middleware Admin");
    next();
}
module.exports = handle;