'use strict';
const joi = require('joi');

const envVarsSchema = joi.object({
    APP_ENV: joi.string()
        .allow(['local', 'production', 'test'])
        .require()
}).unknown().required();

const {error, value: envVars}  = joi.validate(process.env, envVarsSchema);

if (error) {
    throw new Error(`Config Validator Error ${error.message}`);
}

const config = {
    env: envVars.APP_ENV
};
module.exports = config;