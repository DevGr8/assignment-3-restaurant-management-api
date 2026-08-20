const logger = (request, response, next) => {
    const time = new Date().toISOString();
    console.log(`[${time}] ${request.method} ${request.originalUrl}`);
    next();
};

module.exports = logger;
