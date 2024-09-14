require('dotenv').config()
const webpack = require('webpack')

module.exports = {
    env: {
        AIRTABLE_RESUME_BASE: process.env.AIRTABLE_RESUME_BASE,
        AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    }
}