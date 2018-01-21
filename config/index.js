/*
 |--------------------------------------------------------------------------
 | Initialization of the application based on environment variables
 |--------------------------------------------------------------------------
 |
 | setting value in .env file (APP_ENV)
 | support: local, production, test
 */
let app;
switch (process.env.APP_ENV) {
    case 'production':
        app = require('./production');
        break;
    case 'local':
        app = require('./local');
        break;
    case 'test':
        app = require('./local');
        break;
    default:
        throw new Error('Environment không được hỗ trợ');
}

module.exports = Object.assign({}, app);